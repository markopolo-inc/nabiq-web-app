import { Modal } from '@nabiq-ui';
import type { IGateway } from 'interfaces/brand.interface';
import React from 'react';

import ModalBody from './ModalBody';

export const AdAccountModal: React.FC<{
  gateway: IGateway;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ gateway, showPopup, setShowPopup }) => {
  return (
    <Modal
      size='sm'
      toggleFromOutside={showPopup}
      setToggleFromOutside={setShowPopup}
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} gateway={gateway} />}
    >
      {() => <></>}
    </Modal>
  );
};
