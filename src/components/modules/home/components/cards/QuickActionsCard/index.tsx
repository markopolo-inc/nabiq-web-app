import { Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';

type QuickActionsProps = {
  header: string;
  subHeader: string;
  icon: React.ComponentType;
  onClick: () => void;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const QuickActionsCard: React.FC<QuickActionsProps> = ({
  header,
  subHeader,
  icon,
  onClick,
}) => {
  const Icon = icon;
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      variants={item}
      className='flex-row flex gap-4 rounded-[20px] border border-white bg-white/48 backdrop-blur py-4 px-6 shadow-lg cursor-pointer'
      onClick={() => onClick && onClick()}
    >
      {icon && <Icon />}

      <Stack gap={4}>
        <p className='text-gray-900 text-lg font-semibold'>{header}</p>
        <p className='text-gray-600 text-sm font-normal'>{subHeader}</p>
      </Stack>
    </motion.div>
  );
};
