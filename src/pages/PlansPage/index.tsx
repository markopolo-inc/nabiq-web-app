import { Stack } from '@nabiq-ui';
import {
  ComparePlanFeatures,
  MonthlyActiveUser,
  PricingPlans,
  Topbar,
} from 'src/components/modules/billing';

const PlansPage = () => {
  return (
    <div className='flex flex-col mt-[56px] p-[64px] gap-8 bg-gray-50'>
      <Topbar />
      <PricingPlans />
      <Stack gap={32} maw={864}>
        <MonthlyActiveUser />
        <ComparePlanFeatures />
      </Stack>
    </div>
  );
};

export default PlansPage;
