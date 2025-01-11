import { FiLineChartUp01 } from '@nabiq-icons';
import { Group, OptionTabs, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useGetMonitoringPerformanceTrendQuery } from 'src/store/monitoring/monitoring.api';

interface TransformedData {
  time: string;
  [key: string]: number | string;
}

export const PerformanceTrend: FC<{
  timeRange: 'last_year' | 'last_month' | 'last_week' | 'last_3_day';
  isOnboardingDone: boolean;
}> = ({ timeRange, isOnboardingDone }) => {
  const { t } = useTranslation();
  const [valueType, setValueType] = useState<'number' | 'percentage'>('number');
  const [graphData, setGraphData] = useState<TransformedData[]>([]);

  const {
    data: performanceData,
    isLoading,
    error,
  } = useGetMonitoringPerformanceTrendQuery({
    timeRange,
    valueType,
    metrics: [],
    configId: null,
  });

  const transformData = (data: any): TransformedData[] => {
    if (!data?.names || !data?.details) {
      return [];
    }

    const metrics = data?.names;

    const transformedData = data?.details?.[metrics[0]]?.map((item, index) => {
      const dataPoint: TransformedData = {
        time: item?.time,
      };

      metrics?.forEach((metric) => {
        dataPoint[metric] = data?.details[metric][index].value;
      });

      return dataPoint;
    });

    return transformedData;
  };

  useEffect(() => {
    if (performanceData?.data) {
      const transformed = transformData(performanceData?.data);
      setGraphData(transformed);
    }
  }, [performanceData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`${isOnboardingDone ? 'w-auto' : 'max-w-[669px]'} flex flex-col gap-5 w-full h-fit rounded-[20px] border border-white p-6 backdrop-blur-lg bg-white/48 shadow-lg`}
    >
      <div className='flex justify-between items-center'>
        <Stack gap={4}>
          <p className='text-gray-900 text-lg font-semibold'>
            {t('home_page.performance_trend_title')}
          </p>
          <p className='text-gray-600 text-sm font-normal'>
            {t('home_page.performance_trend_description')}
          </p>
        </Stack>
      </div>

      <Group justify='space-between'>
        <OptionTabs
          active={valueType}
          setActive={setValueType}
          options={[
            { label: '123', value: 'number' },
            { label: '%', value: 'percentage' },
          ]}
        />
      </Group>

      <Stack className='bg-white p-6 rounded-xl border border-gray-200 shadow-xs' gap={0}>
        {!!graphData?.length && (
          <Group gap={12} className='ps-2 self-end'>
            {performanceData?.data?.names?.map((metric: string, index: number) => (
              <div key={metric} className='flex items-center'>
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2 ${
                    [
                      'bg-blue-500',
                      'bg-pink-500',
                      'bg-purple-500',
                      'bg-green-500',
                      'bg-yellow-400',
                    ][index]
                  }`}
                />
                <span className='text-sm text-gray-600'>{metric}</span>
              </div>
            ))}
          </Group>
        )}

        {isLoading ? (
          <p className='text-gray-600'>Loading performance data...</p>
        ) : error ? (
          <p className='text-red-600'>Error loading performance data</p>
        ) : graphData?.length === 0 ? (
          <Stack align='center' gap={24} p={24}>
            <div className='p-3 bg-white border border-gray-200 shadow-xs rounded-[10px]'>
              <FiLineChartUp01 />
            </div>

            <Stack gap={4} align='center'>
              <p className='text-gray-900 font-semibold text-base'>
                Data will be rolling in shortly!
              </p>
              <p className='text-gray-600 font-normal text-sm'>
                Your data will show up here when ready.
              </p>
            </Stack>
          </Stack>
        ) : (
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              data={graphData}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
              className='text-gray-600'
            >
              <CartesianGrid strokeDasharray='3 3' vertical={false} />
              <XAxis
                dataKey='time'
                strokeDasharray='3 3'
                opacity={0.4}
                stroke='#181819'
                interval='equidistantPreserveStart'
              ></XAxis>
              <YAxis
                tickFormatter={(value) => value}
                tickCount={7}
                strokeDasharray='3 3'
                opacity={0.4}
                stroke='#181819'
              />
              <Tooltip />
              {performanceData?.data?.names?.map((metric: string, index: number) => (
                <Line
                  key={metric}
                  type='monotone'
                  dataKey={metric}
                  stroke={
                    [
                      '#2972F5', // Contacted
                      '#DD2590', // Delivered
                      '#9f7aea', // Opened
                      '#28a745', // Clicked
                      '#ffc107', // Replied
                      '#6f42c1', // Interested
                    ][index]
                  }
                  strokeWidth={2}
                  dot={null}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </Stack>
    </motion.div>
  );
};
