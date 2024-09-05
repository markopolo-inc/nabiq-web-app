import { Badge, Group, Stack } from '@nabiq-ui';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'count' | 'percentage' | 'amount';
  field: string;
};

const TypeMap = {
  count: '',
  percentage: '%',
  amount: '$',
};

function MetricsCard({ name, type, value, field }: MetricsCardProps) {
  return (
    <Stack className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'>
      <p className='text-grey-600 font-medium text-sm'>{name}</p>
      <Group justify='space-between'>
        <p className='text-grey-900 font-semibold text-[30px]'>
          {TypeMap[type]}
          {value}
        </p>
        <Badge color='success' size='md'>
          {Math.abs(Number(field))}%
        </Badge>
      </Group>
    </Stack>
  );
}
export default MetricsCard;
