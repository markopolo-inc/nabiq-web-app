import { Button, Group } from '@nabiq-ui';

/* eslint-disable @typescript-eslint/no-unused-vars */
const WoocommerceMarktagInstallButton = ({
  setLoading,
  markTagId,
  domainData,
  setDomainData,
  loading,
  fullWidth = false,
}) => {
  // const { selectedBrand: brandId } = useAppSelector((state) => state.brand);

  // const installWooCommerce = async (action: 'add' | 'delete') => {
  //   try {
  //     setLoading(true);
  //     const res = await markTagApi.installWooCommerceCode({
  //       brandId,
  //       markTagId,
  //       action,
  //     });

  //     if (res.status === 200) {
  //       toast.success(
  //         action === 'add'
  //           ? 'Installed on woocommerce'
  //           : 'Removed from woocommerce'
  //       );
  //       toast.loading('Please wait!');
  //       const selectedTag = await markTagApi.getMarkTagById({ markTagId });
  //       if (selectedTag) {
  //         setDomainData({
  //           ...domainData,
  //           ...selectedTag,
  //         });
  //       }
  //       toast.dismiss();
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Group>
      {domainData?.isWoocommerce && !(domainData?.woocommerceScriptTag?.length > 0) && (
        <Button
          fullWidth
          size='sm'
          //  leadingIcon={<FaWordpress size={18} />}
          variant='secondary'
          // onClick={() => installWooCommerce('add')}
          loading={loading}
        >
          Install on WooCommerce
        </Button>
      )}
      {domainData?.isWoocommerce && domainData?.woocommerceScriptTag?.length > 0 && (
        <Button
          fullWidth
          size='sm'
          variant='secondary'
          //  onClick={() => installWooCommerce('delete')}
          loading={loading}
          // leadingIcon={<FaWordpress size={18} />}
        >
          Remove from WooCommerce
        </Button>
      )}
    </Group>
  );
};

export default WoocommerceMarktagInstallButton;
