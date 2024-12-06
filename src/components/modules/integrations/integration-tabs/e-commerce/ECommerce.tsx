import { FiZap } from '@nabiq-icons';
import { Badge, Button, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopifyConnectModal } from 'src/components/modules/integrations/integration-tabs/e-commerce';
import { APPS } from 'src/lib/integration';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';
import { useAppSelector } from 'src/store/hooks';
import { getRedirectUri } from 'src/utils/auth';

export const ECommerce = () => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get(QUERY_PARAMS.SUCCESS) === APPS.SALLA) {
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
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <IntegrationCard
          title='Shopify'
          description='Boost your business with Shopify—your all-in-one eCommerce platform for effortless store management, marketing, and sales growth.'
          icon={<GatewayLogo app='shopify' width={32} />}
          isConnected={isShopifyConnected}
          badge={
            isShopifyConnected &&
            datasourceIntegrations?.connectedAccounts?.shopify?.shop && (
              <div className='flex items-center gap-2'>
                <Badge color='gray'>
                  {datasourceIntegrations?.connectedAccounts?.shopify.shop}
                </Badge>
              </div>
            )
          }
        >
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            variant={isShopifyConnected ? 'secondary' : 'primary'}
            onClick={async () => {
              window.location.href = await getRedirectUri(
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
        </IntegrationCard>

        <IntegrationCard
          title='Salla'
          description='Expand your reach with Salla—your comprehensive eCommerce solution for seamless store management, effective marketing, and increased sales.'
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
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            variant={isSallaConnected ? 'secondary' : 'primary'}
            onClick={async () => {
              window.location.href = await getRedirectUri('/salla/oauth', {
                brandId,
                redirectUri: window.location.href,
              });
            }}
          >
            {isSallaConnected ? 'Reconnect store' : 'Connect store'}
          </Button>
        </IntegrationCard>
      </div>
      <ShopifyConnectModal />
    </>
  );
};
