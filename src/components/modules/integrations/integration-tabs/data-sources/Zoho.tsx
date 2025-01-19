import { GatewayLogo } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';

import { ZohoRegionModal } from './modals/ZohoRegionModal';

export const Zoho = () => {
  const { t } = useTranslation();
  return (
    <IntegrationCard
      title={t('integrations.zoho')}
      isConnected={false}
      description={t('integrations.streamline_sales_process')}
      icon={<GatewayLogo app='zoho' width={32} />}
    >
      <ZohoRegionModal />
    </IntegrationCard>
  );
};
