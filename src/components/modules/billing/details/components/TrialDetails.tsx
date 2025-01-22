import { Badge, Button, Group, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useBillingDetails } from 'src/hooks/modules/billing';

export const TrialDetails = () => {
  const { t } = useTranslation();
  const { trialDaysLeft, paymentPlan } = useBillingDetails();
  const navigate = useNavigate();

  return (
    <Stack gap={24}>
      <Group justify='space-between'>
        <Stack gap={8}>
          {paymentPlan === 'trial' && (
            <Group>
              <p className='text-lg font-semibold text-gray-900'>{t('billing_page.free_trial')}</p>
              <Badge color='blue'>
                {t('billing_page.trial_period', {
                  trialLeft: trialDaysLeft,
                })}
              </Badge>
            </Group>
          )}
          <p className='text-sm text-gray-600'>
            {t('billing_page.current_free_trial', {
              trialDaysLeft,
            })}
          </p>
        </Stack>
        <Stack gap={8}>
          <p className='text-lg font-semibold text-gray-900'>
            {t('billing_page.billing_period', {
              trialDaysLeft,
            })}
          </p>
          <p className='text-sm text-gray-600'>{t('billing_page.not_billed_yet')}</p>
        </Stack>
      </Group>
      <p className='text-lg font-semibold text-gray-900'>
        $0 <span className='text-gray-600 text-sm font-normal'>{t('billing_page.per_month')}</span>
      </p>
      <Button onClick={() => navigate('/billing/plans')}>{t('billing_page.explore_plans')}</Button>
    </Stack>
  );
};
