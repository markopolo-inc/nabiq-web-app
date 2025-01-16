import { FiMail01, FiMessageSmileCircle } from '@nabiq-icons';
import { OptionTabs, Skeleton, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MetricsCard } from 'src/components/modules/home/';
import type { TOptionTab } from 'src/interfaces/modules/integrations.ts';
import { IMetricData, IMetrics } from 'src/interfaces/monitoring.interface.ts';
import { useGetMetricCardsQuery } from 'src/store/monitoring/monitoring.api.ts';

const appCategories: Array<{
  value: TOptionTab;
  label: string;
  icon: React.ElementType;
}> = [
  {
    value: 'email',
    label: 'integrations.email_apps',
    icon: FiMail01,
  },
  {
    value: 'sms',
    label: 'integrations.sms_apps',
    icon: FiMessageSmileCircle,
  },
];

export const MetricCards: FC<{
  timeRange: 'last_year' | 'last_month' | 'last_week' | 'last_3_day';
  isOnboardingDone: boolean;
}> = ({ timeRange, isOnboardingDone }) => {
  const { campaignId } = useParams<{ campaignId: string }>();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<TOptionTab>('email');

  const { data, isLoading } = useGetMetricCardsQuery(
    {
      timeRange,
      campaignIds: [campaignId],
    },
    {
      skip: !campaignId,
    },
  );

  const metricData: IMetricData = data?.data || {};

  const metrics: IMetrics[] =
    metricData?.names?.slice(0, 6)?.map((name) => ({
      name,
      ...metricData?.details?.[name],
    })) || [];

  return (
    <motion.div
      className='flex flex-col p-6 rounded-[20px] border border-white backdrop-blur-lg bg-white/48 w-full shadow-lg gap-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Stack gap={20}>
        <Stack gap={4}>
          <p className='text-gray-900 text-lg font-semibold'>{t('home_page.metrics_title')}</p>
          <p className='text-gray-600 text-sm font-normal'>{t('home_page.data_ready')}</p>
        </Stack>

        <OptionTabs
          setActive={setSelectedTab}
          active={selectedTab}
          options={appCategories?.map((item) => ({
            ...item,
            label: (
              <div className='flex gap-2 items-center'>
                {item.icon && (
                  <span>
                    <item.icon
                      size={18}
                      color={selectedTab === item.value ? '#364152' : '#9AA4B2'}
                      strokeWidth={1.6}
                    />
                  </span>
                )}
                {t(item.label)}
              </div>
            ),
          }))}
        />
      </Stack>

      <motion.div
        className={`grid grid-cols-1 ${isOnboardingDone ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}
      >
        {isLoading
          ? Array.from({ length: 6 }, (_, index) => (
              <Skeleton
                key={index}
                height={120}
                className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'
              />
            ))
          : metrics?.map((item, index) => (
              <MetricsCard
                key={item?.name}
                index={index}
                name={item?.name}
                change={item?.change}
                type={item?.type}
                value={item?.value}
              />
            ))}
      </motion.div>
    </motion.div>
  );
};
