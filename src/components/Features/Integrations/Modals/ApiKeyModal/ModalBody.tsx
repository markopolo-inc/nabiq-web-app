import React, { SetStateAction } from "react";
import { useForm } from "@mantine/form";

import { Button, TextInput } from "@nabiq-ui";

import GatewayLogo from "components/UI/GatewayLogo";
import {
  useIntegrateEmailMutation,
  useIntegrateSMSMutation,
} from "store/integrations/integrations.api";
import { useAppSelector } from "src/store/hooks";
import { trimAllValuesOfObject } from "src/utils/stringUtils";
import { AppInterface } from "interfaces/brand.interface";

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
  app: AppInterface;
}> = ({ setOpened, app }) => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [integrateEmail, { isLoading: isLoadingEmail }] =
    useIntegrateEmailMutation();
  const [integrateSMS] = useIntegrateSMSMutation();
  const form = useForm({
    initialValues: {
      apiKey: "",
    },
    validate: {
      apiKey: (value) => (value.length === 0 ? "API key is required" : null),
    },
  });

  const handleFormSubmit = async (values) => {
    if (app.category === "email") {
      const res = await integrateEmail({
        apiKey: values.apiKey,
        gateway: app.gateway,
        brandId,
      }).unwrap();
      if (res?.success) {
        setOpened(false);
      }
    } else {
      const res = await integrateSMS({
        brandId,
        gateway: app.gateway,
        [app.gateway]: {
          apiKey: values.apiKey,
        },
      }).unwrap();
      if (res?.success) {
        setOpened(false);
      }
    }
  };

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <GatewayLogo app={app.gateway} width={32} />
        <div className="flex flex-col gap-2">
          <p className="text-gray-900 font-semibold text-[24px]">
            Integrate {app.name}
          </p>
          <p className="text-gray-600 font-normal text-base">
            Please enter your {app.name} account details.
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
            loading={isLoadingEmail}
          >
            Confirm
          </Button>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => setOpened(false)}
            disabled={isLoadingEmail}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalBody;
