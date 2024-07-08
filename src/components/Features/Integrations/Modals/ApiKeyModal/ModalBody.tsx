import React, { SetStateAction } from "react";
import { useForm } from "@mantine/form";

import { Button, TextInput } from "@nabiq-ui";

import GatewayLogo from "components/UI/GatewayLogo";
import {
  useIntegrateEmailMutation,
  useIntegrateSMSMutation,
} from "store/integrations/integrations.api";
import { useAppSelector } from "src/store/hooks";
import {
  camelCaseToCapitalized,
  trimAllValuesOfObject,
} from "src/utils/stringUtils";
import { AppInterface, GatewayType } from "interfaces/brand.interface";
import { hasEmptyField } from "src/utils/object.utils";

const gatewayvalues: Record<GatewayType, string[]> = {
  klaviyo: ["apiKey"],
  postmark: [],
  clicksend: ["apiKey"],
  flowroute: ["accessKey", "secretKey"],
  hubspot: [],
  sinch: ["servicePlanId", "apiToken"],
  twilio: ["accountSid", "authToken"],
};

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
  app: AppInterface;
}> = ({ setOpened, app }) => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [integrateEmail, { isLoading: isLoadingEmail }] =
    useIntegrateEmailMutation();
  const [integrateSMS] = useIntegrateSMSMutation();

  const fields = gatewayvalues?.[app.gateway];

  const initialValues = {};

  fields?.forEach((field) => {
    initialValues[field] = "";
  });

  const form = useForm({
    initialValues: {
      ...initialValues,
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
    } else if (app.category === "sms") {
      const res = await integrateSMS({
        brandId,
        gateway: app.gateway,
        [app.gateway]: {
          ...form.values,
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
        <div className="flex flex-col gap-3">
          {fields?.map((field) => (
            <TextInput
              key={field}
              label={camelCaseToCapitalized(field)}
              placeholder={`Enter ${camelCaseToCapitalized(field)}`}
              {...form.getInputProps(field)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            disabled={hasEmptyField(form.values)}
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
