import { useForm } from "@mantine/form";
import captilize from "lodash/capitalize";
import { Button, Modal, TextInput } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";

import AppLogo, { AppNameType } from "components/UI/AppLogo";
import { useSaveAppApiKeyMutation } from "store/integrations/integrations.api";
import { useAppSelector } from "src/store/hooks";
import { trimAllValuesOfObject } from "src/utils/stringUtils";

const ApiKeyModal = ({ appName }: { appName: AppNameType }) => {
  const [saveApikey, { isLoading }] = useSaveAppApiKeyMutation();
  const { resourceId: brandId, integrations } = useAppSelector(
    (state) => state.brand
  );

  const ModalBody = ({ setOpened }) => {
    const form = useForm({
      initialValues: {
        apiKey: "",
      },
      validate: {
        apiKey: (value) => (value.length === 0 ? "API key is required" : null),
      },
    });

    const handleFormSubmit = async (values) => {
      const res = await saveApikey({
        apiKey: values.apiKey,
        appName,
        brandId,
      }).unwrap();
      if (res?.success) {
        setOpened(false);
      }
    };

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
        <form
          className="flex flex-col gap-8"
          onSubmit={form.onSubmit((values) => {
            handleFormSubmit(trimAllValuesOfObject(values));
          })}
        >
          <TextInput
            label="API key"
            placeholder="Enter API key"
            {...form.getInputProps("apiKey")}
          />
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              disabled={!form.values.apiKey}
              fullWidth
              loading={isLoading}
            >
              Confirm
            </Button>
            <Button
              fullWidth
              variant="secondary"
              onClick={() => setOpened(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Modal
      size="sm"
      withCustomClose
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {({ setOpened }) =>
        integrations?.[appName]?.apiKey ? (
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
