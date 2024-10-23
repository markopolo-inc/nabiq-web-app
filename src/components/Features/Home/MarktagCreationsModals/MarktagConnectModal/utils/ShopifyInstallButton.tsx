import { FiShopify } from '@nabiq-icons';
import { Button, Group } from '@nabiq-ui';

/* eslint-disable @typescript-eslint/no-unused-vars */
const ShopifyMarktagInstallButton = ({
  setLoading,
  markTagId,
  domainData,
  setDomainData,
  loading,
  fullWidth = false,
}) => {
  // const { selectedBrand: brandId } = useAppSelector((state) => state.brand);

  // const installShopify = async (action: 'add' | 'delete') => {
  //   try {
  //     setLoading(true);
  //     const res = await markTagApi.installShopifyCode({
  //       brandId,
  //       markTagId,
  //       action,
  //     });
  //     if (res.status === 200) {
  //       toast.success(
  //         action === 'add' ? 'Installed on shopify' : 'Removed from shopify'
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
      {domainData?.isShopify && !(domainData.shopifyScriptTag?.length > 0) && (
        <Button
          fullWidth
          variant='secondary'
          leadingIcon={<FiShopify color='#96bf48' size={18} />}
          size='sm'
          //  onClick={() => installShopify('add')}
          loading={loading}
        >
          Install on Shopify
        </Button>
      )}
      {domainData?.isShopify && domainData?.shopifyScriptTag?.length > 0 && (
        <Button
          fullWidth
          size='sm'
          variant='secondary'
          leadingIcon={<FiShopify size={18} />}
          //  onClick={() => installShopify('delete')}
          loading={loading}
        >
          <Group gap={4}>Remove from Shopify</Group>
        </Button>
      )}
    </Group>
  );
};

export default ShopifyMarktagInstallButton;
