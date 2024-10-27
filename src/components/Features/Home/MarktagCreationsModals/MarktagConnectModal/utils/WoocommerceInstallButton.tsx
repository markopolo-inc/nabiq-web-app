import { FiWooCommerce } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useAppSelector } from 'src/store/hooks';
import {
  useInstallWooCommerceCodeMutation,
  useLazyGetMarkTagByIdQuery,
} from 'src/store/marktag/markopoloMarktagApi';

const WoocommerceMarktagInstallButton = ({ markTagId, domainData, setDomainData }) => {
  const { connectedBrand } = useAppSelector((state) => state.brand);

  const [installWooCommerceCode, { isLoading: isInstalling }] = useInstallWooCommerceCodeMutation();
  const [getMarkTagById, { isLoading: isFetching }] = useLazyGetMarkTagByIdQuery();

  const installWooCommerce = async (action: 'add' | 'delete') => {
    await installWooCommerceCode({ brandId: connectedBrand?.resourceId, markTagId, action });
    toast.success(action === 'add' ? 'Installed on WooCommerce' : 'Removed from WooCommerce');
    toast.loading('Please wait!');
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
      {domainData?.isWoocommerce && !(domainData?.woocommerceScriptTag?.length > 0) && (
        <Button
          leadingIcon={<FiWooCommerce size={18} />}
          variant='secondary'
          onClick={() => installWooCommerce('add')}
          loading={isLoading}
        >
          Install on WooCommerce
        </Button>
      )}
      {domainData?.isWoocommerce && domainData?.woocommerceScriptTag?.length > 0 && (
        <Button
          variant='secondary'
          onClick={() => installWooCommerce('delete')}
          loading={isLoading}
          leadingIcon={<FiWooCommerce size={18} />}
        >
          Remove from WooCommerce
        </Button>
      )}
    </>
  );
};

export default WoocommerceMarktagInstallButton;
