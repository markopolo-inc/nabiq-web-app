import { Stack } from '@nabiq-ui';
import { useAppSelector } from 'src/store/hooks';

import { TrialDetails } from './components';

export const BillingDetailsCard = () => {
  const { payment } = useAppSelector((state) => state.company);

  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      {payment?.plan === 'trial' && <TrialDetails />}
    </Stack>
  );
};
