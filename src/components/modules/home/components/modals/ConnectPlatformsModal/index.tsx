import { Modal } from '@nabiq-ui';

import { ModalBody } from './ModalBody';

type Props = {
  openedModal: boolean;
  setOpenedModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConnectPlatformsModal = ({ openedModal, setOpenedModal }: Props) => {
  return (
    <Modal
      centered
      size={660}
      toggleFromOutside={openedModal}
      setToggleFromOutside={setOpenedModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
