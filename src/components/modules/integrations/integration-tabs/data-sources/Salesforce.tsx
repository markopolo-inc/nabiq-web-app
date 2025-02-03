import { FiZap } from '@nabiq-icons';
import { Button, ConfirmationModal, GatewayLogo, Group } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectDataSourceMutation } from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Salesforce = () => {
  const { t } = useTranslation();
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
      <IntegrationCard
        key='salesforce'
        title={t('integrations.salesforce')}
        isConnected={!!datasourceIntegrations?.connectedAccounts?.salesforce}
        description={t('integrations.leverage_salesforce')}
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
            {t('integrations.integrate')}
          </Button>
        ) : (
          <Group>
            <Button
              variant='secondary'
              className='!w-36'
              onClick={async () => {
                window.location.href = await getOAuthUrl('/salesforce/auth/connect', {
                  brandId,
                  redirectUri: window.location.href,
                });
              }}
            >
              {t('integrations.reconfigure')}
            </Button>
            <Button
              variant='tertiary-destructive'
              onClick={() => setShowSalesforceDisconnectModal(true)}
              loading={isDisconnecting}
            >
              {t('integrations.disconnect')}
            </Button>
          </Group>
        )}
      </IntegrationCard>
      <ConfirmationModal
        onConfirm={handleDisconnectSalesforce}
        title={t('integrations.confirm_disconnect_salesforce')}
        showModal={showSalesforceDisconnectModal}
        setShowModal={setShowSalesforceDisconnectModal}
      />
    </>
  );
};
