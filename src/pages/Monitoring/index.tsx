import { Calendar, FiDataFlow02, FiHourglass03 } from '@nabiq-icons';
import { Group, OptionTabs, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
import Overview from 'src/components/Features/Monitoring/Overview';

export const appCategories = [
  {
    value: 'overview',
    label: 'Overview',
    icon: FiHourglass03,
  },
  {
    value: 'breakdown',
    label: 'Breakdown',
    icon: FiDataFlow02,
  },
];

const Monitoring = () => {
  const [category, setCategory] = useState<'overview' | 'breakdown'>('overview');

  const [timeRange, setTimeRange] = useState<'today' | 'last_week' | 'last_month'>('last_week');

  return (
    <Stack gap={32}>
      <Stack gap={64}>
        <Stack>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Monitoring</p>
            <p className='text-gray-600 text-base font-normal'>
              Know the performance of your campaigns in detail.
            </p>
          </Stack>
        </Stack>
        <Stack>
          <Group justify='space-between'>
            <OptionTabs setActive={setCategory} active={category} options={appCategories} />
            <Group>
              <Select
                leftSection={<Calendar size={18} color='#697586' />}
                value={timeRange}
                onChange={(value) => setTimeRange(value as 'today' | 'last_week' | 'last_month')}
                data={[
                  { label: 'Today', value: 'today' },
                  {
                    label: 'Last week',
                    value: 'last_week',
                  },
                  {
                    label: 'Last month',
                    value: 'last_month',
                  },
                ]}
              />
            </Group>
          </Group>
        </Stack>
      </Stack>
      <Stack>{category === 'overview' && <Overview timeRange={timeRange} />}</Stack>
    </Stack>
  );
};

export default Monitoring;
