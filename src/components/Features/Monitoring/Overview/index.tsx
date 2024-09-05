// import { useGetMetricsQuery } from "src/store/monitoring/monitoring.api";
import { FC } from 'react';

import MetricsCard from './MetricsCard';

const Overview: FC<{
  timeRange: 'today' | 'last_week' | 'last_month';
}> = () => {
  // const { data, isLoading } = useGetMetricsQuery({
  //   timeRange,
  //   campaignId: null,
  // });

  return (
    <>
      <MetricsCard value={1260} name='Revenue' type='amount' field='-10' />
    </>
  );
};

export default Overview;
