import { FiZap } from '@nabiq-icons';
import { Badge, Button, ConfirmationModal, GatewayLogo, Group } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopifyConnectModal } from 'src/components/modules/integrations/integration-tabs/data-sources/modals/ShopifyConnectModal';
import { TDataSourcePlatform } from 'src/interfaces/brand.interface';
import { QUERY_PARAMS, QUERY_PARAMS_VALUES } from 'src/lib/integration/ecommerce';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectDataSourceMutation } from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

export const ECommerce = () => {
  const { t } = useTranslation();
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [disconnectDataSource, { isLoading: isDisconnecting }] = useDisconnectDataSourceMutation();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<TDataSourcePlatform | null>(null);

  const handleDisconnect = async (platform: TDataSourcePlatform) => {
    const res = await disconnectDataSource({ brandId, platform }).unwrap();
    if (res.success) {
      setShowDisconnectModal(null);
    }
  };

  useEffect(() => {
    if (searchParams.get(QUERY_PARAMS.SUCCESS) === QUERY_PARAMS_VALUES.SALLA_CONNECT) {
      toast.success('Salla connected successfully!', {
        id: 'salla-connect',
      });
      searchParams.delete(QUERY_PARAMS.SUCCESS);
      navigate({
        search: searchParams.toString(),
      });
    }
  }, [searchParams]);

  const isShopifyConnected = datasourceIntegrations?.tokens?.shopify;
  const isSallaConnected = datasourceIntegrations?.tokens?.salla;

  return (
    <>
      <IntegrationCard
        title='Shopify'
        description={t('integrations.datasource.shopify_desc')}
        icon={<GatewayLogo app='shopify' width={32} />}
        isConnected={isShopifyConnected}
        badge={
          isShopifyConnected &&
          datasourceIntegrations?.connectedAccounts?.shopify?.shop && (
            <div className='flex items-center gap-2'>
              <Badge color='gray'>{datasourceIntegrations?.connectedAccounts?.shopify.shop}</Badge>
            </div>
          )
        }
      >
        <Group>
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            variant={isShopifyConnected ? 'secondary' : 'primary'}
            onClick={async () => {
              window.location.href = await getOAuthUrl(
                '/shopify/install/direct',
                {
                  // brandId,
                  // redirectUri: window.location.href,
                  shop: import.meta.env.VITE_SHOPIFY_APP_NAME,
                },
                {
                  sendToken: false,
                },
              );
            }}
          >
            {isShopifyConnected ? 'Reconnect store' : 'Connect store'}
          </Button>
          {isShopifyConnected && (
            <Button
              variant='tertiary-destructive'
              onClick={() => {
                setSelectedPlatform('shopify');
                setShowDisconnectModal(true);
              }}
            >
              Disconnect
            </Button>
          )}
        </Group>
      </IntegrationCard>

      <IntegrationCard
        title='Salla'
        description={t('integrations.datasource.salla_desc')}
        icon={<GatewayLogo app='salla' width={32} />}
        isConnected={isSallaConnected}
        badge={
          isSallaConnected &&
          datasourceIntegrations?.connectedAccounts?.salla?.store && (
            <div className='flex items-center gap-2'>
              <Badge color='gray'>
                ID: {datasourceIntegrations?.connectedAccounts?.salla?.store?.id}
              </Badge>
              <Badge color='gray'>
                Name: {datasourceIntegrations?.connectedAccounts?.salla?.store?.name}
              </Badge>
            </div>
          )
        }
      >
        <Group>
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            variant={isSallaConnected ? 'secondary' : 'primary'}
            onClick={async () => {
              window.location.href = await getOAuthUrl('/salla/oauth', {
                brandId,
                redirectUri: window.location.href,
              });
            }}
            disabled={isDisconnecting}
          >
            {isSallaConnected ? 'Reconnect store' : 'Connect store'}
          </Button>
          {isSallaConnected && (
            <Button
              variant='tertiary-destructive'
              onClick={() => {
                setSelectedPlatform('salla');
                setShowDisconnectModal(true);
              }}
            >
              Disconnect
            </Button>
          )}
        </Group>
      </IntegrationCard>

      <ShopifyConnectModal />
      <ConfirmationModal
        title='Are you sure you want to disconnect this platform?'
        showModal={showDisconnectModal}
        setShowModal={setShowDisconnectModal}
        onConfirm={() => handleDisconnect(selectedPlatform)}
      />
    </>
  );
};
