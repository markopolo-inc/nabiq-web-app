import { Group } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';

type EmptyMetricsCardProps = {
  name: string;
  index: number;
};

export const EmptyMetricsCard: React.FC<EmptyMetricsCardProps> = ({ name, index }) => {
  return (
    <motion.div
      className='rounded-xl border border-gray-200 bg-white shadow-xs p-4 flex flex-col gap-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <p className='text-gray-600 font-medium text-sm'>{name}</p>
      <Group justify='space-between'>
        <p className='text-gray-950 font-semibold text-base'>--</p>
      </Group>
    </motion.div>
  );
};
