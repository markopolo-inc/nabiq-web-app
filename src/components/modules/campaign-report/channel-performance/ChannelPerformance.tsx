import { Badge, Stack } from '@nabiq-ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ChannelPerformanceTable } from 'src/components/modules/campaign-report';

export const ChannelPerformance: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap={20} className='border border-gray-200 shadow-sm rounded-xl p-6'>
      <div className='flex justify-between items-center'>
        <Stack className='flex-row' gap={8}>
          <p className='text-gray-900 text-lg font-semibold'>
            {t('campaign_report.channel_performance')}
          </p>
          <Badge color='gray'>{t('create_campaign.goal_retention')}</Badge>
        </Stack>
      </div>
      <ChannelPerformanceTable />
    </Stack>
  );
};
