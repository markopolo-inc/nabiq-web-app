import { FiEdit01, FiWhatsApp } from '@nabiq-icons';
import { Badge, Button, Card, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WhatsAppConnectModal } from 'src/components/modules/integrations';
import { useAppSelector } from 'src/store/hooks';
import { getOAuthUrl } from 'src/utils/auth';

export const WhatsAppConnect = () => {
  const { t } = useTranslation();
  const { socialIntegrations, resourceId: brandId } = useAppSelector((state) => state.brand);
  const [showWAConnectModal, setShowWAConnectModal] = useState(false);

  const isConnected =
    socialIntegrations?.socialTokens?.facebook && socialIntegrations?.whatsApp?.number;
  return (
    <Card className='!w-full !min-h-fit !p-6'>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-gray-900 text-lg font-semibold'>
            1. {t('create_campaign_whatsapp.connect_prompt')}
          </p>
          {socialIntegrations?.socialTokens?.facebook && (
            <Badge color='success'>{t('create_campaign.connected')}</Badge>
          )}
        </Group>

        <p className='text-gray-600 text-sm'>{t('create_campaign.link_whatsapp')}</p>
        <Group justify='space-between'>
          {!socialIntegrations?.socialTokens?.facebook ? (
            <Button
              variant='secondary-black'
              leadingIcon={<FiWhatsApp size={17} />}
              onClick={async () => {
                window.location.href = await getOAuthUrl('/auth/facebook', {
                  brandId,
                  redirectUri: window.location.href,
                });
              }}
            >
              {t('home_page.common_connect')}
            </Button>
          ) : (
            <Group justify='space-between'>
              <Button
                variant='link'
                leadingIcon={<FiEdit01 size={14} />}
                onClick={() => setShowWAConnectModal(true)}
              >
                {t('create_campaign.configure')}
              </Button>
            </Group>
          )}
          <Group gap={8}>
            {isConnected && <Badge color='gray'>{socialIntegrations?.whatsApp?.number}</Badge>}
            {socialIntegrations?.socialTokens?.facebook &&
              !socialIntegrations?.whatsApp?.number && (
                <Badge color='error'>{t('create_campaign.number_not_available')}</Badge>
              )}
          </Group>
        </Group>
      </Stack>
      <WhatsAppConnectModal
        showModal={showWAConnectModal}
        setIsShowModal={setShowWAConnectModal}
        showTrigger={false}
      />
    </Card>
  );
};
