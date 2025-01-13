import { Stack } from '@nabiq-ui';
import {
  ComparePlanFeatures,
  MonthlyActiveUser,
  Topbar,
} from 'src/components/modules/billing/plans';

const PlansPage = () => {
  return (
    <div className='flex flex-col mt-[56px] p-[64px] gap-8'>
      <Topbar />

      <Stack gap={32} maw={864}>
        <MonthlyActiveUser />
        <ComparePlanFeatures />
      </Stack>
    </div>
  );
};

export default PlansPage;
