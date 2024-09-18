import { FiAlertCircle, FiChevronRight } from '@nabiq-icons';
import { Button, Grid, Group, Stack, useGetColors } from '@nabiq-ui';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MetricsCard from 'src/components/UI/MetricsCard';
import { IMetrics } from 'src/interfaces/monitoring.interface';
import { useGetMetricsQuery } from 'src/store/monitoring/monitoring.api';

import PerformanceComparison from './PerformanceComparison';
import PerformanceTrend from './PerformanceTrend';
import TopPerformingCampaign from './TopPerformingCampaigns';

const Overview: FC<{
  timeRange: 'today' | 'last_week' | 'last_month';
}> = ({ timeRange }) => {
  const { error600 } = useGetColors();
  const navigate = useNavigate();

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

      <Grid>
        <Grid.Col span={9}>
          <Stack gap={32}>
            <TopPerformingCampaign />
            <PerformanceTrend />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack gap={24} align='center'>
            <Stack gap={16}>
              <div className='flex items-center gap-2 bg-error-50 rounded-xl p-3'>
                <FiAlertCircle size={16} color={error600} />
                <div className='text-sm font-semibold text-gray-600'>Non-performing campaigns</div>
              </div>

              <div className='flex flex-col gap-6 border border-gray-200 rounded-xl bg-white p-6'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 text-sm font-normal text-gray-600'>
                    <p className='text-gray-900 font-semibold'>test campaign</p>
                    <p>Retention</p>
                  </div>

                  <div className='w-max bg-error-50 border border-error-200 text-error-700 text-xs font-medium py-0.5 px-2 rounded-2xl'>
                    Low impression
                  </div>
                </div>

                <Button
                  className='self-start !p-0'
                  variant='link'
                  trailingIcon={<FiChevronRight size={16} />}
                >
                  View all
                </Button>
              </div>

              <div className='flex flex-col gap-6 border border-gray-200 rounded-xl bg-white p-6'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 text-sm font-normal text-gray-600'>
                    <p className='text-gray-900 font-semibold'>test campaign</p>
                    <p>Retention</p>
                  </div>

                  <div className='w-max bg-error-50 border border-error-200 text-error-700 text-xs font-medium py-0.5 px-2 rounded-2xl'>
                    Low impression
                  </div>
                </div>

                <Button
                  className='self-start !p-0'
                  variant='link'
                  trailingIcon={<FiChevronRight size={16} />}
                >
                  View all
                </Button>
              </div>

              <div className='flex flex-col gap-6 border border-gray-200 rounded-xl bg-white p-6'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 text-sm font-normal text-gray-600'>
                    <p className='text-gray-900 font-semibold'>test campaign</p>
                    <p>Retention</p>
                  </div>

                  <div className='w-max bg-error-50 border border-error-200 text-error-700 text-xs font-medium py-0.5 px-2 rounded-2xl'>
                    Low impression
                  </div>
                </div>

                <Button
                  className='self-start !p-0'
                  variant='link'
                  trailingIcon={<FiChevronRight size={16} />}
                >
                  View all
                </Button>
              </div>
            </Stack>

            <Button onClick={() => navigate('non-performing-campaigns')} variant='secondary'>
              View all
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
      <PerformanceComparison />
    </Stack>
  );
};

export default Overview;
