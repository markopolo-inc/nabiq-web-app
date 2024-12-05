import { GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';

export const ECommerce = () => {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <IntegrationCard
        title='Shopify'
        description='Connect your Shopify store to your brand.'
        icon={<GatewayLogo app='shopify' width={32} />}
      />
    </div>
  );
};
