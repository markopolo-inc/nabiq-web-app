import { Modal } from '@nabiq-ui';
import type { IGateway } from 'interfaces/brand.interface';
import React from 'react';

import ModalBody from './ModalBody';

export const ApiKeyModal: React.FC<{
  gateway: IGateway;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ gateway, showModal, setShowModal }) => {
  return (
    <Modal
      size='sm'
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} gateway={gateway} />}
    >
      {() => <></>}
    </Modal>
  );
};
