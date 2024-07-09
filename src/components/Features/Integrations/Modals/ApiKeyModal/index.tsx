import { Button, Modal } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";

import { useAppSelector } from "store/hooks";

import ModalBody from "./ModalBody";
import type { AppInterface } from "interfaces/brand.interface";
import { hasEmptyField } from "src/utils/object.utils";

const ApiKeyModal = ({ app }: { app: AppInterface }) => {
  const { integrations, smsIntegrations } = useAppSelector(
    (state) => state.brand
  );

  return (
    <Modal
      size="sm"
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} app={app} />}
    >
      {({ setOpened }) =>
        !hasEmptyField(integrations?.[app.gateway]) ||
        !hasEmptyField(smsIntegrations?.[app.gateway]) ? (
          <Button variant="secondary" onClick={() => setOpened(true)}>
            Configure
          </Button>
        ) : (
          <Button
            leadingIcon={<FiZap fill="white" size={22} />}
            onClick={() => setOpened(true)}
          >
            Integrate
          </Button>
        )
      }
    </Modal>
  );
};

export default ApiKeyModal;
