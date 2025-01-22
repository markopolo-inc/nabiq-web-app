import { Badge, Button, Group, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FiZap } from 'src/components/Icons';
import { useBillingDetails } from 'src/hooks/modules/billing';

// import { PlanMenu } from './PlanMenu';

export const PaidDetails = () => {
  const { t } = useTranslation();
  const { isMonthly, subscriptionStartDate, subscriptionEndDate, subscriptionFee } =
    useBillingDetails();
  const navigate = useNavigate();

  return (
    <Stack gap={24}>
      <Group justify='space-between'>
        <Stack gap={8}>
          <Group>
            <p className='text-lg font-semibold text-gray-900'>{t('billing_page.pro_plan')}</p>
            <Badge color='blue'>
              {isMonthly ? t('billing_page.monthly') : t('billing_page.annual')}
            </Badge>
          </Group>
          <p className='text-sm text-gray-600'>{t('billing_page.current_pro_plan')}</p>
        </Stack>
        <Stack gap={8}>
          <p className='text-lg font-semibold text-gray-900'>{t('billing_page.billing_period')}</p>
          <p className='text-sm text-gray-600'>
            {subscriptionStartDate} - {subscriptionEndDate}
          </p>
        </Stack>
      </Group>
      <p className='text-lg font-semibold text-gray-900'>
        ${subscriptionFee}{' '}
        <span className='text-gray-600 text-sm font-normal'>
          {t('billing_page.per')} {isMonthly ? t('billing_page.month') : t('billing_page.year')}
        </span>
      </p>
      <Group justify='space-between'>
        <Button
          onClick={() => navigate('/billing/plans')}
          leadingIcon={<FiZap size={16} fill='white' />}
        >
          {t('billing_page.upgrade')}
        </Button>
        {/* <PlanMenu /> */}
      </Group>
    </Stack>
  );
};
