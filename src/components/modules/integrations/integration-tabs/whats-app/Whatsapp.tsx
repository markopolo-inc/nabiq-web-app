import { FiZap } from '@nabiq-icons';
import { Badge, Button, ConfirmationModal, GatewayLogo } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { WhatsAppConnectModal } from 'src/components/modules/integrations/integration-tabs/whats-app';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectPlatformMutation } from 'src/store/integrations/social-integrations.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Whatsapp = () => {
  const { t } = useTranslation();
  const { resourceId: brandId, socialIntegrations } = useAppSelector((state) => state.brand);
  const [isShowModal, setIsShowModal] = useState(false);
  const [disconnectPlatform, { isLoading: isDisconnecting }] = useDisconnectPlatformMutation();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  const handleDisconnect = async () => {
    const res = await disconnectPlatform({ brandId, platform: 'facebook' }).unwrap();
    if (res.success) {
      setShowDisconnectModal(false);
    }
  };

  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <IntegrationCard
        title={t('integrations.whatsapp')}
        description={t('integrations.whatsapp_desc')}
        icon={<GatewayLogo app='whatsapp' width={28} />}
        isConnected={!!socialIntegrations?.socialTokens?.facebook}
        badge={
          socialIntegrations?.whatsApp?.number && (
            <Badge color='gray'>{socialIntegrations?.whatsApp?.number}</Badge>
          )
        }
      >
        {socialIntegrations?.socialTokens?.facebook ? (
          <div className='flex gap-2 items-center'>
            <WhatsAppConnectModal showModal={isShowModal} setIsShowModal={setIsShowModal} />
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
    </div>
  );
};
