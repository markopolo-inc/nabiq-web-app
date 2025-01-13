import { Stack } from '@nabiq-ui';
import { usePaymentDetails } from 'src/hooks/modules/billing';

import { TrialDetails } from './components';

export const BillingDetailsCard = () => {
  const { paymentPlan } = usePaymentDetails();

  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      {paymentPlan === 'trial' && <TrialDetails />}
    </Stack>
  );
};
