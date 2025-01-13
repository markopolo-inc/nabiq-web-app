import { Badge, Button, Group, Stack } from '@nabiq-ui';
import { usePaymentDetails } from 'src/hooks/modules/billing';

export const TrialDetails = () => {
  const { trialDaysLeft, paymentPlan } = usePaymentDetails();

  return (
    <Stack gap={24}>
      <Group justify='space-between'>
        <Stack gap={8}>
          {paymentPlan === 'trial' && (
            <Group>
              <p className='text-lg font-semibold text-gray-900'>Free trial</p>
              <Badge color='blue'>{trialDaysLeft} days period</Badge>
            </Group>
          )}
          <p className='text-sm text-gray-600'>
            You are currently on our free {trialDaysLeft} day trial period.
          </p>
        </Stack>
        <Stack gap={8}>
          <p className='text-lg font-semibold text-gray-900'>Billing period</p>
          <p className='text-sm text-gray-600'>Not billed yet</p>
        </Stack>
      </Group>
      <p className='text-lg font-semibold text-gray-900'>
        $0 <span className='text-gray-600 text-sm font-normal'>per month</span>
      </p>
      <Button>Explore plans</Button>
    </Stack>
  );
};
