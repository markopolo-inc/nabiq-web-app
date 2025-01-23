import { FiZap } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        <p className='text-2xl text-gray-900 font-semibold'>{t('pricing_plan.price_summary')}</p>
        <p className='text-sm text-gray-600 font-normal'>{t('pricing_plan.billed_in_usd')}</p>
      </Stack>
      <Stack gap={8} className='border-b border-gray-300 pb-8'>
        <Group justify='space-between'>
          <p className='text-sm text-gray-900 font-semibold'>
            {planCategory === 'pro'
              ? t('pricing_plan.pro_plan')
              : t('pricing_plan.enterprise_plan')}
          </p>
          <p className='text-sm text-gray-900 font-semibold'>
            {planCategory === 'pro'
              ? `${isMonthly ? monthlyPrice : yearlyPrice}/${isMonthly ? t('billing_page.month') : t('billing_page.year')}`
              : t('home_page.custom')}
          </p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>
          {planCategory === 'pro'
            ? t('pricing_plan.active_users_text', { activeUsersInText })
            : t('pricing_plan.unlimited_active_users')}
        </p>
      </Stack>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-lg text-gray-900 font-semibold'>{t('pricing_plan.total')}</p>
          <p className='text-lg text-gray-900 font-semibold'>
            {planCategory === 'pro'
              ? `${isMonthly ? monthlyPrice : yearlyPrice}/${isMonthly ? t('billing_page.month') : t('billing_page.year')}`
              : t('home_page.custom')}
          </p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>
          {t('pricing_plan.visibility_notice_repeated')}
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
                toast.success(t('pricing_plan.subscription_success'));
                navigate('/billing');
              }
            }}
            loading={isStartSubscriptionLoading || isChangeSubscriptionLoading}
          >
            {t('pricing_plan.subscribe_pro_plan')}
          </Button>
        )}
        {planCategory === 'enterprise' && (
          <Button fullWidth>{t('pricing_plan.contact_sales_team')}</Button>
        )}
      </Stack>
    </Stack>
  );
};
