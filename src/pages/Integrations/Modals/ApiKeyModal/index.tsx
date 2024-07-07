import { Button, Modal, TextInput } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";
import AppLogo, { AppNameType } from "src/components/UI/AppLogo";
import captilize from "lodash/capitalize";

const ApiKeyModal = ({ appName }: { appName: AppNameType }) => {
  const ModalBody = ({ setOpened }) => {
    return (
      <div className="p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <AppLogo app={appName} width={32} />
          <div className="flex flex-col gap-2">
            <p className="text-gray-900 font-semibold text-[24px]">
              Integrate {captilize(appName)}
            </p>
            <p className="text-gray-600 font-normal text-base">
              Please enter your {captilize(appName)} account details.
            </p>
          </div>
        </div>
        <TextInput label="API key" placeholder="Enter API key" />
        <div className="flex flex-col gap-3">
          <Button fullWidth>Confirm</Button>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => setOpened(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      size="sm"
      closeOnClickOutside
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {({ setOpened }) => (
        <Button
          leadingIcon={<FiZap fill="white" size={22} />}
          onClick={() => setOpened(true)}
        >
          Integrate
        </Button>
      )}
    </Modal>
  );
};

export default ApiKeyModal;
