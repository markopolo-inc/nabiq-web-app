import { FiAsset51 } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Stack gap={16} align='center'>
      <FiAsset51 />

      <Stack align='center' gap={4}>
        <h2 className='text-2xl font-semibold text-gray-900'>Welcome aboard, John!</h2>
        <p className='text-base font-normal text-gray-600'>
          This is your marketing co-pilot captain, Nabiq.
        </p>
      </Stack>
    </Stack>
  );
};
