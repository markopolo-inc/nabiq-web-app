import { Button, GatewayLogo, Modal, Select } from '@nabiq-ui';
// import { useState } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { useGetFbBusinessAccountsQuery } from 'src/store/integrations/social-integrations.api';

const ModalBody = ({ setOpened: _ }: { setOpened: (value: boolean) => void }) => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  useGetFbBusinessAccountsQuery(brandId);
  // console.log(data);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  return (
    <div className='p-8 space-y-4'>
      <GatewayLogo app='whatsapp' width={32} />
      <div className='text-xl font-semibold text-gray-900'>Select business account</div>
      <Select data={[]} label='Select facebook business account' placeholder='Select account' />
      <Select data={[]} label='Select whatsapp number' placeholder='Whatsapp number' />
    </div>
  );
};

export const WhatsAppConnectModal = ({
  showModal,
  setIsShowModal,
}: {
  showModal: boolean;
  setIsShowModal: (value: boolean) => void;
}) => {
  return (
    <Modal
      size='sm'
      withNoHeader
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setIsShowModal}
      body={() => <ModalBody setOpened={setIsShowModal} />}
      onClose={() => setIsShowModal(false)}
    >
      {({ setOpened }) => (
        <Button className='!w-40' variant='secondary' onClick={() => setOpened(true)}>
          Configure
        </Button>
      )}
    </Modal>
  );
};
