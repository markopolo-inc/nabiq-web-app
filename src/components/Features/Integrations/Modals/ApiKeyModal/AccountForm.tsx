import { Alert } from "@mantine/core";
import { Button, Stack, Select } from "@nabiq-ui";
import { capitalize } from "lodash";
import { GatewayInterface } from "src/interfaces/brand.interface";
import { useAppSelector } from "src/store/hooks";
import { useAddAccountsMutation } from "src/store/integrations/integrations.api";

const accountSelectionIds = {
  servers: { value: "serverId", label: "serverName" },
  signatures: { value: "ID", label: "EmailAddress" },
  accounts: { value: "id", label: "name" },
  domains: { value: "name", label: "name" },
};

const AccountForm: React.FC<{
  selectableObjects: Record<string, any>;
  message: string;
  gateway: GatewayInterface;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ selectableObjects, message, gateway, setOpened }) => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [addAccount, { isLoading }] = useAddAccountsMutation();
  const fields = Object.keys(selectableObjects || {});
  const payload = {};

  fields?.forEach((field) => {
    payload[field] = undefined;
  });

  return (
    <Stack>
      <Alert color="green" title={message || "Account verified!"} />

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await addAccount({
            category: gateway.category,
            payload: {
              brandId,
              gateway: gateway.gateway,
              [gateway.gateway]: {
                ...payload,
              },
            },
          }).unwrap();
          if (res.success) {
            setOpened(false);
          }
        }}
      >
        <Stack>
          {fields?.map((field, idx) => {
            const attribute = accountSelectionIds[field].value;
            const data = selectableObjects[field]?.map((item) => {
              return {
                value: String(item?.[attribute]),
                label: String(item?.[accountSelectionIds[field].label]),
              };
              // return String(item?.[attribute]);
            });
            return (
              <Select
                value={payload?.[field]?.value}
                placeholder="Select..."
                onChange={(value) =>
                  Object.assign(payload, {
                    [field]: selectableObjects[field]?.find(
                      (item) => item?.[attribute] === value
                    ),
                  })
                }
                label={capitalize(field)}
                key={idx}
                data={data}
              />
            );
          })}
          <Button
            type="submit"
            fullWidth
            loading={isLoading}
            //   disabled={hasEmptyField(form.values)}
            //   fullWidth
            //   loading={isLoading}
          >
            Confirm
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default AccountForm;
