import '@mantine/code-highlight/styles.css';
import { Command } from '@nabiq-icons';
import { Button, Group, Modal, Stack, useGetColors } from '@nabiq-ui';
import React from 'react';

const ModalBody = ({ setOpened }) => {
  const { primary500 } = useGetColors();

  return (
    <Stack className='p-8' gap={64} align='' style={{ maxWidth: '552px' }}>
      <Stack align='flex-start' className='mr-auto' gap={8}>
        <div className='flex gap-4'>
          <div className='flex items-center justify-center w-8 h-8 border border-success-50 rounded-full bg-gray-100'>
            <Command size={12} color={primary500} fill={primary500} />
          </div>

          <div className='pr-3'>
            <p className='text-gray-900 text-[24px] font-semibold'>
              Guided Implementation for MarkTag
            </p>
            <p className='text-gray-600 text-base font-normal'>
              Let us help you setup ‘Marktag’ easily.
            </p>
          </div>
        </div>
      </Stack>
      <Stack align='end'>
        <Group gap={12}>
          <Button variant='secondary' onClick={() => setOpened(false)}>
            Go back
          </Button>
          <Button variant='primary'>Get for $50.00</Button>
        </Group>
      </Stack>
    </Stack>
  );
};

const GuidedMarktagModal: React.FC<{
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

export default GuidedMarktagModal;
