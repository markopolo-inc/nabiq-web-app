import { Badge, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';

import { IntegrateFirebaseModal } from '.';

export const PushNotification = () => {
  const { markTag, pushIntegrations } = useAppSelector((state) => state.brand);

  const isMarkTagConnected = markTag?.resourceId;
  const isPushNotificationConnected = pushIntegrations?.firebase?.connected;
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <IntegrationCard
        isConnected={isPushNotificationConnected}
        title='Firebase'
        description={`Deliver seamless push notifications and boost user engagement with Firebase’s reliable and scalable messaging platform.`}
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
        <IntegrateFirebaseModal />
      </IntegrationCard>
    </div>
  );
};
