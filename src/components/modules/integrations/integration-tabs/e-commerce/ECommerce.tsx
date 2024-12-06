import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { useConnectShopifyMutation } from 'src/store/integrations/e-commerce.api';
import { getRedirectUri } from 'src/utils/auth';

// import { clearShopifyCookies } from 'src/utils/modules/integrations/shopify.utils';

export const ECommerce = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [searchParams] = useSearchParams();
  const [connectShopify, { isLoading }] = useConnectShopifyMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('connected') === 'shopify') {
      connectShopify({
        email: 'dipikesh.singh.915@gmail.com',
      })
        .unwrap()
        .then()
        .finally(() => {
          // clearShopifyCookies();
          searchParams.delete('connected');
          navigate({
            search: searchParams.toString(),
          });
        });
    }

    if (searchParams.get('success') === 'salla') {
      toast.success('Salla connected successfully!', {
        id: 'salla-connect',
      });
      searchParams.delete('success');
      navigate({
        search: searchParams.toString(),
      });
    }
  }, [searchParams]);

  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <IntegrationCard
        title='Shopify'
        description='Boost your business with Shopify—your all-in-one eCommerce platform for effortless store management, marketing, and sales growth.'
        icon={<GatewayLogo app='shopify' width={32} />}
      >
        <Button
          leadingIcon={<FiZap fill='white' size={22} />}
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
          loading={isLoading}
        >
          Connect store
        </Button>
      </IntegrationCard>

      <IntegrationCard
        title='Salla'
        description='Expand your reach with Salla—your comprehensive eCommerce solution for seamless store management, effective marketing, and increased sales.'
        icon={<GatewayLogo app='salla' width={32} />}
      >
        <Button
          leadingIcon={<FiZap fill='white' size={22} />}
          onClick={async () => {
            window.location.href = await getRedirectUri('/salla/oauth', {
              brandId,
              redirectUri: window.location.href,
            });
          }}
        >
          Connect store
        </Button>
      </IntegrationCard>
    </div>
  );
};
