import { Button, GatewayLogo, Modal, TextInput } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';
import { useConnectShopifyMutation } from 'src/store/integrations/e-commerce.api';

const ModalBody = ({
  setOpened,
  shopifyShop,
  installationId,
}: {
  setOpened: (value: boolean) => void;
  shopifyShop: string;
  installationId: string;
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [connectShopify, { isLoading }] = useConnectShopifyMutation();

  const handleConnect = async () => {
    const res = await connectShopify({
      installationId,
      shopifyShop,
      email,
    }).unwrap();
    if (res.success) {
      setOpened(false);
    }
  };

  return (
    <div className='p-8 space-y-4'>
      <GatewayLogo app='shopify' width={32} />
      <div className='text-xl font-semibold text-gray-900'>
        {t('integrations.enter_shopify_email')}
      </div>
      <TextInput value={shopifyShop} disabled />
      <TextInput
        label={t('onboarding.email')}
        placeholder={t('integrations.enter_shopify_email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='mt-4'>
        <Button
          className='!w-40'
          disabled={!email}
          fullWidth
          onClick={handleConnect}
          loading={isLoading}
        >
          {t('create_campaign.done')}
        </Button>
      </div>
    </div>
  );
};

export const ShopifyConnectModal = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [installationId, setInstallationId] = useState('');
  const [shopifyShop, setShopifyShop] = useState('');
  const [showModal, setIsShowModal] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const installationIdParam = searchParams.get(QUERY_PARAMS.INSTALLATION_ID);
    const shopifyShopParam = searchParams.get(QUERY_PARAMS.SHOPIFY_SHOP);
    if (installationIdParam && shopifyShopParam) {
      setInstallationId(installationIdParam);
      setShopifyShop(shopifyShopParam);
      setIsShowModal(true);
      url.searchParams.delete(QUERY_PARAMS.INSTALLATION_ID);
      url.searchParams.delete(QUERY_PARAMS.SHOPIFY_SHOP);
      navigate({ search: url.search }, { replace: true });
    }
  }, [searchParams]);

  return (
    <Modal
      size='sm'
      withNoHeader
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setIsShowModal}
      body={() => (
        <ModalBody
          setOpened={setIsShowModal}
          shopifyShop={shopifyShop}
          installationId={installationId}
        />
      )}
      onClose={() => setIsShowModal(false)}
    >
      {() => <></>}
    </Modal>
  );
};
