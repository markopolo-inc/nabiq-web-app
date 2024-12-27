import { FiShopify } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useAppSelector } from 'src/store/hooks';
import {
  useInstallShopifyCodeMutation,
  useLazyGetMarkTagByIdQuery,
} from 'src/store/marktag/markopoloMarktagApi';

const ShopifyMarktagInstallButton = ({ markTagId, domainData, setDomainData }) => {
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [installShopifyCode, { isLoading: isInstalling }] = useInstallShopifyCodeMutation();
  const [getMarkTagById, { isLoading: isFetching }] = useLazyGetMarkTagByIdQuery();

  const installShopify = async (action: 'add' | 'delete') => {
    await installShopifyCode({ brandId: connectedBrand?.resourceId, markTagId, action });
    toast.success(action === 'add' ? 'Installed on shopify' : 'Removed from shopify', {
      id: 'shopify-installed',
    });
    toast.loading('Please wait!', { id: 'shopify-loading' });
    const selectedTag = await getMarkTagById(markTagId).unwrap();
    if (selectedTag) {
      setDomainData({
        ...domainData,
        ...selectedTag,
      });
    }
    toast.dismiss();
  };

  const isLoading = isInstalling || isFetching;

  return (
    <>
      {domainData?.isShopify && !(domainData.shopifyScriptTag?.length > 0) && (
        <Button
          variant='primary'
          leadingIcon={<FiShopify size={18} />}
          onClick={() => installShopify('add')}
          loading={isLoading}
        >
          Install on Shopify
        </Button>
      )}
      {domainData?.isShopify && domainData?.shopifyScriptTag?.length > 0 && (
        <Button
          variant='primary'
          leadingIcon={<FiShopify size={18} />}
          onClick={() => installShopify('delete')}
          loading={isLoading}
        >
          Remove from Shopify
        </Button>
      )}
    </>
  );
};

export default ShopifyMarktagInstallButton;
