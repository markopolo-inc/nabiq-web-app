import { Group, Stack, Switch } from '@nabiq-ui';
import { useState } from 'react';
import {
  ComparePlanFeatures,
  MonthlyActiveUser,
  PricingPlans,
  Topbar,
} from 'src/components/modules/billing';
import { PriceSummary } from 'src/components/modules/billing/plans/components/pricing-plans';
import { usePlanDetails } from 'src/hooks/modules/billing';

const PlansPage = () => {
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
            <p className='text-sm text-gray-600 font-normal'>Monthly</p>
            <Switch
              checked={!isMonthly}
              disabled={planCategory === 'enterprise'}
              onChange={() => setIsMonthly(!isMonthly)}
              size='sm'
            />
            <p className='text-sm text-gray-600 font-normal'>Annual</p>
          </Group>
          <p className='text-sm text-gray-600 font-normal'>
            (10% discount for {activeUsersInText} monthly active users)
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
