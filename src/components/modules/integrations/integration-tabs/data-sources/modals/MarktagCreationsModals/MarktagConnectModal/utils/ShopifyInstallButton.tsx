import { FiShopify } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';
import {
  useInstallShopifyCodeMutation,
  useLazyGetMarkTagByIdQuery,
} from 'src/store/marktag/markopoloMarktagApi';

const ShopifyMarktagInstallButton = ({ markTagId, domainData, setDomainData }) => {
  const { t } = useTranslation();
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [installShopifyCode, { isLoading: isInstalling }] = useInstallShopifyCodeMutation();
  const [getMarkTagById, { isLoading: isFetching }] = useLazyGetMarkTagByIdQuery();

  const installShopify = async (action: 'add' | 'delete') => {
    await installShopifyCode({ brandId: connectedBrand?.resourceId, markTagId, action });
    toast.success(
      action === 'add' ? t('home_page.installed_on_shopify') : t('home_page.removed_from_shopify'),
      {
        id: 'shopify-installed',
      },
    );
    toast.loading(t('home_page.please_wait'), { id: 'shopify-loading' });
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
          {t('home_page.install_on_shopify')}
        </Button>
      )}
      {domainData?.isShopify && domainData?.shopifyScriptTag?.length > 0 && (
        <Button
          variant='primary'
          leadingIcon={<FiShopify size={18} />}
          onClick={() => installShopify('delete')}
          loading={isLoading}
        >
          {t('home_page.remove_from_shopify')}
        </Button>
      )}
    </>
  );
};

export default ShopifyMarktagInstallButton;
