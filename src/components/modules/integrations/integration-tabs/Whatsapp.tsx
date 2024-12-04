import { FiZap } from '@nabiq-icons';
import { Badge, Button, ConfirmationModal, GatewayLogo } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  IntegrationCard,
  WhatsAppConnectModal,
} from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectPlatformMutation } from 'src/store/integrations/social-integrations.api';
import { getAuthToken } from 'src/utils/auth';
import { buildQueryString } from 'src/utils/string.utils';

export const Whatsapp = () => {
  const { resourceId: brandId, socialIntegrations } = useAppSelector((state) => state.brand);
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const [disconnectPlatform, { isLoading: isDisconnecting }] = useDisconnectPlatformMutation();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  const handleDisconnect = async () => {
    const res = await disconnectPlatform({ brandId, platform: 'facebook' }).unwrap();
    if (res.success) {
      setShowDisconnectModal(false);
      toast.success('Disconnected successfully');
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    if (searchParams.has('success') && socialIntegrations?.socialTokens?.facebook) {
      setIsShowModal(true);
      url.searchParams.delete('success');
      navigate({ search: url.search }, { replace: true });
      toast.success('Whatsapp connected successfully', {
        id: 'whatsapp-connected',
      });
    }

    if (searchParams.has('error')) {
      toast.error('Facebook authentication failed!', {
        id: 'whatsapp-error',
      });
      url.searchParams.delete('error');
      navigate({ search: url.search }, { replace: true });
    }
  }, [searchParams]);

  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <IntegrationCard
        title='Whatsapp'
        description='Connect with customers instantly and securely using WhatsApp’s messaging platform for
              seamless, real-time communication.'
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
              Disconnect
            </Button>
          </div>
        ) : (
          <Button
            leadingIcon={<FiZap fill='white' size={22} />}
            onClick={async () => {
              const token = await getAuthToken();
              window.location.href = `${
                import.meta.env.VITE_BASE_API_URL
              }/auth/facebook?${buildQueryString({
                brandId,
                token,
                redirectUri: window.location.href,
              })}`;
            }}
          >
            Integrate
          </Button>
        )}
      </IntegrationCard>
      <ConfirmationModal
        onConfirm={handleDisconnect}
        title='Are you sure you want to disconnect?'
        showModal={showDisconnectModal}
        setShowModal={setShowDisconnectModal}
      />
    </div>
  );
};
