import { Badge, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';

import { FirebaseCodecopyModal, IntegrateFirebaseModal } from '.';

export const PushNotification = () => {
  const { t } = useTranslation();
  const { markTag, pushIntegrations } = useAppSelector((state) => state.brand);
  const [showFirebaseCodecopyModal, setShowFirebaseCodecopyModal] = useState(false);

  const isMarkTagConnected = markTag?.resourceId;
  const isPushNotificationConnected = pushIntegrations?.firebase?.connected;
  return (
    <>
      <FirebaseCodecopyModal
        showModal={showFirebaseCodecopyModal}
        setShowModal={setShowFirebaseCodecopyModal}
      />
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <IntegrationCard
          isConnected={isPushNotificationConnected}
          title={t('integrations.firebase')}
          description={t('integrations.deliver_push_notifications')}
          icon={<GatewayLogo app='firebase' width={32} />}
          badge={
            <>
              {!isMarkTagConnected && (
                <Badge size='sm' color='error'>
                  {t('integrations.connect_marktag_first')}
                </Badge>
              )}
            </>
          }
        >
          <IntegrateFirebaseModal setShowFirebaseCodecopyModal={setShowFirebaseCodecopyModal} />
        </IntegrationCard>
      </div>
    </>
  );
};
