import { Badge, Button, Group, Stack } from '@nabiq-ui';

export const BillingDetailsCard = () => {
  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      <Group justify='space-between'>
        <Stack>
          <Group>
            <p>Free trial</p>
            <Badge color='blue'>14 day period</Badge>
          </Group>
          <p>You are currently on our free 14 day trial period.</p>
        </Stack>
        <Stack>
          <p>Billing period</p>
          <p>Not billed yet</p>
        </Stack>
      </Group>
      <p>$0 per month</p>
      <Button>Explore plans</Button>
    </Stack>
  );
};
