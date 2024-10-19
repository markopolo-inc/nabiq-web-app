import { Alert } from '@mantine/core';
import { Button, Select, Stack } from '@nabiq-ui';
import { capitalize } from 'lodash';
import { useState } from 'react';
import { GatewayInterface } from 'src/interfaces/brand.interface';
import { useAppSelector } from 'src/store/hooks';
import { useAddAccountsMutation } from 'src/store/integrations/integrations.api';

const accountSelectionIds = {
  // email
  postmark: {
    servers: { value: 'serverId', label: 'serverName' },
    signatures: { value: 'ID', label: 'EmailAddress' },
  },
  onesignal: {
    accounts: { value: 'id', label: 'name' },
  },
  resend: {
    domains: { value: 'name', label: 'name' },
  },
  mailgun: { domains: { value: 'name', label: 'name' } },
  clicksend: {
    accounts: { value: 'subaccount_id', label: 'first_name' },
  },

  // sms
  twilio: {
    servers: {
      value: 'urls',
      label: 'username',
    },
  },
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
  const [payload, setPayload] = useState({});

  // console.log(payload);
  return (
    <Stack>
      <Alert color='green' title={message || 'Account verified!'} />

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
            const attributeValue = accountSelectionIds[gateway.gateway][field]?.value;
            const attributeLabel = accountSelectionIds[gateway.gateway][field]?.label;

            const data = selectableObjects[field]?.map((item) => {
              return {
                value: String(item?.[attributeValue]),
                label: String(item?.[attributeLabel]),
              };
              // return String(item?.[attribute]);
            });
            return (
              <Select
                value={payload?.[field]?.value}
                placeholder='Select...'
                onChange={(value) =>
                  setPayload((state) => ({
                    ...state,
                    [field]: selectableObjects[field]?.find(
                      (item) => String(item?.[attributeValue]) === value,
                    ),
                  }))
                }
                label={capitalize(field)}
                key={idx}
                data={data}
              />
            );
          })}
          <Button
            type='submit'
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
