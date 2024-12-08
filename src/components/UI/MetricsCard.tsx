import { ArrowDown, ArrowUp, FiMail01, FiMessageDotCircle, FiWhatsApp } from '@nabiq-icons';
import { Badge, Group, Stack, useGetColors } from '@nabiq-ui';
import { formatMetricUnit } from 'src/utils/string.utils';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'number' | 'percentage' | 'currency' | 'count' | 'amount';
  change: number;
  medium?: 'email' | 'sms' | 'whatsapp' | undefined;
};

function MetricsCard({ name, type, value, change, medium = undefined }: MetricsCardProps) {
  const { gray600 } = useGetColors();
  const isPositive = change > 0;

  return (
    <Stack className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'>
      <Group gap={8}>
        {medium === 'email' && <FiMail01 size={20} color={gray600} />}
        {medium === 'sms' && <FiMessageDotCircle size={20} color={gray600} />}
        {medium === 'whatsapp' && <FiWhatsApp size={20} />}
        <p className='text-gray-600 font-medium text-sm'>{name}</p>
      </Group>
      <Group justify='space-between'>
        <p className='text-gray-900 font-semibold text-xl'>{formatMetricUnit(value, type)}</p>
        <Badge color={isPositive ? 'success' : 'error'} size='sm'>
          {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {Math.abs(Number(change))}%
        </Badge>
      </Group>
    </Stack>
  );
}
export default MetricsCard;
