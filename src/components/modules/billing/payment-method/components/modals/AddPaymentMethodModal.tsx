import { FiCreditCardPlus } from '@nabiq-icons';
import { Button, Modal, Stack, TextInput } from '@nabiq-ui';

const ModalBody = ({ setOpened }: { setOpened: (opened: boolean) => void }) => {
  return (
    <Stack gap={32} className='p-6 pt-8'>
      <Stack gap={16}>
        <FiCreditCardPlus size={32} color='#697586' />
        <Stack gap={4}>
          <p className='text-2xl font-semibold text-gray-900'>Add payment method</p>
          <p className='text-gray-600'>You won't be charged until you select a plan.</p>
        </Stack>
      </Stack>
      <Stack gap={16}>
        <TextInput label='Card number' placeholder='XXXX XXXX XXXX XXXX' />
        <TextInput label='Name on card' placeholder='Cardholder name' />
        <TextInput label='Expiry date' placeholder='MM/YY' />
        <TextInput label='Security code' placeholder='CVV' />
      </Stack>
      <Stack gap={12}>
        <Button fullWidth>Confirm</Button>
        <Button variant='secondary' fullWidth onClick={() => setOpened(false)}>
          Cancel
        </Button>
      </Stack>
    </Stack>
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
      size='sm'
    >
      {() => <></>}
    </Modal>
  );
};
