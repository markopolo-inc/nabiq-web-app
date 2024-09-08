import { Group, Stack } from '@nabiq-ui';
import { FC } from 'react';
import { IMetrics } from 'src/interfaces/monitoring.interface';
import { useGetMetricsQuery } from 'src/store/monitoring/monitoring.api';

import MetricsCard from './MetricsCard';
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

      <TopPerformingCampaign />
    </Stack>
  );
};

export default Overview;
