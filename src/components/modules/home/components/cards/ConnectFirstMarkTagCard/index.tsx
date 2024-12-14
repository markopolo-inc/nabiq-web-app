import { FiConnectFirstMarkTag } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';

type ConnectFirstMarkTagCardPropType = {
  onClick: () => void;
};

export const ConnectFirstMarkTagCard: React.FC<ConnectFirstMarkTagCardPropType> = ({ onClick }) => {
  return (
    <Stack
      gap={160}
      align='center'
      className='flex-row w-full rounded-[20px] border border-white backdrop-blur bg-white/48 p-[39px]'
    >
      <Stack gap={40}>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>Connect MarkTag </h4>
          <p className='font-normal text-sm text-gray-600'>
            Track your first party customer marketing data with cutting-edge precision.{' '}
          </p>
        </Stack>

        <Button variant='primary' onClick={onClick}>
          Connect
        </Button>
      </Stack>

      <FiConnectFirstMarkTag style={{ flex: 'none' }} />
    </Stack>
  );
};
