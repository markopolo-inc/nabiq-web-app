import { FiZap } from '@nabiq-icons';
import { Badge, Button, GatewayLogo } from '@nabiq-ui';
import { useState } from 'react';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import {
  DataSourceModal,
  Marktag,
  MarktagCreationsModals,
} from 'src/components/modules/integrations/integration-tabs/data-sources';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken, getOAuthUrl } from 'src/utils/auth';
import { buildQueryString } from 'src/utils/string.utils';

export const DataSources = () => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  return (
    <>
      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Marktag onShowMarktag={() => setShowMarktagModal(true)} />
        <IntegrationCard
          key='hubspot'
          title='Hubspot'
          description='Empower your business growth through comprehensive CRM platform that integrates
              marketing, sales, and customer service tools.'
          icon={<GatewayLogo app='hubspot' width={32} />}
          badge={
            datasourceIntegrations?.connectedAccounts?.hubspot?.domain && (
              <Badge color='gray'>
                {datasourceIntegrations?.connectedAccounts?.hubspot?.domain}
              </Badge>
            )
          }
        >
          {!datasourceIntegrations?.connectedAccounts?.hubspot ? (
            <Button
              className='!w-36'
              leadingIcon={<FiZap fill='white' size={22} />}
              onClick={async () => {
                const token = await getAuthToken();
                window.location.href = `${
                  import.meta.env.VITE_BASE_API_URL
                }/datasource/integrate-using-oauth?${buildQueryString({
                  brandId,
                  token,
                  platform: 'hubspot',
                  redirectUrl: window.location.href,
                })}`;
              }}
            >
              Integrate
            </Button>
          ) : (
            <DataSourceModal />
          )}
        </IntegrationCard>
        <IntegrationCard
          key='salesforce'
          title='Salesforce'
          description='Empower your business growth through comprehensive CRM platform that integrates
              marketing, sales, and customer service tools.'
          icon={<GatewayLogo app='hubspot' width={32} />}
          badge={
            datasourceIntegrations?.connectedAccounts?.hubspot?.domain && (
              <Badge color='gray'>
                {datasourceIntegrations?.connectedAccounts?.hubspot?.domain}
              </Badge>
            )
          }
        >
          {!datasourceIntegrations?.connectedAccounts?.salesforce ? (
            <Button
              className='!w-36'
              leadingIcon={<FiZap fill='white' size={22} />}
              onClick={async () => {
                window.location.href = await getOAuthUrl('/datasource/integrate-using-oauth', {
                  brandId,
                  platform: 'salesforce',
                  redirectUrl: window.location.href,
                });
              }}
            >
              Integrate
            </Button>
          ) : (
            <DataSourceModal />
          )}
        </IntegrationCard>
      </div>
    </>
  );
};
