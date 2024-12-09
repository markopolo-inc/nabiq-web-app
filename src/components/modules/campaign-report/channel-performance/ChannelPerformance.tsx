import { Badge, Stack } from '@nabiq-ui';
import { FC } from 'react';
import { ChannelPerformanceTable } from 'src/components/modules/campaign-report';

export const ChannelPerformance: FC<{
  timeRange: 'last_year' | 'last_month' | 'last_week' | 'last_3_day';
}> = ({ timeRange }) => {
  console.log({ timeRange });
  return (
    <Stack gap={20} className='border border-gray-200 shadow-sm rounded-xl p-6'>
      <div className='flex justify-between items-center'>
        <Stack className='flex-row' gap={8}>
          <p className='text-gray-900 text-lg font-semibold'>Channel performance</p>
          <Badge color='gray'>Retention</Badge>
        </Stack>
      </div>
      <ChannelPerformanceTable />
    </Stack>
  );
};
