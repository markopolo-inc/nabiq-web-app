import { Stack } from '@nabiq-ui';
import { useState } from 'react';
import {
  ComparePlanFeatures,
  MonthlyActiveUser,
  PricingPlans,
  Topbar,
} from 'src/components/modules/billing';

const PlansPage = () => {
  const [activeUsers, setActiveUsers] = useState(10000);
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className='flex flex-col mt-[56px] p-[64px] gap-8 bg-gray-50'>
      <Topbar />
      <PricingPlans activeUsers={activeUsers} isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      <Stack gap={32} maw={864}>
        <MonthlyActiveUser
          activeUsers={activeUsers}
          setActiveUsers={setActiveUsers}
          isMonthly={isMonthly}
        />
        <ComparePlanFeatures />
      </Stack>
    </div>
  );
};

export default PlansPage;
