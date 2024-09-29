import { FiPlus } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import CampaignGoalModal from 'components/Features/Campaigns/CampaignGoalModal';
import CampaignTable from 'components/Features/Campaigns/CampaignTable';
import { useState } from 'react';
import HeaderTitle from 'src/layouts/HeaderTitle';

const Campaigns = () => {
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  const handleCreateCampaign = () => {
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

        <CampaignTable />
      </Stack>
    </>
  );
};

export default Campaigns;
