import { FiConnectFirstMarkTag } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';

type ConnectFirstMarkTagCardPropType = {
  onClick: () => void;
  isActive: boolean;
};

export const ConnectFirstMarkTagCard: React.FC<ConnectFirstMarkTagCardPropType> = ({
  onClick,
  isActive,
}) => {
  return (
    <Stack
      gap={160}
      align='center'
      className={`absolute ${isActive ? '' : 'top-8 left-[calc(0%+32px)] z-10 w-[calc(100%-64px)]'} flex-row rounded-[20px] border border-white backdrop-blur bg-white/48 p-[39px] shadow-lg`}
    >
      <Stack gap={40}>
        <Stack gap={4} className='max-w-[360px] w-full'>
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
