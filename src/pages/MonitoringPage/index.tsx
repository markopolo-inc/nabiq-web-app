import { Stack } from '@nabiq-ui';
import { useMemo, useState } from 'react';
import {
  MetricCards,
  MonitoringFilter,
  MonitoringHeader,
  PerformanceTrend,
} from 'src/components/modules/monitoring';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { useAppSelector } from 'src/store/hooks.ts';

const MonitoringPage = () => {
  const [campaignId, setCampaignId] = useState<string>('all');
  const [timeRange, setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data: campaignList } = useGetCampaignConfigsQuery(brandId);

  const { campaignListOptions, campaignIds } = useMemo(() => {
    const newCampaignsList = (campaignList?.data || []).map((item) => ({
      label: item.name,
      value: item.resourceId,
    }));

    return {
      campaignListOptions: [{ label: 'All campaigns', value: 'all' }, ...newCampaignsList],
      campaignIds: campaignId === 'all' ? newCampaignsList.map((item) => item.value) : [campaignId],
    };
  }, [campaignList, campaignId]);

  return (
    <Stack gap={64}>
      <MonitoringHeader />
      <MonitoringFilter
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        campaignListOptions={campaignListOptions}
        setCampaign={setCampaignId}
        campaignId={campaignId}
      />
      <MetricCards timeRange={timeRange} campaignIds={campaignIds} />
      <PerformanceTrend timeRange={timeRange} campaignIds={campaignIds} />
    </Stack>
  );
};

export default MonitoringPage;
