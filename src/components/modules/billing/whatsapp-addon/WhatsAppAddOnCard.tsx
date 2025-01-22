import { FiPlus } from '@nabiq-icons';
import { Button, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useBillingDetails } from 'src/hooks/modules/billing';

import { WhatsAppAddOnModal } from '../plans/components/pricing-plans';

export const WhatsAppAddOnCard = () => {
  const [showModal, setShowModal] = useState(false);
  const { paymentPlan, availableWhatsAppMessages } = useBillingDetails();
  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      <WhatsAppAddOnModal showModal={showModal} setShowModal={setShowModal} />

      <Stack gap={0}>
        <Group gap={8}>
          <p className='text-lg font-semibold text-gray-900'>
            WhatsApp business conversation add-on
          </p>
        </Group>
        <p className='text-sm text-gray-600'>Subscribe to a plan then you can add-on WhatsApp.</p>
      </Stack>

      <Group gap={4}>
        <GatewayLogo app='whatsapp' />
        <p className='text-sm text-gray-600'>{availableWhatsAppMessages} monthly messages</p>
      </Group>

      {availableWhatsAppMessages > 0 ? (
        <Button variant='secondary' onClick={() => setShowModal(true)} leadingIcon={<FiPlus />}>
          Add more
        </Button>
      ) : (
        <Button
          variant='secondary'
          onClick={() => setShowModal(true)}
          leadingIcon={<GatewayLogo app='whatsapp' />}
          disabled={paymentPlan === 'trial'}
        >
          Add-on WhatsApp
        </Button>
      )}
    </Stack>
  );
};
