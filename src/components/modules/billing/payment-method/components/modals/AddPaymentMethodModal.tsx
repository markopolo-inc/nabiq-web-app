import { useForm } from '@mantine/form';
import { FiCreditCardPlus } from '@nabiq-icons';
import { Button, Modal, Stack, TextInput } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { IPaymentMethod, useAddPaymentMethodMutation } from 'src/store/billing/payment.api';
import { useAppSelector } from 'src/store/hooks';

const ModalBody = ({ setOpened }: { setOpened: (opened: boolean) => void }) => {
  const { t } = useTranslation();
  const [addPaymentMethod, { isLoading }] = useAddPaymentMethodMutation();
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  const { resourceId: userId, userEmail: email } = useAppSelector((state) => state.user);

  const form = useForm<IPaymentMethod>({
    initialValues: {
      card_number: '',
      month: '',
      year: '',
      cvv: '',
      first_name: '',
      last_name: '',
      companyId,
      userId,
      email,
      street: '',
      city: '',
      state: '',
      zip_code: '',
      country: '',
    },
    validateInputOnChange: true,
    validate: {
      card_number: (value) => {
        if (value?.length === 0) return t('billing_page.card_number_required');
        if (!/^\d{13,19}$/.test(value)) return t('billing_page.card_number_length');
        return null;
      },
      month: (value) => {
        if (value?.length === 0) return t('billing_page.month_required');
        if (!/^(0[1-9]|1[0-2])$/.test(value)) return t('billing_page.month_format');
        return null;
      },
      year: (value) => {
        if (value?.length === 0) return t('billing_page.year_required');
        if (!/^20\d{2}$/.test(value)) return t('billing_page.year_format');
        return null;
      },
      cvv: (value) => {
        if (value?.length === 0) return t('billing_page.cvv_required');
        if (!/^\d{3}$/.test(value)) return t('billing_page.cvv_length');
        return null;
      },
      first_name: (value) => (value?.length === 0 ? t('billing_page.first_name_required') : null),
      last_name: (value) => (value?.length === 0 ? t('billing_page.last_name_required') : null),
      street: (value) => (value?.length === 0 ? t('billing_page.street_address_required') : null),
      city: (value) => (value?.length === 0 ? t('billing_page.city_required') : null),
      state: (value) => (value?.length === 0 ? t('billing_page.state_required') : null),
      zip_code: (value) => {
        if (value?.length === 0) return t('billing_page.zip_code_required');
        if (!/^\d{5}(-\d{4})?$/.test(value)) return t('billing_page.invalid_zip_code');
        return null;
      },
      country: (value) => (value?.length === 0 ? t('billing_page.country_required') : null),
    },
  });

  const handleFormSubmit = async (values) => {
    const res = await addPaymentMethod({ ...values }).unwrap();
    if (res.success) {
      setOpened(false);
    }
  };

  return (
    <form
      className='p-6 pt-8 space-y-8'
      onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
    >
      <Stack gap={16}>
        <FiCreditCardPlus size={32} color='#697586' />
        <Stack gap={4}>
          <p className='text-2xl font-semibold text-gray-900'>
            {t('billing_page.add_payment_method')}
          </p>
          <p className='text-gray-600'>{t('billing_page.no_charge_until_plan')}</p>
        </Stack>
      </Stack>
      <Stack gap={16}>
        {/* Card Details */}
        <Stack gap={16}>
          <p className='text-sm font-medium text-gray-700'>{t('billing_page.card_details')}</p>
          <TextInput
            label={t('billing_page.card_number')}
            placeholder={t('billing_page.card_number_placeholder')}
            key={form.key('card_number')}
            {...form.getInputProps('card_number')}
          />
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label={t('billing_page.first_name')}
              placeholder={t('billing_page.first_name')}
              key={form.key('first_name')}
              {...form.getInputProps('first_name')}
            />
            <TextInput
              label={t('billing_page.last_name')}
              placeholder={t('billing_page.last_name')}
              key={form.key('last_name')}
              {...form.getInputProps('last_name')}
            />
          </div>
          <div>
            <p className='text-sm font-medium text-gray-700 mb-1'>
              {t('billing_page.expiry_date')}
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <TextInput
                placeholder={t('billing_page.expiry_month')}
                key={form.key('month')}
                {...form.getInputProps('month')}
              />
              <TextInput
                placeholder={t('billing_page.expiry_year')}
                key={form.key('year')}
                {...form.getInputProps('year')}
              />
            </div>
          </div>
          <TextInput
            label={t('billing_page.security_code')}
            placeholder={t('billing_page.cvv')}
            key={form.key('cvv')}
            {...form.getInputProps('cvv')}
          />
        </Stack>

        {/* Billing Address */}
        <Stack gap={16}>
          <p className='text-sm font-medium text-gray-700'>{t('billing_page.billing_address')}</p>
          <TextInput
            label={t('billing_page.street_address')}
            placeholder={t('billing_page.street_address_placeholder')}
            key={form.key('street')}
            {...form.getInputProps('street')}
          />
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label={t('billing_page.city')}
              placeholder={t('billing_page.city_placeholder')}
              key={form.key('city')}
              {...form.getInputProps('city')}
            />
            <TextInput
              label={t('billing_page.state')}
              placeholder={t('billing_page.state_placeholder')}
              key={form.key('state')}
              {...form.getInputProps('state')}
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label={t('billing_page.zip_code')}
              placeholder={t('billing_page.zip_code_placeholder')}
              key={form.key('zip_code')}
              {...form.getInputProps('zip_code')}
            />
            <TextInput
              label={t('billing_page.country')}
              placeholder={t('billing_page.country_placeholder')}
              key={form.key('country')}
              {...form.getInputProps('country')}
            />
          </div>
        </Stack>
      </Stack>
      <Stack gap={12} className='grid grid-cols-2 gap-4'>
        <Button fullWidth type='submit' loading={isLoading}>
          {t('home_page.confirm')}
        </Button>
        <Button variant='secondary' fullWidth disabled={isLoading} onClick={() => setOpened(false)}>
          {t('settings.cancel')}
        </Button>
      </Stack>
    </form>
  );
};

export const AddPaymentMethodModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
      withCustomClose
      withNoHeader
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      size='md'
    >
      {() => <></>}
    </Modal>
  );
};
