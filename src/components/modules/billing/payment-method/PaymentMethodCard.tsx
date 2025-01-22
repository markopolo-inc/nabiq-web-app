import { Button, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBillingDetails } from 'src/hooks/modules/billing';

import { AddPaymentMethodModal, CardDetails, TrialDetails } from './components';

export const PaymentMethodCard = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { paymentPlan, hasPaymentMethod } = useBillingDetails();
  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl'>
      {paymentPlan === 'trial' && (
        <Group justify='space-between'>
          <TrialDetails />
          {!hasPaymentMethod && (
            <Button variant='secondary-black' onClick={() => setShowModal(true)}>
              {t('billing_page.add_payment_method')}
            </Button>
          )}
        </Group>
      )}

      <AddPaymentMethodModal showModal={showModal} setShowModal={setShowModal} />

      {hasPaymentMethod && <CardDetails setShowModal={setShowModal} />}
    </Stack>
  );
};
