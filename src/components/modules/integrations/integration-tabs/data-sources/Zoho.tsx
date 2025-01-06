import { GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'src/components/modules/integrations/components';

import { ZohoRegionModal } from './modals/ZohoRegionModal';

export const Zoho = () => {
  return (
    <IntegrationCard
      title='Zoho'
      isConnected={false}
      description='Streamline your sales process and boost productivity with Zoho CRM’s intuitive and customizable platform.'
      icon={<GatewayLogo app='zoho' width={32} />}
    >
      <ZohoRegionModal />
    </IntegrationCard>
  );
};
