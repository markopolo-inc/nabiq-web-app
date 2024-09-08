import { ArrowDown, ArrowUp } from '@nabiq-icons';
import { Badge, Group, Stack } from '@nabiq-ui';
import { formatNumber } from 'src/utils/number';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'count' | 'percentage' | 'amount';
  change: number;
};

const TypeMap = {
  count: '',
  percentage: '%',
  amount: '$',
};

function MetricsCard({ name, type, value, change }: MetricsCardProps) {
  const isPositive = change > 0;
  return (
    <Stack className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'>
      <p className='text-grey-600 font-medium text-sm'>{name}</p>
      <Group justify='space-between'>
        <p className='text-grey-900 font-semibold text-[30px]'>
          {type !== 'percentage' && TypeMap[type]}
          {formatNumber(value)}
          {type === 'percentage' && TypeMap[type]}
        </p>
        <Badge color={isPositive ? 'success' : 'error'} size='sm'>
          {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {Math.abs(Number(change))}%
        </Badge>
      </Group>
    </Stack>
  );
}
export default MetricsCard;
