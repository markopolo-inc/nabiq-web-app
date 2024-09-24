import { Calendar, FiDataFlow02, FiHourglass03 } from '@nabiq-icons';
import { Group, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
// import Breakdown from 'src/components/Features/Monitoring/Breakdown';
import Overview from 'src/components/Features/Monitoring/Overview';

// import { useGetCampaignsQuery } from 'src/store/monitoring/monitoring.api';

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
  // const [category, setCategory] = useState<'overview' | 'breakdown'>('overview');

  const [timeRange, setTimeRange] = useState<'today' | 'last_week' | 'last_month'>('last_week');

  // const [campaignId, setCampaignId] = useState<string>('');

  // const { data: campaignData } = useGetCampaignsQuery();
  // const campaigns = campaignData?.data || [];
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
            {/* <OptionTabs setActive={setCategory} active={category} options={appCategories} /> */}
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

              {/* {category === 'breakdown' && (
                <Select
                  placeholder='Select'
                  value={campaignId}
                  data={campaigns?.map((item) => ({ label: item.name, value: item.resourceId }))}
                  onChange={setCampaignId}
                />
              )} */}
            </Group>
          </Group>
        </Stack>
      </Stack>
      <Stack>
        <Overview timeRange={timeRange} />
        {/* {category === 'breakdown' && <Breakdown timeRange={timeRange} campaignId={campaignId} />} */}
      </Stack>
    </Stack>
  );
};

export default Monitoring;
