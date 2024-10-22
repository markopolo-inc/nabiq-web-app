import { Modal } from '@nabiq-ui';
import React from 'react';

import ModalBody from './ModalBody';

export const LearnMoreControlRoomModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      size='lg'
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
