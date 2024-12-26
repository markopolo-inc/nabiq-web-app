import { Badge, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useState } from 'react';
import { useAppSelector } from 'src/store/hooks';

import { FirebaseCodecopyModal, IntegrateFirebaseModal } from '.';

export const PushNotification = () => {
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
          title='Firebase'
          description={`Deliver seamless push notifications and boost user engagement with Firebase's reliable and scalable messaging platform.`}
          icon={<GatewayLogo app='firebase' width={32} />}
          badge={
            <>
              {!isMarkTagConnected && (
                <Badge size='sm' color='error'>
                  You need to connect a marktag connection first
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
