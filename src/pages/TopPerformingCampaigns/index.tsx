import { Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

const TopPerformingCampaigns = () => {
  const navigate = useNavigate();
  return (
    <Stack gap={20}>
      <Breadcrumbs />
      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-3xl font-semibold'>Top performing campaigns</p>
          <p className='text-gray-600 text-base font-normal'>
            List of top performing campaigns and their metrics.
          </p>
        </Stack>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </Group>
    </Stack>
  );
};

export default TopPerformingCampaigns;
