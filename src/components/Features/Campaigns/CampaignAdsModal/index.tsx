import { Modal, Stack } from '@nabiq-ui';
import React from 'react';

const ModalBody = ({ setOpened }) => {
  console.log({ setOpened });
  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>New campaign</p>
        <p className='text-gray-600 text-base font-normal'>
          Select the campaign goal that matches your objective.
        </p>
      </Stack>
    </Stack>
  );
};

const CampaignAdsModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      zIndex={999}
      size='fit-content'
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};

export default CampaignAdsModal;
