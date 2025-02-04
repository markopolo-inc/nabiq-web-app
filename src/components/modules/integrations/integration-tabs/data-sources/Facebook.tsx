import { FiZap } from '@nabiq-icons';
import { Button, ConfirmationModal, GatewayLogo } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectPlatformMutation } from 'src/store/integrations/social-integrations.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Facebook = () => {
  const { t } = useTranslation();
  const { resourceId: brandId, socialIntegrations } = useAppSelector((state) => state.brand);
  const [disconnectPlatform, { isLoading: isDisconnecting }] = useDisconnectPlatformMutation();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  const handleDisconnect = async () => {
    const res = await disconnectPlatform({ brandId, platform: 'facebook' }).unwrap();
    if (res.success) {
      setShowDisconnectModal(false);
    }
  };

  return (
    <>
      <IntegrationCard
        title={t('integrations.facebook')}
        description={t('integrations.facebook_desc')}
        icon={<GatewayLogo app='facebook' width={28} />}
        isConnected={!!socialIntegrations?.socialTokens?.facebook}
      >
        {socialIntegrations?.socialTokens?.facebook ? (
          <div className='flex gap-2 items-center'>
            <Button
              variant='secondary'
              className='!w-36'
              onClick={async () => {
                window.location.href = await getOAuthUrl('/auth/facebook', {
                  brandId,
                  redirectUri: window.location.href,
                });
              }}
            >
              {t('integrations.reconfigure')}
            </Button>
            <Button
              variant='tertiary-destructive'
              onClick={() => setShowDisconnectModal(true)}
              loading={isDisconnecting}
            >
              {t('integrations.disconnect')}
            </Button>
          </div>
        ) : (
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            onClick={async () => {
              window.location.href = await getOAuthUrl('/auth/facebook', {
                brandId,
                redirectUri: window.location.href,
              });
            }}
          >
            {t('integrations.integrate')}
          </Button>
        )}
      </IntegrationCard>
      <ConfirmationModal
        onConfirm={handleDisconnect}
        title={t('integrations.confirm_disconnect')}
        showModal={showDisconnectModal}
        setShowModal={setShowDisconnectModal}
      />
    </>
  );
};
