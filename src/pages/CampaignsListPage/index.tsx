import { FiPlus } from '@nabiq-icons';
import { Button, Group, Stack, TableLoader } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CampaignGoalModal, CampaignTable } from 'src/components/modules/campaigns';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { resetCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks.ts';

const CampaignsListPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { isLoading, data: campaignList, refetch } = useGetCampaignConfigsQuery(brandId);

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  const handleCreateCampaign = () => {
    dispatch(resetCampaign());
    setShowGoalModal(true);
  };

  return (
    <>
      <HeaderTitle>Nabiq | Campaigns</HeaderTitle>

      <CampaignGoalModal showModal={showGoalModal} setShowModal={setShowGoalModal} />

      <Stack gap={64}>
        <div className='flex justify-between'>
          <Stack gap={4}>
            <p className='text-gray-900 font-semibold text-3xl'>{t('campaigns_page.campaigns')}</p>
            <p className='text-gray-600 font-normal'>{t('campaigns_page.create_campaign')}</p>
          </Stack>
          <Group>
            {/*<Button variant='secondary'>How does it work?</Button>*/}
            <Button leadingIcon={<FiPlus size={20} color='white' />} onClick={handleCreateCampaign}>
              {t('campaigns_page.create_campaign_button')}
            </Button>
          </Group>
        </div>

        {!isLoading && campaignList?.data?.length === 0 && (
          <div className='max-w-[280px]' onClick={handleCreateCampaign}>
            <Stack
              className='rounded-xl border border-primary-200 bg-primary-25 p-8 shadow-sm cursor-pointer'
              gap={24}
            >
              <div>
                <Button fullWidth={false}>
                  <FiPlus size={20} color='white' />
                </Button>
              </div>
              <p className='text-gray-900 font-semibold'>{t('home_page.campaign_create_first')}</p>
            </Stack>
          </div>
        )}

        {isLoading ? (
          <TableLoader />
        ) : (
          <CampaignTable list={campaignList?.data || []} refetch={refetch} />
        )}
      </Stack>
    </>
  );
};

export default CampaignsListPage;
