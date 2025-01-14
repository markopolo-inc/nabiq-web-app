import { Badge, Group, Progress, Stack } from '@nabiq-ui';

export const UsageCard = () => {
  const target = 30;

  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      <Stack gap={4}>
        <Group gap={8}>
          <p className='text-lg font-semibold text-gray-900'>Usage</p>
          <Badge color={'success'}>{target}% used</Badge>
        </Group>
        <p className='text-sm text-gray-600'>{30}/100 users targeted</p>
      </Stack>
      <Progress value={target} color='#2972F5' />
      <p className='text-sm text-gray-600'>Credits will not reset on free trial period.</p>
    </Stack>
  );
};
