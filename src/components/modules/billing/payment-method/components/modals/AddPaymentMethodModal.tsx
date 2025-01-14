import { useForm } from '@mantine/form';
import { FiCreditCardPlus } from '@nabiq-icons';
import { Button, Modal, Stack, TextInput } from '@nabiq-ui';
import { IPaymentMethod, useAddPaymentMethodMutation } from 'src/store/billing/payment.api';
import { useAppSelector } from 'src/store/hooks';

const ModalBody = ({ setOpened }: { setOpened: (opened: boolean) => void }) => {
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
        if (value?.length === 0) return 'Card number is required';
        if (!/^\d{13,19}$/.test(value)) return 'Card number must be between 13 and 19 digits';
        return null;
      },
      month: (value) => {
        if (value?.length === 0) return 'Month is required';
        if (!/^(0[1-9]|1[0-2])$/.test(value)) return 'Month must be between 01-12';
        return null;
      },
      year: (value) => {
        if (value?.length === 0) return 'Year is required';
        if (!/^20\d{2}$/.test(value)) return 'Year must be in 20XX format';
        return null;
      },
      cvv: (value) => {
        if (value?.length === 0) return 'CVV is required';
        if (!/^\d{3}$/.test(value)) return 'CVV must be exactly 3 digits';
        return null;
      },
      first_name: (value) => (value?.length === 0 ? 'First name is required' : null),
      last_name: (value) => (value?.length === 0 ? 'Last name is required' : null),
      street: (value) => (value?.length === 0 ? 'Street address is required' : null),
      city: (value) => (value?.length === 0 ? 'City is required' : null),
      state: (value) => (value?.length === 0 ? 'State is required' : null),
      zip_code: (value) => {
        if (value?.length === 0) return 'ZIP code is required';
        if (!/^\d{5}(-\d{4})?$/.test(value)) return 'Invalid ZIP code format';
        return null;
      },
      country: (value) => (value?.length === 0 ? 'Country is required' : null),
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
          <p className='text-2xl font-semibold text-gray-900'>Add payment method</p>
          <p className='text-gray-600'>You won't be charged until you select a plan.</p>
        </Stack>
      </Stack>
      <Stack gap={16}>
        {/* Card Details */}
        <Stack gap={16}>
          <p className='text-sm font-medium text-gray-700'>Card Details</p>
          <TextInput
            label='Card number'
            placeholder='XXXX XXXX XXXX XXXX'
            key={form.key('card_number')}
            {...form.getInputProps('card_number')}
          />
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label='First name'
              placeholder='First name'
              key={form.key('first_name')}
              {...form.getInputProps('first_name')}
            />
            <TextInput
              label='Last name'
              placeholder='Last name'
              key={form.key('last_name')}
              {...form.getInputProps('last_name')}
            />
          </div>
          <div>
            <p className='text-sm font-medium text-gray-700 mb-1'>Expiry date</p>
            <div className='grid grid-cols-2 gap-4'>
              <TextInput
                placeholder='MM'
                key={form.key('month')}
                {...form.getInputProps('month')}
              />
              <TextInput
                placeholder='YYYY'
                key={form.key('year')}
                {...form.getInputProps('year')}
              />
            </div>
          </div>
          <TextInput
            label='Security code'
            placeholder='CVV'
            key={form.key('cvv')}
            {...form.getInputProps('cvv')}
          />
        </Stack>

        {/* Billing Address */}
        <Stack gap={16}>
          <p className='text-sm font-medium text-gray-700'>Billing Address</p>
          <TextInput
            label='Street address'
            placeholder='Enter street address'
            key={form.key('street')}
            {...form.getInputProps('street')}
          />
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label='City'
              placeholder='Enter city'
              key={form.key('city')}
              {...form.getInputProps('city')}
            />
            <TextInput
              label='State'
              placeholder='Enter state'
              key={form.key('state')}
              {...form.getInputProps('state')}
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <TextInput
              label='ZIP code'
              placeholder='Enter ZIP code'
              key={form.key('zip_code')}
              {...form.getInputProps('zip_code')}
            />
            <TextInput
              label='Country'
              placeholder='Enter country'
              key={form.key('country')}
              {...form.getInputProps('country')}
            />
          </div>
        </Stack>
      </Stack>
      <Stack gap={12} className='grid grid-cols-2 gap-4'>
        <Button fullWidth type='submit' loading={isLoading}>
          Confirm
        </Button>
        <Button variant='secondary' fullWidth disabled={isLoading} onClick={() => setOpened(false)}>
          Cancel
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
