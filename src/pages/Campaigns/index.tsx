import { FiPlus } from '@nabiq-icons';
import { Button, Group, Stack, TableLoader } from '@nabiq-ui';
import CampaignGoalModal from 'components/Features/Campaigns/CampaignGoalModal';
import CampaignTable from 'components/Features/Campaigns/CampaignTable';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { resetCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks.ts';

const Campaigns = () => {
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
            <p className='text-gray-900 font-semibold text-3xl'>Campaigns</p>
            <p className='text-gray-600 font-normal'>
              Create your campaign to effectively target and engage specific cohorts
            </p>
          </Stack>
          <Group>
            {/*<Button variant='secondary'>How does it work?</Button>*/}
            <Button leadingIcon={<FiPlus size={20} color='white' />} onClick={handleCreateCampaign}>
              Create campaign
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
              <p className='text-gray-900 font-semibold'>Create your first campaign</p>
            </Stack>
          </div>
        )}

        {isLoading ? (
          <TableLoader />
        ) : (
          <CampaignTable list={campaignList?.data} refetch={refetch} />
        )}
      </Stack>
    </>
  );
};

export default Campaigns;
