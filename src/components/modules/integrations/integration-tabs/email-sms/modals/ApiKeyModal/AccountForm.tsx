import { Alert } from '@mantine/core';
import { Button, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IGateway } from 'src/interfaces/brand.interface';
import { useAppSelector } from 'src/store/hooks';
import { useAddAccountsMutation } from 'src/store/integrations/integrations.api';
import { camelCaseToCapitalized } from 'src/utils/string.utils';

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
  whatsapp: {
    accounts: { value: 'id', label: 'name' },
    phoneNumber: {
      value: 'display_phone_number',
      label: 'display_phone_number',
    },
  },
};

const AccountForm: React.FC<{
  selectableObjects: Record<string, any>;
  message: string;
  gateway: IGateway;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ selectableObjects, message, gateway, setOpened }) => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [addAccount, { isLoading }] = useAddAccountsMutation();
  const fields = Object.keys(selectableObjects || {});
  const [payload, setPayload] = useState({});

  // console.log(payload);
  return (
    <Stack>
      <Alert color='green' title={message || t('integrations.account_verified')} />

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
                placeholder={`${t('create_campaign.select')}...`}
                onChange={(value) =>
                  setPayload((state) => ({
                    ...state,
                    [field]: selectableObjects[field]?.find(
                      (item) => String(item?.[attributeValue]) === value,
                    ),
                  }))
                }
                label={camelCaseToCapitalized(field)}
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
            {t('integrations.confirm')}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default AccountForm;
