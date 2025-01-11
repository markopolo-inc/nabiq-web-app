import { Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { capitalize } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const CampaignReportHeader = () => {
  const { t } = useTranslation();
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
            {t('campaign_details.list_description')}
          </p>
        </Stack>
        <Button size='md' variant='secondary' onClick={() => navigate(-1)}>
          Back to campaigns
        </Button>
      </Group>
    </>
  );
};
