import { Stack } from '@nabiq-ui';
import { useBillingDetails } from 'src/hooks/modules/billing';

import { PaidDetails, TrialDetails } from './components';

export const BillingDetailsCard = () => {
  const { paymentPlan } = useBillingDetails();

  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      {paymentPlan === 'trial' ? (
        <TrialDetails />
      ) : paymentPlan?.includes('pro') ? (
        <PaidDetails />
      ) : (
        <></>
      )}
    </Stack>
  );
};
