import { useForm } from '@mantine/form';
import { Button, GatewayLogo, TextInput } from '@nabiq-ui';
import type { IGateway } from 'interfaces/brand.interface';
import React, { SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gatewayFields } from 'src/lib/integration';
import { useAppSelector } from 'src/store/hooks';
import { hasEmptyField } from 'src/utils/object.utils';
import { camelCaseToCapitalized, trimAllValuesOfObject } from 'src/utils/string.utils';
import { useIntegrateGatewayMutation } from 'store/integrations/integrations.api';

import AccountForm from './AccountForm';

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
  gateway: IGateway;
}> = ({ setOpened, gateway }) => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [integrate, { isLoading }] = useIntegrateGatewayMutation();
  const [responseMsg, setResponseMsg] = useState('');
  const [formStep, setFormStep] = useState<'credential' | 'accountSelect'>('credential');
  const [selectableObjects, setSelectableObjects] = useState<Record<string, any>>({});

  const fields = gatewayFields?.[gateway.category]?.[gateway.gateway];

  const initialValues = {};

  fields?.forEach((field) => {
    initialValues[field] = '';
  });

  const form = useForm({
    initialValues: {
      ...initialValues,
    },
  });

  const handleFormSubmit = async () => {
    // if (gateway.category === "email") {
    //   const res = await integrateEmail({
    //     apiKey: values.apiKey,
    //     gateway: gateway.gateway,
    //     brandId,
    //   }).unwrap();
    //   if (res?.success) {
    //     setOpened(false);
    //   }

    const res = await integrate({
      category: gateway.category,
      payload: {
        brandId,
        gateway: gateway.gateway,
        [gateway.gateway]: {
          ...trimAllValuesOfObject(form.values),
        },
      },
    }).unwrap();
    setResponseMsg(res?.message);
    if (res?.success) {
      if (Object.values(res?.selectableObjects || {})?.length === 0) setOpened(false);
      else {
        setSelectableObjects(res.selectableObjects);
        setFormStep('accountSelect');
      }
    }
  };

  return (
    <div className='p-8 flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <GatewayLogo app={gateway.gateway} width={32} />
        <div className='flex flex-col gap-2'>
          <p className='text-gray-900 font-semibold text-[24px]'>
            {t('integrations.integrate_name', { name: gateway.name })}
          </p>
          <p className='text-gray-600 font-normal text-base'>
            {t('integrations.enter_account_details', { gatewayName: gateway.name })}
          </p>
        </div>
      </div>
      {formStep === 'credential' && (
        <form
          className='flex flex-col gap-8'
          onSubmit={form.onSubmit(() => {
            handleFormSubmit();
          })}
        >
          <div className='flex flex-col gap-3'>
            {fields?.map((field) => (
              <TextInput
                key={field}
                label={camelCaseToCapitalized(field)}
                placeholder={t('integrations.enter', { fieldName: camelCaseToCapitalized(field) })}
                {...form.getInputProps(field)}
              />
            ))}
          </div>
          <div className='flex flex-col gap-3'>
            <Button
              type='submit'
              disabled={hasEmptyField(form.values)}
              fullWidth
              loading={isLoading}
            >
              {t('integrations.confirm')}
            </Button>
            <Button
              fullWidth
              variant='secondary'
              onClick={() => setOpened(false)}
              disabled={isLoading}
            >
              {t('settings.cancel')}
            </Button>
          </div>
        </form>
      )}
      {formStep === 'accountSelect' && (
        <AccountForm
          selectableObjects={selectableObjects}
          message={responseMsg}
          gateway={gateway}
          setOpened={setOpened}
        />
      )}
    </div>
  );
};

export default ModalBody;
