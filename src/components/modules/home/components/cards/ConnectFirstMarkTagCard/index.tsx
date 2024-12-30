import { FiConnectFirstMarkTag } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';

type ConnectFirstMarkTagCardPropType = {
  onClick: () => void;
  isActive: boolean;
  isIntegratedChannel: boolean;
};

export const ConnectFirstMarkTagCard: React.FC<ConnectFirstMarkTagCardPropType> = ({
  onClick,
  isActive,
  isIntegratedChannel,
}) => {
  const classes = isActive
    ? 'top-0 left-0 z-10 w-full'
    : isIntegratedChannel
      ? 'top-4 left-[calc(0%+16px)] z-10 w-[calc(100%-32px)]'
      : 'top-8 left-[calc(0%+32px)] z-10 w-[calc(100%-64px)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Stack
        className={`absolute ${classes} flex-row rounded-[20px] border border-white backdrop-blur bg-white/48 p-[39px] shadow-lg items-center justify-between gap-4`}
      >
        <Stack gap={40}>
          <Stack gap={4} className='max-w-[360px] w-full'>
            <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>Connect MarkTag </h4>
            <p className='font-normal text-sm text-gray-600'>
              Track your first party customer marketing data with cutting-edge precision.
            </p>
          </Stack>

          <Button variant='primary' onClick={onClick}>
            Connect
          </Button>
        </Stack>

        <FiConnectFirstMarkTag style={{ flex: 'none' }} />
      </Stack>
    </motion.div>
  );
};
