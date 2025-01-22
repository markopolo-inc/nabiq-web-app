import { Group, Skeleton } from '@nabiq-ui';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MetricsCard from 'src/components/UI/MetricsCard';
import { IMetricData, IMetrics } from 'src/interfaces/monitoring.interface';
import { useGetMetricCardsQuery } from 'src/store/monitoring/monitoring.api';

export const MetricCards: FC<{
  timeRange: 'last_year' | 'last_month' | 'last_week' | 'last_3_day';
}> = ({ timeRange }) => {
  const { campaignId } = useParams<{ campaignId: string }>();

  const { data, isLoading } = useGetMetricCardsQuery(
    {
      timeRange,
      campaignIds: [campaignId],
    },
    {
      skip: !campaignId,
    },
  );

  const metricData: IMetricData = data?.data || {};

  const metrics: IMetrics[] =
    metricData?.names?.map((name) => ({
      name,
      ...metricData?.details?.[name],
    })) || [];

  return (
    <Group gap={24}>
      {isLoading
        ? Array.from({ length: 6 }, (_, index) => (
            <Skeleton
              key={index}
              height={120}
              className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'
            />
          ))
        : metrics?.map((item) => (
            <MetricsCard
              key={item?.name}
              name={item?.name}
              change={item?.change}
              type={item?.type}
              value={item?.value}
              mediums={item?.mediums}
            />
          ))}
    </Group>
  );
};
