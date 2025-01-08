import { FiCreditCardPlus } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';

import { AddPaymentMethodModal } from './modals';

export const PaymentMethodCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Stack className='border border-gray-200 shadow-xs p-4 rounded-xl'>
      <Group justify='space-between'>
        <Group gap={16}>
          <Group
            className='rounded-lg border border-gray-200 shadow-xs p-[10px]'
            align='center'
            justify='center'
          >
            <FiCreditCardPlus size={20} color='#364152' />
          </Group>

          <p className='text-sm text-gray-700 font-semibold'>
            There are 12 days left on your free trial.
          </p>
        </Group>

        <Button variant='secondary-black' onClick={() => setShowModal(true)}>
          Add payment method
        </Button>
      </Group>
      <AddPaymentMethodModal showModal={showModal} setShowModal={setShowModal} />
    </Stack>
  );
};
