import { Envelope, FiCode, FiGlobe01, FiInfinity, FiLifeBuoy01, FiShopify } from '@nabiq-icons';
import { Button, Group, Modal, Stack, useGetColors } from '@nabiq-ui';
import React from 'react';

const ModalBody = ({ setOpened }) => {
  const { success500, gray500, warning500 } = useGetColors();

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>Create new ‘Marktag’</p>
        <p className='text-gray-600 text-base font-normal'>
          Select what platform you want to connect to
        </p>
      </Stack>
      <Stack align='center'>
        <Group>
          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiGlobe01 size={32} color={gray500} />

              <p className='text-lg font-semibold text-gray-900'>Website</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>Connect to your website</p>

            <Button onClick={() => setOpened(false)} variant='primary'>
              Create
            </Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiShopify size={32} />

              <p className='text-lg font-semibold text-gray-900'>Create new</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Connect to your Shopify store
            </p>

            <Button variant='primary'>Create</Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiInfinity size={32} color={success500} />

              <p className='text-lg font-semibold text-gray-900'>Woocommerce</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Connect to your Woocommerce
            </p>

            <Button variant='primary'>Create</Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiCode size={32} color={gray500} />

              <p className='text-lg font-semibold text-gray-900'>Install code manually</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Setup everything by yourself
            </p>

            <Button variant='primary'>Create</Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <Envelope size={32} color={warning500} />

              <p className='text-lg font-semibold text-gray-900'>Email to developer</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Setup with developer's help
            </p>

            <Button variant='primary'>Create</Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiLifeBuoy01 size={32} color={success500} />

              <p className='text-lg font-semibold text-gray-900'>Get support</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Get us to help you setup!
            </p>

            <Button variant='primary'>Create</Button>
          </div>
        </Group>
      </Stack>
    </Stack>
  );
};

const CreateNewMarktagModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      zIndex={999}
      size='fit-content'
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};

export default CreateNewMarktagModal;
