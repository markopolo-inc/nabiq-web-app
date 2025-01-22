import { FiCheckCircle } from '@nabiq-icons';
import { Button, Modal, Stack, Text } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ModalBody = ({ setOpened }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Stack gap={32} className='p-8'>
      <Stack gap={16} align='center'>
        <div className='flex w-8 h-8 p-2 justify-center items-center rounded-full border border-[#ECFDF3] bg-[#DCFAE6]'>
          <FiCheckCircle size={32} />
        </div>

        <Text size='24px' weight={600} className='text-center text-gray-900'>
          {t('campaign_report.congratulations_first_campaign')}
        </Text>
        <Stack gap={32}>
          <Text size='16px' className='text-center text-gray-600'>
            {t('campaign_report.cohort_selection')}
          </Text>

          <Text size='16px' className='text-center text-gray-600'>
            {t('campaign_report.view_approval')}{' '}
            <span className='font-bold'>{t('navigation.nav_control_room')}</span>.
            {t('campaign_report.notification_ready')}
          </Text>
        </Stack>
      </Stack>

      <Button
        className='w-full'
        onClick={() => {
          setOpened(false);
          navigate('/control-room');
        }}
      >
        {t('campaign_report.view_control_room')}
      </Button>
    </Stack>
  );
};

export const CampaignFirstCreationModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      zIndex={999}
      size={600}
      withNoHeader
      withCloseButton={false}
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
