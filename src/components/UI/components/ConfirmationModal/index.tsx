import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';

const ModalBody = ({ setOpened, title = 'Are you sure?', onConfirm }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='p-8 space-y-4'>
      <div className='text-lg font-semibold text-gray-900'>{title}</div>
      <div className='grid grid-cols-2 gap-4'>
        <Button variant='secondary' onClick={() => setOpened(false)} fullWidth disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant='primary-destructive'
          onClick={() => {
            if (onConfirm) {
              try {
                setIsLoading(true);
                onConfirm();
              } catch (_err) {
                return _err;
              } finally {
                setIsLoading(false);
              }
            }
          }}
          size='sm'
          fullWidth
          loading={isLoading}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

const ConfirmationModal = ({ title, showModal, setShowModal, onConfirm }) => {
  return (
    <Modal
      size='sm'
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      withNoHeader
      body={({ setOpened }) => (
        <ModalBody setOpened={setOpened} title={title} onConfirm={onConfirm} />
      )}
    >
      {() => <></>}
    </Modal>
  );
};

export default ConfirmationModal;
