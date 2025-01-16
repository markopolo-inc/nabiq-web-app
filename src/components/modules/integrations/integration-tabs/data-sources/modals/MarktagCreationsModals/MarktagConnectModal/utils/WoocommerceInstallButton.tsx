import { FiWooCommerce } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';
import {
  useInstallWooCommerceCodeMutation,
  useLazyGetMarkTagByIdQuery,
} from 'src/store/marktag/markopoloMarktagApi';

const WoocommerceMarktagInstallButton = ({ markTagId, domainData, setDomainData }) => {
  const { t } = useTranslation();
  const { connectedBrand } = useAppSelector((state) => state.brand);

  const [installWooCommerceCode, { isLoading: isInstalling }] = useInstallWooCommerceCodeMutation();
  const [getMarkTagById, { isLoading: isFetching }] = useLazyGetMarkTagByIdQuery();

  const installWooCommerce = async (action: 'add' | 'delete') => {
    await installWooCommerceCode({ brandId: connectedBrand?.resourceId, markTagId, action });
    toast.success(
      action === 'add'
        ? t('home_page.installed_on_woocommerce')
        : t('home_page.removed_from_woocommerce'),
      {
        id: 'woocommerce-installed',
      },
    );
    toast.loading(t('home_page.please_wait'), { id: 'woocommerce-loading' });
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
          {t('home_page.install_on_woocommerce')}
        </Button>
      )}
      {domainData?.isWoocommerce && domainData?.woocommerceScriptTag?.length > 0 && (
        <Button
          variant='secondary'
          onClick={() => installWooCommerce('delete')}
          loading={isLoading}
          leadingIcon={<FiWooCommerce size={18} />}
        >
          {t('home_page.remove_from_woocommerce')}
        </Button>
      )}
    </>
  );
};

export default WoocommerceMarktagInstallButton;
