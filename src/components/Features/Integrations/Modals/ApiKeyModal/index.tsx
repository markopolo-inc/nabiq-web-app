import { Modal } from "@nabiq-ui";

import ModalBody from "./ModalBody";
import type { GatewayInterface } from "interfaces/brand.interface";
import React from "react";

const ApiKeyModal: React.FC<{
  gateway: GatewayInterface;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ gateway, showModal, setShowModal }) => {
  return (
    <Modal
      size="sm"
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      withCustomClose
      body={({ setOpened }) => (
        <ModalBody setOpened={setOpened} gateway={gateway} />
      )}
    >
      {() => <></>}
    </Modal>
  );
};

export default ApiKeyModal;
