import { Badge, Button, Group, Stack } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import { FiZap } from 'src/components/Icons';
import { useBillingDetails } from 'src/hooks/modules/billing';

// import { PlanMenu } from './PlanMenu';

export const PaidDetails = () => {
  const { isMonthly, subscriptionStartDate, subscriptionEndDate, subscriptionFee } =
    useBillingDetails();
  const navigate = useNavigate();

  return (
    <Stack gap={24}>
      <Group justify='space-between'>
        <Stack gap={8}>
          <Group>
            <p className='text-lg font-semibold text-gray-900'>Pro plan</p>
            <Badge color='blue'>{isMonthly ? 'Monthly' : 'Annual'}</Badge>
          </Group>
          <p className='text-sm text-gray-600'>You are currently on pro plan.</p>
        </Stack>
        <Stack gap={8}>
          <p className='text-lg font-semibold text-gray-900'>Billing period</p>
          <p className='text-sm text-gray-600'>
            {subscriptionStartDate} - {subscriptionEndDate}
          </p>
        </Stack>
      </Group>
      <p className='text-lg font-semibold text-gray-900'>
        ${subscriptionFee}{' '}
        <span className='text-gray-600 text-sm font-normal'>
          per {isMonthly ? 'month' : 'year'}
        </span>
      </p>
      <Group justify='space-between'>
        <Button
          onClick={() => navigate('/billing/plans')}
          leadingIcon={<FiZap size={16} fill='white' />}
        >
          Upgrade
        </Button>
        {/* <PlanMenu /> */}
      </Group>
    </Stack>
  );
};
