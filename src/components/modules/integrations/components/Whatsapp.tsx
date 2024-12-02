import { FiZap } from '@nabiq-icons';
import { Button, ConfirmationModal, GatewayLogo } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectPlatformMutation } from 'src/store/integrations/social-integrations.api';
import { getAuthToken } from 'src/utils/auth';
import { buildQueryString } from 'src/utils/string.utils';

import { WhatsAppConnectModal } from '../modals/AdAccountModal/WhatsAppConnectModal';

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
    if (searchParams.has('connected') && socialIntegrations?.socialTokens?.facebook) {
      setIsShowModal(true);
      const url = new URL(window.location.href);
      url.searchParams.delete('connected');
      navigate({ search: url.search }, { replace: true });
      toast.success('Whatsapp connected successfully', {
        id: 'whatsapp-connected',
      });
    }
  }, [searchParams]);

  return (
    <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      <div
        className='rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8'
        key='hubspot'
      >
        <div>
          <div className='flex gap-6 justify-between items-center'>
            <div className='flex items-center gap-3'>
              <GatewayLogo app='whatsapp' width={50} />
              <p className='text-gray-900 font-semibold text-lg'>Whatsapp</p>
            </div>
          </div>

          <p className='mt-6 text-gray-600 font-normal text-sm'>
            Connect with customers instantly and securely using WhatsApp’s messaging platform for
            seamless, real-time communication.
          </p>
        </div>
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
            className='!w-40'
            leadingIcon={<FiZap fill='white' size={22} />}
            onClick={async () => {
              const token = await getAuthToken();
              window.location.href = `${
                import.meta.env.VITE_BASE_API_URL
              }/auth/facebook?${buildQueryString({
                brandId,
                token,
                redirectUri: window.location.href + '&connected=true',
              })}`;
            }}
          >
            Integrate
          </Button>
        )}
      </div>
      <ConfirmationModal
        onConfirm={handleDisconnect}
        title='Are you sure you want to disconnect?'
        showModal={showDisconnectModal}
        setShowModal={setShowDisconnectModal}
      />
    </div>
  );
};
