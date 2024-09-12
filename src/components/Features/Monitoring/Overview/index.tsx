import { Group, Stack } from '@nabiq-ui';
import { FC } from 'react';
import MetricsCard from 'src/components/UI/MetricsCard';
import { IMetrics } from 'src/interfaces/monitoring.interface';
import { useGetMetricsQuery } from 'src/store/monitoring/monitoring.api';

import PerformanceComparison from './PerformanceComparison';
import PerformanceTrend from './PerformanceTrend';
import TopPerformingCampaign from './TopPerformingCampaigns';

const Overview: FC<{
  timeRange: 'today' | 'last_week' | 'last_month';
}> = ({ timeRange }) => {
  const { data, isLoading } = useGetMetricsQuery({
    timeRange,
    campaignId: null,
  });

  const metrics: IMetrics[] = data?.data?.metrics || [];
  return (
    <Stack gap={32}>
      <Group>
        {!isLoading &&
          metrics.map((item) => (
            <MetricsCard
              key={item.name}
              name={item.name}
              change={item.change}
              type={item.type}
              value={item.value}
            />
          ))}
      </Group>

      <div>
        <Stack gap={32}>
          <TopPerformingCampaign />
          <PerformanceTrend />
        </Stack>
      </div>
      <PerformanceComparison />
    </Stack>
  );
};

export default Overview;
