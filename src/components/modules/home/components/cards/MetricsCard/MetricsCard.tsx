import { ArrowDown, ArrowUp } from '@nabiq-icons';
import { Badge, Group } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';
import { formatMetricUnit } from 'src/utils/string.utils';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'number' | 'percentage' | 'currency' | 'count' | 'amount';
  change: number;
  index: number;
};

export const MetricsCard: React.FC<MetricsCardProps> = ({ name, type, value, change, index }) => {
  const isPositive = change > 0;

  return (
    <motion.div
      className='rounded-xl border border-gray-200 bg-white shadow-xs p-4 flex flex-col gap-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <p className='text-gray-600 font-medium text-sm'>{name}</p>
      <Group justify='space-between'>
        <p className='text-gray-950 font-semibold text-base'>{formatMetricUnit(value, type)}</p>
        <Badge color={isPositive ? 'success' : 'error'} size='sm'>
          {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {Math.abs(Number(change))}%
        </Badge>
      </Group>
    </motion.div>
  );
};
