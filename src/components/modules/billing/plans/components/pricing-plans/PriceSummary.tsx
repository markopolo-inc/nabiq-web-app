import { FiZap } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';

export const PriceSummary = () => {
  return (
    <Stack className='bg-primary-50 rounded-xl border border-gray-200 p-6' gap={32}>
      <Stack gap={8}>
        <p className='text-2xl text-gray-900 font-semibold'>Price Summary</p>
        <p className='text-sm text-gray-600 font-normal'>Billed in $US Dollars</p>
      </Stack>
      <Stack gap={8} className='border-b border-gray-300 pb-8'>
        <Group justify='space-between'>
          <p className='text-sm text-gray-900 font-semibold'>Pro plan</p>
          <p className='text-sm text-gray-900 font-semibold'>$311.67/month</p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>&gt;50K monthly active users</p>
      </Stack>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-lg text-gray-900 font-semibold'>Total</p>
          <p className='text-lg text-gray-900 font-semibold'>$311.67</p>
        </Group>
        <p className='text-sm text-gray-600 font-normal'>
          *Subjects, participants and timestamps will be visible to your team, Content won’t be
          visible unless shared.
        </p>
        <Button fullWidth leadingIcon={<FiZap size={20} fill='white' />}>
          Subscribe to pro plan
        </Button>
      </Stack>
    </Stack>
  );
};
