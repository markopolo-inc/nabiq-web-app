import { Group, OptionTabs, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useGetPerformanceTrendQuery } from 'src/store/monitoring/monitoring.api';

const PerformanceTrend = () => {
  const [timeRange, setTimeRange] = useState<'12_months' | '30_days' | '7_days' | '24_hours'>(
    '12_months',
  );
  const [metric, setMetrice] = useState('Impressions');
  const { data } = useGetPerformanceTrendQuery({ timeRange, metric });

  const XLabelMap = {
    '12_months': 'Month',
    '30_days': 'Day',
    '7_days': 'Day',
    '24_hours': 'Hour',
  };

  return (
    <Stack gap={20} className='border border-gray-200 shadow-sm rounded-xl p-6'>
      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-lg font-semibold'>Performance trend</p>
          <p className='text-gray-600 text-sm font-normal'>
            Manage your team members and their account permissions here.
          </p>
        </Stack>
        <Select
          value={metric}
          data={['Impressions', 'Conversion Rate', 'Revenue']}
          onChange={setMetrice}
        />
      </Group>
      <OptionTabs
        active={timeRange}
        setActive={setTimeRange}
        options={[
          { label: '12 months', value: '12_months' },
          { label: '30 days', value: '30_days' },
          { label: '7 days', value: '7_days' },
          { label: '24 hours', value: '24_hours' },
        ]}
      />
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          data={data?.data || []}
          margin={{ top: 10, right: 30, left: 20, bottom: 15 }}
          className='text-gray-200'
        >
          <defs>
            <linearGradient id='colorMetrics' x1='0' y1='0' x2='0' y2='1.3'>
              <stop stopColor='#2972F5' stopOpacity='0.2' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='time'
            strokeDasharray='3 3'
            opacity={0.4}
            stroke='#181819'
            tickFormatter={(value) => value}
            interval='equidistantPreserveStart'
          >
            <Label value={XLabelMap[timeRange]} offset={-10} position='insideBottom' />
          </XAxis>
          <YAxis
            label={{ value: metric, angle: -90, position: 'insideLeft' }}
            // domain={[0, effectiveMaxYValue]}
            tickFormatter={(value) => value}
            tickCount={7}
            strokeDasharray='3 3'
            opacity={0.4}
            stroke='#181819'
          />
          {/* <Tooltip /> */}
          <Area
            type='monotone'
            dataKey='value'
            stroke='#2972F5'
            fillOpacity={1}
            fill='url(#colorMetrics'
          />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default PerformanceTrend;
