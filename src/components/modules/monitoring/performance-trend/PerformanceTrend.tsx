import { FiPlus } from '@nabiq-icons';
import { Button, Group, OptionTabs, Stack } from '@nabiq-ui';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
}> = ({ timeRange }) => {
  const navigate = useNavigate();
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
    <Stack gap={20} className='border border-gray-200 shadow-sm rounded-xl p-6'>
      <div className='flex justify-between items-center'>
        <Stack gap={4}>
          <p className='text-gray-900 text-lg font-semibold'>Performance Trend</p>
          <p className='text-gray-600 text-sm font-normal'>
            Trends in your campaign metrics over time
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
        <Group gap={12} className='px-2 py-2' style={{ marginBottom: -50 }}>
          {graphData?.length > 0 &&
            performanceData?.data?.names?.map((metric: string, index: number) => (
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
      </Group>

      {isLoading ? (
        <p className='text-gray-600'>Loading performance data...</p>
      ) : error ? (
        <p className='text-red-600'>Error loading performance data</p>
      ) : graphData?.length === 0 ? (
        <Stack align='center' gap={24} p={24}>
          <Stack gap={4} align='center'>
            <p className='text-gray-900 font-semibold'>No data to show at this moment</p>
            <p className='text-gray-600 text-sm'>
              Launch a campaign to see performance trend data.
            </p>
          </Stack>

          <Button
            leadingIcon={<FiPlus size={20} color='white' />}
            onClick={() => navigate(`/campaigns`)}
          >
            Create campaign
          </Button>
        </Stack>
      ) : (
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            data={graphData}
            margin={{ top: 30, right: 30, left: 20, bottom: 15 }}
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
  );
};
