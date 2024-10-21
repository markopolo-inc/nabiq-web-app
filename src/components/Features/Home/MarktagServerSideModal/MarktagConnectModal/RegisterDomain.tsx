import { Button, Stack, Text, TextInput, useGetColors } from '@nabiq-ui';
import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

import HowItWorksModal from '../HowItworksModal';

const RegisterDomain = () => {
  //  const { domain, setDomain, setStep, loading, setLoading, setDomainData } =
  const { marktagType, domain, setDomain, loading } =
    useContext<MarktagContextType>(MarkTagContext);
  const { gray500 } = useGetColors();

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

  // const handleContinueMarkTag = async () => {
  //   if (!domain) {
  //     toast.error('Enter a domain!');
  //     return;
  //   }
  //   if (
  //     domain?.toLowerCase()?.includes('https://') ||
  //     domain?.toLowerCase()?.includes('www.')
  //   ) {
  //     toast.error('Domain can not contain https:// or www.');
  //     setLoading(false);
  //     return;
  //   }
  //   setLoading(true);
  //   const id = toast.loading('Registering tag!');
  //   const res = await markTagApi.registerTag({
  //     brandId,
  //     domain,
  //     isMobile: marktagType === 'mobile',
  //     isShopify: marktagType === 'shopify',
  //     isWoocommerce: marktagType === 'woocommerce',
  //   });
  //   if (res) {
  //     toast.success('Tag Registered!');
  //     const domainData = await markTagApi.getMarkTagById({
  //       markTagId: res?.markTagId,
  //     });
  //     setDomainData(domainData);
  //     if (domainData?.records?.length > 0) {
  //       setStep('verify');
  //     }
  //   }
  //   toast.dismiss(id);
  //   setLoading(false);
  // };

  return (
    <Stack gap={8}>
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
          loading={loading}
          disabled={domain?.length === 0}
          // onClick={handleContinueMarkTag}
        >
          Continue
        </Button>
        <HowItWorksModal />
      </Stack>
    </Stack>
  );
};

export default RegisterDomain;
