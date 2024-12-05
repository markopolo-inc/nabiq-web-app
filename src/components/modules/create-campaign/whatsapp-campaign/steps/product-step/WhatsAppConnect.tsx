import { FiEdit01, FiWhatsApp } from '@nabiq-icons';
import { Badge, Button, Card, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { WhatsAppConnectModal } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { getRedirectUri } from 'src/utils/auth';

export const WhatsAppConnect = () => {
  const { socialIntegrations, resourceId: brandId } = useAppSelector((state) => state.brand);
  const [showWAConnectModal, setShowWAConnectModal] = useState(false);

  const isConnected = socialIntegrations?.socialTokens?.facebook;
  return (
    <Card className='!w-full !min-h-fit !p-6'>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-gray-900 text-lg font-semibold'>
            1. Connect your WhatsApp business account
          </p>
          {isConnected && <Badge color='success'>Connected</Badge>}
        </Group>

        <p className='text-gray-600 text-sm'>
          Link your WhatsApp Business account to launch a conversational SMS campaign. Don't have an
          account?
        </p>
        {!isConnected ? (
          <Button
            variant='secondary-black'
            leadingIcon={<FiWhatsApp size={17} />}
            onClick={async () => {
              window.location.href = await getRedirectUri('/auth/facebook', {
                brandId,
                redirectUri: window.location.href,
              });
            }}
          >
            Connect
          </Button>
        ) : (
          <Group justify='space-between'>
            <Button
              variant='link'
              leadingIcon={<FiEdit01 size={16} />}
              onClick={() => setShowWAConnectModal(true)}
            >
              Reconfigure
            </Button>
            <Badge color='gray'>{socialIntegrations?.whatsApp?.number}</Badge>
          </Group>
        )}
      </Stack>
      <WhatsAppConnectModal
        showModal={showWAConnectModal}
        setIsShowModal={setShowWAConnectModal}
        showTrigger={false}
      />
    </Card>
  );
};
