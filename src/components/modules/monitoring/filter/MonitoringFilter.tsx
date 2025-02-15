import { Calendar } from '@nabiq-icons';
import { Group, Select, useGetColors } from '@nabiq-ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type timeRangeType = 'last_year' | 'last_month' | 'last_week' | 'last_3_day';
type CampaignOptionType = { label: string; value: string };

export const MonitoringFilter: FC<{
  campaignId: string;
  campaignListOptions: CampaignOptionType[];
  setCampaign: (value: CampaignOptionType['label']) => void;
  timeRange: timeRangeType;
  setTimeRange: (value: timeRangeType) => void;
}> = ({ timeRange, setTimeRange, setCampaign, campaignListOptions, campaignId }) => {
  const { t } = useTranslation();
  const { gray600 } = useGetColors();

  return (
    <Group gap={16}>
      <Select
        leftSection={<Calendar size={18} color={gray600} />}
        value={timeRange}
        onChange={(value: timeRangeType) => setTimeRange(value)}
        data={[
          { label: t('monitoring.last_year'), value: 'last_year' },
          {
            label: t('monitoring.last_month'),
            value: 'last_month',
          },
          {
            label: t('monitoring.last_week'),
            value: 'last_week',
          },
          {
            label: t('monitoring.last_3_days'),
            value: 'last_3_day',
          },
        ]}
      />
      <Select value={campaignId} onChange={setCampaign} data={campaignListOptions} />
    </Group>
  );
};
