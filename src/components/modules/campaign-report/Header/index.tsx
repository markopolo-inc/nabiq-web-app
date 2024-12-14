import { Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { capitalize } from 'lodash';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const CampaignReportHeader = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  return (
    <>
      <Breadcrumbs />
      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-[20px] font-semibold'>
            Tropical Treasures: {capitalize(name?.split('-').join(' '))}
          </p>
          <p className='text-gray-600 text-base font-normal'>
            List of audience and individual campaign funnel details.
          </p>
        </Stack>
        <Button size='md' variant='secondary' onClick={() => navigate(-1)}>
          Back to campaigns
        </Button>
      </Group>
    </>
  );
};
