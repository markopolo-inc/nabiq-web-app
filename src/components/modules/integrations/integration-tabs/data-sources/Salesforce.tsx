import { FiZap } from '@nabiq-icons';
import { Button, ConfirmationModal, GatewayLogo, Group } from '@nabiq-ui';
import { useState } from 'react';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectDataSourceMutation } from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Salesforce = () => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);

  const [showSalesforceDisconnectModal, setShowSalesforceDisconnectModal] =
    useState<boolean>(false);
  const [disconnect, { isLoading: isDisconnecting }] = useDisconnectDataSourceMutation();
  const handleDisconnectSalesforce = async () => {
    await disconnect({
      brandId,
      platform: 'salesforce',
    });
    setShowSalesforceDisconnectModal(false);
  };
  return (
    <>
      {' '}
      <IntegrationCard
        key='salesforce'
        title='Salesforce'
        isConnected={!!datasourceIntegrations?.connectedAccounts?.salesforce}
        description='Leverage Salesforce as a data source for seamless, data-driven customer engagement.'
        icon={<GatewayLogo app='salesforce' width={32} />}
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
      <ConfirmationModal
        onConfirm={handleDisconnectSalesforce}
        title='Are you sure you want to disconnect salesforce?'
        showModal={showSalesforceDisconnectModal}
        setShowModal={setShowSalesforceDisconnectModal}
      />
    </>
  );
};
