import { Stack } from '@nabiq-ui';
import { useState } from 'react';
import {
  CampaignReportHeader,
  ChannelPerformance,
  MetricCards,
} from 'src/components/modules/campaign-report';

export const CampaignReport = () => {
  const [timeRange, _setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  return (
    <Stack gap={64}>
      <CampaignReportHeader />
      <MetricCards timeRange={timeRange} />
      <ChannelPerformance timeRange={timeRange} />
    </Stack>
  );
};
