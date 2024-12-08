import { Calendar } from '@nabiq-icons';
import { Group, Select, useGetColors } from '@nabiq-ui';
import { FC } from 'react';

type timeRangeType = 'last_year' | 'last_month' | 'last_week' | 'last_3_day';

export const MonitoringFilter: FC<{
  timeRange: timeRangeType;
  setTimeRange: (value: timeRangeType) => void;
}> = ({ timeRange, setTimeRange }) => {
  const { gray600 } = useGetColors();

  return (
    <Group gap={16}>
      <Select
        leftSection={<Calendar size={18} color={gray600} />}
        value={timeRange}
        onChange={(value: timeRangeType) => setTimeRange(value)}
        data={[
          { label: 'Last year', value: 'last_year' },
          {
            label: 'Last month',
            value: 'last_month',
          },
          {
            label: 'Last week',
            value: 'last_week',
          },
          {
            label: 'Last 3 days',
            value: 'last_3_day',
          },
        ]}
      />
      <Select value='All campaigns' data={['All campaigns']} />
    </Group>
  );
};
