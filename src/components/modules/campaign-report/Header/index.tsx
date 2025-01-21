import { Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import moment from 'moment-timezone';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const CampaignReportHeader = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const createdAt = searchParams.get('createdAt');

  return (
    <>
      <Breadcrumbs />
      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-[20px] font-semibold'>{name}</p>
          <p className='text-gray-600 text-base font-normal'>
            Created on {moment(createdAt).format('MMM DD, YYYY [at] hh:mm a')}
          </p>
        </Stack>
        <Button size='md' variant='secondary' onClick={() => navigate(-1)}>
          Back to campaigns
        </Button>
      </Group>
    </>
  );
};
