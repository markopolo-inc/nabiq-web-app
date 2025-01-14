import { Button, GatewayLogo, Group, Modal, Select, Stack } from '@nabiq-ui';

const ModalBody = ({ setOpened }) => {
  return (
    <Stack gap={48} className='p-8'>
      <Stack gap={8}>
        <GatewayLogo app='whatsapp' width={28} />
        <p className='text-2xl text-gray-900 font-semibold'>Add payment method</p>
        <p className='text-sm text-gray-600 font-normal'>
          You won't be charged until you select a plan.
        </p>
      </Stack>
      <div className='grid grid-cols-2 gap-16'>
        <Stack>
          <Select
            label='Your country'
            data={['United States', 'Canada']}
            placeholder='Select country'
          />
          <Select
            label='Quantity of messages (monthly)'
            data={['1000', '2000', '3000']}
            placeholder='Quantity of messages'
          />
        </Stack>
        <Stack gap={24} className='border border-gray-200 bg-gray-50 rounded-xl p-6'>
          <Group justify='space-between' className='border-b border-gray-300 pb-6'>
            <p className='text-sm text-gray-900 font-semibold'>Total conversion cost</p>
            <p className='text-sm text-gray-900 font-semibold'>$25.00/month</p>
          </Group>
          <Stack className='border-b border-gray-300 pb-6' gap={24}>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Total conversion cost</p>
              <p className='text-sm text-gray-600'>$5.00</p>
            </Group>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Processing Fee (10% of total cost)</p>
              <p className='text-sm text-gray-600'>$2.50</p>
            </Group>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Total conversion cost</p>
              <p className='text-sm text-gray-600'>$25.00</p>
            </Group>
          </Stack>
          <p className='text-sm text-gray-600'>
            *Subjects, participants and timestamps will be visible to your team, Content won’t be
            visible unless shared.
          </p>
          <Button fullWidth variant='secondary-black' onClick={() => setOpened(false)}>
            Confirm WhatsApp add-on
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export const WhatsAppAddOnModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (opened: boolean) => void;
}) => {
  return (
    <Modal
      withCustomClose
      withNoHeader
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      size='90%'
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
