import { FiCommand, FiPlus } from '@nabiq-icons';
import { Button, Group, Modal, Stack, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalBody = ({ setOpened, setOpenedCreateNew }) => {
  const { primary500, success500 } = useGetColors();
  const navigate = useNavigate();

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>Connect ‘Marktag’</p>
        <p className='text-gray-600 text-base font-normal'>Select how you want to connect</p>
      </Stack>
      <Stack align='center'>
        <Group>
          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiCommand size={32} color={primary500} />

              <p className='text-lg font-semibold text-gray-900'>Existing marktag</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              Connect an existing marktag already created in markpolo
            </p>

            <Button
              variant='primary'
              onClick={() => {
                setOpened(false);
                navigate('/connect-marktag');
              }}
            >
              Connect
            </Button>
          </div>

          <div className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'>
            <div className='flex flex-col gap-3 items-center'>
              <FiPlus size={32} color={success500} />

              <p className='text-lg font-semibold text-gray-900'>Create new</p>
            </div>

            <p className='text-sm font-normal text-gray-600 text-center'>
              New to this? No worries, create a new marktag from scatch
            </p>

            <Button
              onClick={() => {
                setOpened(false);
                setOpenedCreateNew(true);
              }}
              variant='primary'
            >
              Create
            </Button>
          </div>
        </Group>
      </Stack>
    </Stack>
  );
};

const ConnectMarktagModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateNewModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal, setShowCreateNewModal }) => {
  return (
    <Modal
      zIndex={999}
      size='fit-content'
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => (
        <ModalBody setOpened={setOpened} setOpenedCreateNew={setShowCreateNewModal} />
      )}
    >
      {() => <></>}
    </Modal>
  );
};

export default ConnectMarktagModal;
