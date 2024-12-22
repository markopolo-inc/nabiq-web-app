import { ArrowDown, ArrowUp } from '@nabiq-icons';
import { Badge, Group, Stack } from '@nabiq-ui';
import React from 'react';
import { formatMetricUnit } from 'src/utils/string.utils';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'number' | 'percentage' | 'currency' | 'count' | 'amount';
  change: number;
};

export const MetricsCard: React.FC<MetricsCardProps> = ({ name, type, value, change }) => {
  const isPositive = change > 0;

  return (
    <Stack className='rounded-xl border border-gray-200 bg-white shadow-xs p-4'>
      <p className='text-gray-600 font-medium text-sm'>{name}</p>
      <Group justify='space-between'>
        <p className='text-gray-950 font-semibold text-base'>{formatMetricUnit(value, type)}</p>
        <Badge color={isPositive ? 'success' : 'error'} size='sm'>
          {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {Math.abs(Number(change))}%
        </Badge>
      </Group>
    </Stack>
  );
};
