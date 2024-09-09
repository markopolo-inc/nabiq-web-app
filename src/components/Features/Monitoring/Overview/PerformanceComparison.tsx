import { Group, OptionTabs, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer, //   Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  useGetCampaignsQuery,
  useGetPerformanceComparisonQuery,
} from 'src/store/monitoring/monitoring.api';

const PerformanceComparison = () => {
  const { data: campaignData } = useGetCampaignsQuery();
  const [campaign1, setCampaign1] = useState('');
  const [campaign2, setCampaign2] = useState('');
  const [metric, setMetrice] = useState('Impression');

  const { data } = useGetPerformanceComparisonQuery({
    metric,
    campaign1,
    campaign2,
  });
  const campaigns = campaignData?.data || [];
  const graphData = data?.data || {};
  const result = [];

  // Combine campaign1 and campaign2 data by month
  (graphData.campaign1 || []).forEach((c1) => {
    const c2 = graphData.campaign2?.find((c) => c.month === c1.month);
    if (c2) {
      result.push({
        month: c1.month,
        campaign1: c1.value,
        campaign2: c2.value,
      });
    }
  });

  return (
    <Stack gap={20} className='border border-gray-200 shadow-sm rounded-xl p-6'>
      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-lg font-semibold'>Performance comparison</p>
          <p className='text-gray-600 text-sm font-normal'>
            Manage your team members and their account permissions here.
          </p>
        </Stack>
        <Group>
          <Select
            placeholder='Campaign 1'
            value={campaign1}
            data={campaigns?.map((item) => ({ label: item.name, value: item.resourceId }))}
            onChange={setCampaign1}
          />
          <Select
            placeholder='Campaign 2'
            value={campaign2}
            data={campaigns?.map((item) => ({ label: item.name, value: item.resourceId }))}
            onChange={setCampaign2}
          />
        </Group>
      </Group>
      <OptionTabs
        active={metric}
        setActive={setMetrice}
        options={[
          { label: 'Impression', value: 'Impression' },
          { label: 'Revenue', value: 'Revenue' },
          { label: 'Conversion Rate', value: 'Conversion Rate' },
        ]}
      />
      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          data={result || []}
          margin={{ top: 30, right: 30, left: 20, bottom: 15 }}
          className='text-gray-200'
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='month'
            strokeDasharray='3 3'
            opacity={0.4}
            stroke='#181819'
            tickFormatter={(value) => value}
            interval='equidistantPreserveStart'
          >
            <Label value='Month' offset={-10} position='insideBottom' />
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
          <Line type='monotone' dataKey='campaign1' stroke='#2972F5' />
          <Line type='monotone' dataKey='campaign2' stroke='#DD2590' />
        </LineChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default PerformanceComparison;
