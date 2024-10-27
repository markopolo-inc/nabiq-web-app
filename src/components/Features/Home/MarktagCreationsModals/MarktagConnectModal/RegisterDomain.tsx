import { Button, Select, Stack, Text, TextInput, useGetColors } from '@nabiq-ui';
import { useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { DomainDataType, MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useUpdateSettingMutation } from 'src/store/company/companyApi';
import { useAppSelector } from 'src/store/hooks';
import {
  useLazyGetMarkTagByIdQuery,
  useLazyGetShopifyCustomDomainQuery,
  useLazyGetWoocommerceCustomDomainQuery,
  useRegisterTagMutation,
} from 'src/store/marktag/markopoloMarktagApi';
import { useGetBrandsListQuery } from 'src/store/marktag/marktagApi';
import { extractMainDomain } from 'src/utils/extractMainDomain';

import HowItWorksModal from '../HowItworksModal';

const RegisterDomain = () => {
  const { gray500, gray600, gray900 } = useGetColors();
  const [updateSetting] = useUpdateSettingMutation();
  const { marktagType, domain, setDomain, setDomainData, setStep } =
    useContext<MarktagContextType>(MarkTagContext);

  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [brandId, setBrandId] = useState<string>(connectedBrand?.resourceId || '');
  const { data: brandsList, isLoading: isLoadingBrandList } = useGetBrandsListQuery();
  const [getMarkTagDetails, { isLoading: isLoadingMarkTagDetails }] = useLazyGetMarkTagByIdQuery();
  const [registerTag, { isLoading }] = useRegisterTagMutation();
  const [triggerShopifyDomain, { data: shopifyDomain, isLoading: isLoadingShopify }] =
    useLazyGetShopifyCustomDomainQuery();
  const [triggerWoocommerceDomain, { data: woocommerceDomain, isLoading: isLoadingWoocommerce }] =
    useLazyGetWoocommerceCustomDomainQuery();

  const brandsListOptions = useMemo(
    () =>
      brandsList?.map(({ brandName: label, resourceId: value }) => ({
        label,
        value,
      })),
    [brandsList],
  );

  const selectedBrand = useMemo(
    () => brandsList?.find((item) => item.resourceId === brandId),
    [brandsList, brandId],
  );

  // get the custom domain for the brand
  useEffect(() => {
    if (marktagType === 'shopify' && brandId) {
      triggerShopifyDomain(brandId);
    }
    if (marktagType === 'woocommerce' && brandId) {
      triggerWoocommerceDomain(brandId);
    }
  }, [marktagType, brandId, triggerShopifyDomain, triggerWoocommerceDomain]);

  useEffect(() => {
    if (shopifyDomain && marktagType === 'shopify') {
      setDomain(extractMainDomain(shopifyDomain));
    }
    if (woocommerceDomain && marktagType === 'woocommerce') {
      setDomain(extractMainDomain(woocommerceDomain));
    }
  }, [shopifyDomain, woocommerceDomain, marktagType, setDomain]);

  const handleContinueMarkTag = async () => {
    if (!brandId) {
      toast.error('Select a brand!');
      return;
    }

    if (marktagType !== 'client-side') {
      if (!domain) {
        toast.error('Enter a domain!');
        return;
      }

      if (domain?.toLowerCase()?.includes('https://') || domain?.toLowerCase()?.includes('www.')) {
        toast.error('Domain cannot contain https:// or www.');
        return;
      }
    }

    const res = await registerTag({
      brandId,
      domain: marktagType === 'client-side' ? 'mtag-client.markopolo.ai' : domain,
      isClient: marktagType === 'client-side',
      isMobile: marktagType === 'mobile',
      isShopify: marktagType === 'shopify',
      isWoocommerce: marktagType === 'woocommerce',
    }).unwrap();

    // save the selected brand
    if (brandId !== connectedBrand?.resourceId) {
      const brandPayload = {
        resourceId: selectedBrand.resourceId,
        companyId: selectedBrand.companyId,
        brandName: selectedBrand.brandName,
        brandWebsite: selectedBrand.brandWebsite,
        brandLogo: selectedBrand.brandInfo.brandLogo,
        connectedAccounts: selectedBrand.connectedAccounts,
      };

      updateSetting({ connectedBrand: brandPayload }).unwrap();
    }

    if (res?.markTagId) {
      const shapedData: DomainDataType = {
        markTagId: res.markTagId,
        records: [res.record],
      };

      if (marktagType === 'client-side') {
        const response = await getMarkTagDetails(res.markTagId).unwrap();

        const domainData = { ...response, markTagId: response?.resourceId };
        setDomainData(domainData);
        setStep('choose');
      } else {
        setDomainData(shapedData);
        setStep('verify');
      }
    }
  };

  return (
    <Stack gap={20}>
      <Stack gap={8} mt={16}>
        <Text color={gray900} size='24px' weight={600}>
          Domain setup
        </Text>
        <Text color={gray600} size='16px'>
          Enter domain details.
        </Text>
      </Stack>
      <Select
        className='mb-0'
        label='Brand'
        placeholder='Select brand'
        value={brandId}
        onChange={(brandItem) => setBrandId(brandItem)}
        data={brandsListOptions}
        leftSection={
          brandId && (
            <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-semibold leading-4'>
              {selectedBrand?.brandName?.charAt(0)?.toUpperCase()}
            </div>
          )
        }
        disabled={isLoadingBrandList}
      />

      {marktagType !== 'client-side' && (
        <Stack gap={4}>
          <TextInput
            label='Domain name'
            placeholder='Website URL'
            disabled={['shopify', 'woocommerce']?.includes(marktagType)}
            value={domain}
            onChange={(e) => setDomain(e.currentTarget.value)}
          />
          <Text color={gray500} size='14px'>
            Enter your domain without https: // or www.
          </Text>
        </Stack>
      )}

      <Stack gap={12} mt={12}>
        <Button
          fullWidth
          loading={isLoading || isLoadingMarkTagDetails || isLoadingShopify || isLoadingWoocommerce}
          disabled={marktagType !== 'client-side' && domain?.length === 0}
          onClick={handleContinueMarkTag}
        >
          Continue
        </Button>
        <HowItWorksModal />
      </Stack>
    </Stack>
  );
};

export default RegisterDomain;
