import { FiZap } from '@nabiq-icons';
import { Badge, Button, ConfirmationModal, GatewayLogo, Group } from '@nabiq-ui';
import { useState } from 'react';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import {
  DataSourceModal,
  Marktag,
  MarktagCreationsModals,
} from 'src/components/modules/integrations/integration-tabs/data-sources';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectDataSourceMutation } from 'src/store/integrations/data-sources.api';
import { getAuthToken, getOAuthUrl } from 'src/utils/auth';
import { buildQueryString } from 'src/utils/string.utils';

export const DataSources = () => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);
  const [showShopifyDisconnectModal, setShowShopifyDisconnectModal] = useState<boolean>(false);
  const [showSalesforceDisconnectModal, setShowSalesforceDisconnectModal] =
    useState<boolean>(false);
  const [disconnect, { isLoading: isDisconnecting }] = useDisconnectDataSourceMutation();

  const handleDisconnectHubspot = async () => {
    await disconnect({
      brandId,
      platform: 'hubspot',
    });
    setShowShopifyDisconnectModal(false);
  };

  const handleDisconnectSalesforce = async () => {
    await disconnect({
      brandId,
      platform: 'salesforce',
    });
    setShowSalesforceDisconnectModal(false);
  };

  return (
    <>
      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Marktag onShowMarktag={() => setShowMarktagModal(true)} />
        <IntegrationCard
          key='hubspot'
          title='Hubspot'
          isConnected={!!datasourceIntegrations?.connectedAccounts?.hubspot}
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
            <Group>
              <Button
                className='!w-36'
                leadingIcon={<FiZap fill='white' size={22} />}
                onClick={async () => {
                  const token = await getAuthToken();
                  window.location.href = `${
                    import.meta.env.VITE_BASE_API_URL
                  }/hubspot/oauth?${buildQueryString({
                    brandId,
                    token,
                    redirectUri: window.location.href,
                  })}`;
                }}
              >
                Integrate
              </Button>
            </Group>
          ) : (
            <Group>
              <DataSourceModal platform='hubspot' />
              <Button
                variant='tertiary-destructive'
                onClick={() => setShowShopifyDisconnectModal(true)}
                loading={isDisconnecting}
              >
                Disconnect
              </Button>
            </Group>
          )}
        </IntegrationCard>
        <IntegrationCard
          key='salesforce'
          title='Salesforce'
          isConnected={!!datasourceIntegrations?.connectedAccounts?.salesforce}
          description='Leverage Salesforce as a data source for seamless, data-driven customer engagement.'
          icon={<GatewayLogo app='salesforce' width={32} />}
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
                window.location.href = await getOAuthUrl('/salesforce/auth/connect', {
                  brandId,
                  redirectUri: window.location.href,
                });
              }}
            >
              Integrate
            </Button>
          ) : (
            <Group>
              <Button
                variant='tertiary-destructive'
                onClick={() => setShowSalesforceDisconnectModal(true)}
                loading={isDisconnecting}
              >
                Disconnect
              </Button>
            </Group>
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
      <ConfirmationModal
        onConfirm={handleDisconnectHubspot}
        title='Are you sure you want to disconnect hubspot?'
        showModal={showShopifyDisconnectModal}
        setShowModal={setShowShopifyDisconnectModal}
      />
      <ConfirmationModal
        onConfirm={handleDisconnectSalesforce}
        title='Are you sure you want to disconnect salesforce?'
        showModal={showSalesforceDisconnectModal}
        setShowModal={setShowSalesforceDisconnectModal}
      />
    </>
  );
};
