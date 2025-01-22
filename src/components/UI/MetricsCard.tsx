import { ArrowDown, ArrowUp, FiMail01, FiMessageDotCircle, FiWhatsApp } from '@nabiq-icons';
import { Badge, Group, Stack, useGetColors } from '@nabiq-ui';
import { formatMetricUnit } from 'src/utils/string.utils';

type MetricsCardProps = {
  name: string;
  value: number;
  type: 'number' | 'percentage' | 'currency' | 'count' | 'amount';
  change: number;
  mediums?: ('email' | 'sms' | 'whatsapp')[];
};

const MediumIcon = ({ medium, color }: { medium: string; color: string }) => {
  switch (medium) {
    case 'email':
      return <FiMail01 size={20} color={color} />;
    case 'sms':
      return <FiMessageDotCircle size={20} color={color} />;
    case 'whatsapp':
      return <FiWhatsApp size={20} color={color} />;
    default:
      return null;
  }
};

function MetricsCard({ name, type, value, change, mediums = [] }: MetricsCardProps) {
  const { gray600 } = useGetColors();
  const isPositive = change > 0;

  return (
    <Stack className='w-[264px] border border-gray-200 rounded-xl p-6 gap-4'>
      <Group gap={8}>
        {mediums?.map((medium, index) => (
          <MediumIcon key={`${medium}-${index}`} medium={medium} color={gray600} />
        ))}
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
