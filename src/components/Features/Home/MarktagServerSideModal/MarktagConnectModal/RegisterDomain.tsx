import { Button, Select, Stack, Text, TextInput, useGetColors } from '@nabiq-ui';
import { useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useAppSelector } from 'src/store/hooks';
import {
  useLazyGetMarkTagByIdQuery,
  useRegisterTagMutation,
} from 'src/store/marktag/markopoloMarktagApi';
import { useGetBrandsListQuery } from 'src/store/marktag/marktagApi';

import HowItWorksModal from '../HowItworksModal';

const RegisterDomain = () => {
  const { gray500 } = useGetColors();
  const { marktagType, domain, setDomain, setStep } =
    useContext<MarktagContextType>(MarkTagContext);

  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [resourceId, setResourceId] = useState<string>(connectedBrand?.resourceId || '');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const { data: brandsList, isLoading: isLoadingBrandList } = useGetBrandsListQuery();
  const [getMarkTagById, { data: domainData }] = useLazyGetMarkTagByIdQuery();
  const [registerTag, { isLoading }] = useRegisterTagMutation();

  const brandsListOptions = useMemo(
    () =>
      brandsList?.map(({ brandName: label, resourceId: value }) => ({
        label,
        value,
      })),
    [brandsList],
  );

  const selectedBrand = useMemo(
    () => brandsList?.find((item) => item.resourceId === resourceId),
    [brandsList, resourceId],
  );

  // useEffect(() => {
  //   if (marktagType === 'shopify') {
  //     setLoading(true);
  //     markTagApi
  //       .getShopifyCustomDomain({ brandId })
  //       .then((res) => {
  //         setDomain(extractMainDomain(res));
  //       })
  //       .finally(() => setLoading(false));
  //   }
  //   if (marktagType === 'woocommerce') {
  //     setLoading(true);
  //     markTagApi
  //       .getWoocommerceCustomDomain({ brandId })
  //       .then((res) => {
  //         setDomain(extractMainDomain(res));
  //       })
  //       .finally(() => setLoading(false));
  //   }
  // }, [marktagType]);

  const handleContinueMarkTag = async () => {
    if (!resourceId) {
      toast.error('Select a brand!');
      return;
    }

    if (!domain) {
      toast.error('Enter a domain!');
      return;
    }

    if (domain?.toLowerCase()?.includes('https://') || domain?.toLowerCase()?.includes('www.')) {
      toast.error('Domain cannot contain https:// or www.');
      return;
    }

    const res = await registerTag({
      brandId: resourceId,
      domain,
      isMobile: marktagType === 'mobile',
      isShopify: marktagType === 'shopify',
      isWoocommerce: marktagType === 'woocommerce',
    }).unwrap();

    if (res?.markTagId) {
      setIsRegistered(true);
      getMarkTagById(res.markTagId);
    }
  };

  useEffect(() => {
    if (isRegistered && domainData) {
      const records = domainData.data?.records;
      console.log({ domainData });
      if (records && records.length > 0) {
        // setDomainData(domainData);
        setStep('verify');
      }
    }
  }, [isRegistered, domainData]);

  return (
    <Stack gap={8}>
      <Select
        className='mb-0'
        label='Brand'
        placeholder='Select brand'
        value={resourceId}
        onChange={(brandItem) => setResourceId(brandItem)}
        data={brandsListOptions}
        leftSection={
          resourceId && (
            <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-semibold leading-4'>
              {selectedBrand?.brandName?.charAt(0)?.toUpperCase()}
            </div>
          )
        }
        disabled={isLoadingBrandList}
      />
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
      <Stack gap={12}>
        <Button
          style={{ marginTop: '20px', width: '100%' }}
          loading={isLoading}
          disabled={domain?.length === 0}
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
