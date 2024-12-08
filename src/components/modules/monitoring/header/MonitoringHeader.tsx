import { Stack } from '@nabiq-ui';
import { FC } from 'react';

export const MonitoringHeader: FC = () => {
  return (
    <Stack gap={4}>
      <p className='text-gray-900 font-semibold text-3xl'>Monitoring</p>
      <p className='text-gray-600 font-normal text-base'>
        Know the performance of your campaigns in detail.
      </p>
    </Stack>
  );
};
