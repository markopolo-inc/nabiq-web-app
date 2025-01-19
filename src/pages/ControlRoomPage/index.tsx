import { FiHelpCircle, FiPlus, FiSliders01 } from '@nabiq-icons';
import { Button, ContentLoader, Group, Stack, useGetColors } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CampaignGoalModal } from 'src/components/modules/campaigns';
import { ConfigCard, LearnMoreControlRoomModal } from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { resetCampaign } from 'src/store/campaign/campaignSlice.ts';
import { useGetConfigsQuery } from 'src/store/controlRoom/controlRoom.api.ts';

const ControlRoom = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { gray700 } = useGetColors();
  const [showLearnMoreControlRoomModal, setLearnMoreControlRoomModal] = useState<boolean>(false);
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  const { data, isLoading } = useGetConfigsQuery({ limit: 10, page: 1 });
  const configs: IControlRoomConfig[] = data?.data?.configs || [];

  const handleCreateCampaign = () => {
    dispatch(resetCampaign());
    setShowGoalModal(true);
  };

  return (
    <>
      <CampaignGoalModal showModal={showGoalModal} setShowModal={setShowGoalModal} />
      <LearnMoreControlRoomModal
        showModal={showLearnMoreControlRoomModal}
        setShowModal={setLearnMoreControlRoomModal}
      />
      <Stack gap={configs.length === 0 ? 160 : 64}>
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>
              {t('navigation.nav_control_room')}
            </p>
            <p className='text-gray-600 text-base font-normal'>
              {t('control_room.campaigns_feedback')}
            </p>
          </Stack>
          <Button
            onClick={() => setLearnMoreControlRoomModal(true)}
            variant='link'
            leadingIcon={<FiHelpCircle size={20} />}
          >
            {t('control_room.what_is')}
          </Button>
        </Group>

        {isLoading && <ContentLoader />}

        {!isLoading && configs.length === 0 && (
          <Stack align='center' gap={24}>
            <Stack gap={16} align='center'>
              <div className='border border-gray-200 bg-white shadow-xs p-3 rounded-[10px]'>
                <FiSliders01 size={24} color={gray700} />
              </div>
              <Stack gap={4} align='center'>
                <p className='text-gray-900 text-3xl font-semibold'>
                  {t('control_room.no_campaigns_to_show')}
                </p>
                <p className='text-gray-600 text-base font-normal'>
                  {t('control_room.create_campaign_for_updates')}
                </p>
              </Stack>
            </Stack>
            <Button leadingIcon={<FiPlus size={20} color='white' />} onClick={handleCreateCampaign}>
              {t('campaigns_page.create_campaign_button')}
            </Button>
          </Stack>
        )}

        {!isLoading && configs.length > 0 && (
          <Stack align='center'>
            <Stack gap={32}>
              {configs.map((item, idx) => (
                <ConfigCard config={item} key={idx} />
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default ControlRoom;
