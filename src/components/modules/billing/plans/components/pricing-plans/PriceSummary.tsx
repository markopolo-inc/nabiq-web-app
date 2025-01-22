import { FiZap } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useBillingDetails, usePlanDetails } from 'src/hooks/modules/billing';
import {
  useChangeSubscriptionMutation,
  useStartSubscriptionMutation,
} from 'src/store/billing/payment.api';
import { useAppSelector } from 'src/store/hooks';

export const PriceSummary = ({
  activeUsers,
  isMonthly,
  planCategory,
}: {
  activeUsers: number;
  isMonthly: boolean;
  planCategory: 'pro' | 'enterprise';
}) => {
  const { activeUsersInText, monthlyPrice, yearlyPrice, planId } = usePlanDetails({
    activeUsers,
    isMonthly,
  });
  const { paymentPlan } = useBillingDetails();
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  const [startSubscription, { isLoading: isStartSubscriptionLoading }] =
    useStartSubscriptionMutation();
  const [changeSubscription, { isLoading: isChangeSubscriptionLoading }] =
    useChangeSubscriptionMutation();
  const navigate = useNavigate();
  return (
    <Stack className='bg-primary-50 rounded-xl border border-gray-200 p-6 h-fit' gap={32}>
      <Stack gap={8}>
        <p className='text-2xl text-gray-900 font-semibold'>Price Summary</p>
        <p className='text-sm text-gray-600 font-normal'>Billed in $US Dollars</p>
      </Stack>
      <Stack gap={8} className='border-b border-gray-300 pb-8'>
        <Group justify='space-between'>
          <p className='text-sm text-gray-900 font-semibold'>
            {planCategory === 'pro' ? 'Pro plan' : 'Enterprise plan'}
          </p>
          <p className='text-sm text-gray-900 font-semibold'>
            {planCategory === 'pro'
              ? `${isMonthly ? monthlyPrice : yearlyPrice}/${isMonthly ? 'month' : 'year'}`
              : 'Custom'}
          </p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>
          {planCategory === 'pro'
            ? `${activeUsersInText} monthly active users`
            : 'Up to unlimited active users'}
        </p>
      </Stack>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-lg text-gray-900 font-semibold'>Total</p>
          <p className='text-lg text-gray-900 font-semibold'>
            {planCategory === 'pro'
              ? `${isMonthly ? monthlyPrice : yearlyPrice}/${isMonthly ? 'month' : 'year'}`
              : 'Custom'}
          </p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>
          *Subjects, participants and timestamps will be visible to your team, Content won’t be
          visible unless shared.
        </p>
        {planCategory === 'pro' && (
          <Button
            fullWidth
            leadingIcon={<FiZap size={18} fill='white' />}
            onClick={async () => {
              let res = null;
              if (paymentPlan?.includes('pro') || paymentPlan?.includes('enterprise')) {
                res = await changeSubscription({ newPlan: planId, companyId }).unwrap();
              } else {
                res = await startSubscription({ plan: planId, companyId }).unwrap();
              }
              if (res.success) {
                toast.success('Subscription started successfully!');
                navigate('/billing');
              }
            }}
            loading={isStartSubscriptionLoading || isChangeSubscriptionLoading}
          >
            Subscribe to pro plan
          </Button>
        )}
        {planCategory === 'enterprise' && <Button fullWidth>Talk to our sales team</Button>}
      </Stack>
    </Stack>
  );
};
