import { Button, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { usePaymentDetails } from 'src/hooks/modules/billing';

import { AddPaymentMethodModal, TrialDetails } from './components';

export const PaymentMethodCard = () => {
  const [showModal, setShowModal] = useState(false);
  const { paymentPlan } = usePaymentDetails();
  return (
    <Stack className='border border-gray-200 shadow-xs p-4 rounded-xl'>
      {paymentPlan === 'trial' && (
        <Group justify='space-between'>
          <TrialDetails />
          <Button variant='secondary-black' onClick={() => setShowModal(true)}>
            Add payment method
          </Button>
        </Group>
      )}
      <AddPaymentMethodModal showModal={showModal} setShowModal={setShowModal} />
    </Stack>
  );
};
