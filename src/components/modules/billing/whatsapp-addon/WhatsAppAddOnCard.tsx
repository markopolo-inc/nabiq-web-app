import { FiPlus } from '@nabiq-icons';
import { Button, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBillingDetails } from 'src/hooks/modules/billing';

import { WhatsAppAddOnModal } from '../plans/components/pricing-plans';

export const WhatsAppAddOnCard = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { paymentPlan, availableWhatsAppMessages } = useBillingDetails();
  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      <WhatsAppAddOnModal showModal={showModal} setShowModal={setShowModal} />

      <Stack gap={0}>
        <Group gap={8}>
          <p className='text-lg font-semibold text-gray-900'>
            {t('billing_page.whatsapp_business_addon')}
          </p>
        </Group>
        <p className='text-sm text-gray-600'>{t('billing_page.subscribe_then_add_whatsapp')}</p>
      </Stack>

      <Group gap={4}>
        <GatewayLogo app='whatsapp' />
        <p className='text-sm text-gray-600'>
          {t('billing_page.monthly_whatsapp_messages', {
            availableWhatsAppMessages,
          })}
        </p>
      </Group>

      {availableWhatsAppMessages > 0 ? (
        <Button variant='secondary' onClick={() => setShowModal(true)} leadingIcon={<FiPlus />}>
          {t('home_page.add_more')}
        </Button>
      ) : (
        <Button
          variant='secondary'
          onClick={() => setShowModal(true)}
          leadingIcon={<GatewayLogo app='whatsapp' />}
          disabled={paymentPlan === 'trial'}
        >
          {t('billing_page.add_whatsapp')}
        </Button>
      )}
    </Stack>
  );
};
