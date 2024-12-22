import { FiDot } from '@nabiq-icons';
import { Group } from '@nabiq-ui';

export const StepCount = ({ step }: { step: number }) => {
  return (
    <Group gap={16}>
      {[...Array(4)].map((_, index) => (
        <FiDot key={index} size={10} color={index < step ? '#387AF6' : '#E3E8EF'} />
      ))}
    </Group>
  );
};
