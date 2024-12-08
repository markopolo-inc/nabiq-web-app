import { Stack } from '@nabiq-ui';
import { useState } from 'react';
import {
  MetricCards,
  MonitoringFilter,
  MonitoringHeader,
  PerformanceTrend,
} from 'src/components/modules/monitoring';

const Monitoring = () => {
  const [timeRange, setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  return (
    <Stack gap={64}>
      <MonitoringHeader />
      <MonitoringFilter timeRange={timeRange} setTimeRange={setTimeRange} />
      <MetricCards timeRange={timeRange} />
      <PerformanceTrend timeRange={timeRange} />
    </Stack>
  );
};

export default Monitoring;
