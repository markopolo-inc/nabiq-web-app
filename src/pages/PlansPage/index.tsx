import { Group, Stack, Switch } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ComparePlanFeatures,
  MonthlyActiveUser,
  PricingPlans,
  Topbar,
} from 'src/components/modules/billing';
import { PriceSummary } from 'src/components/modules/billing/plans/components/pricing-plans';
import { usePlanDetails } from 'src/hooks/modules/billing';

const PlansPage = () => {
  const { t } = useTranslation();
  const [activeUsers, setActiveUsers] = useState(10000);
  const [isMonthly, setIsMonthly] = useState(true);
  const [planCategory, setPlanCategory] = useState<'pro' | 'enterprise'>('pro');
  const { activeUsersInText } = usePlanDetails({ activeUsers, isMonthly });

  return (
    <div className='flex flex-col mt-[56px] p-[64px] gap-8 bg-gray-50'>
      <Topbar />

      <Stack>
        <Group gap={8}>
          <Group gap={8}>
            <p className='text-sm text-gray-600 font-normal'>{t('billing_page.monthly')}</p>
            <Switch
              checked={!isMonthly}
              disabled={planCategory === 'enterprise'}
              onChange={() => setIsMonthly(!isMonthly)}
              size='sm'
            />
            <p className='text-sm text-gray-600 font-normal'>{t('billing_page.annual')}</p>
          </Group>
          <p className='text-sm text-gray-600 font-normal'>
            {t('pricing_plan.discount_notice', { activeUsersInText })}
          </p>
        </Group>

        <div className='flex gap-8'>
          <Stack gap={32} maw={864}>
            <PricingPlans
              activeUsers={activeUsers}
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
              planCategory={planCategory}
              setPlanCategory={setPlanCategory}
            />
            <MonthlyActiveUser
              activeUsers={activeUsers}
              setActiveUsers={setActiveUsers}
              isMonthly={isMonthly}
              planCategory={planCategory}
            />
            <ComparePlanFeatures />
          </Stack>
          <PriceSummary
            activeUsers={activeUsers}
            isMonthly={isMonthly}
            planCategory={planCategory}
          />
        </div>
      </Stack>
    </div>
  );
};

export default PlansPage;
