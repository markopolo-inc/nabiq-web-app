import { FiZap } from '@nabiq-icons';
import { Badge, Button, ConfirmationModal, GatewayLogo, Group } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { DataSourceModal } from 'src/components/modules/integrations/integration-tabs/data-sources';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectDataSourceMutation } from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Hubspot = () => {
  const { t } = useTranslation();
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);

  const [showShopifyDisconnectModal, setShowShopifyDisconnectModal] = useState<boolean>(false);

  const [disconnect, { isLoading: isDisconnecting }] = useDisconnectDataSourceMutation();

  const handleDisconnectHubspot = async () => {
    await disconnect({
      brandId,
      platform: 'hubspot',
    });
    setShowShopifyDisconnectModal(false);
  };

  return (
    <>
      <IntegrationCard
        key='hubspot'
        title={t('integrations.hubspot')}
        isConnected={!!datasourceIntegrations?.connectedAccounts?.hubspot}
        description={t('integrations.datasource.crm_desc')}
        icon={<GatewayLogo app='hubspot' width={32} />}
        badge={
          datasourceIntegrations?.connectedAccounts?.hubspot?.domain && (
            <Badge color='gray'>{datasourceIntegrations?.connectedAccounts?.hubspot?.domain}</Badge>
          )
        }
      >
        {!datasourceIntegrations?.connectedAccounts?.hubspot ? (
          <Group>
            <Button
              className='!w-36'
              leadingIcon={<FiZap fill='white' size={22} />}
              onClick={async () => {
                window.location.href = await getOAuthUrl('/hubspot/oauth', {
                  brandId,
                  redirectUri: window.location.href,
                });
              }}
            >
              {t('integrations.integrate')}
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
              {t('integrations.disconnect')}
            </Button>
          </Group>
        )}
      </IntegrationCard>
      <ConfirmationModal
        onConfirm={handleDisconnectHubspot}
        title={t('integrations.confirm_disconnect_hubspot')}
        showModal={showShopifyDisconnectModal}
        setShowModal={setShowShopifyDisconnectModal}
      />
    </>
  );
};
