import { FiCommand } from '@nabiq-icons';
import { Group, Modal, useGetColors } from '@nabiq-ui';
import { useState } from 'react';
import { DomainDataType, MarkTagContext } from 'src/context/MarkTagContext';

import ModalBody from './ModalBody';

const CreateMarktagModal = ({
  setOpenedModal,
  openedModal,
  selectedMarktagId = null,
  setSelectedMarktagId = undefined,
  onCloseModal = undefined,
}) => {
  const { primary500 } = useGetColors();
  const [marktagType, setMarktagType] = useState<string>('');
  const [domain, setDomain] = useState<string>('');
  const [domainData, setDomainData] = useState<DomainDataType>({
    markTagId: '',
    records: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<'create' | 'register' | 'verify' | 'code'>('create');

  return (
    <MarkTagContext.Provider
      value={{
        marktagType,
        setMarktagType,
        domain,
        setDomain,
        domainData,
        setDomainData,
        loading,
        setLoading,
        step,
        setStep,
      }}
    >
      <Modal
        centered
        size={step === 'create' ? 1000 : step === 'code' ? 782 : 400}
        toggleFromOutside={openedModal}
        setToggleFromOutside={setOpenedModal}
        onClose={() => {
          if (setSelectedMarktagId) {
            setSelectedMarktagId(null);
          }
          setDomainData(null);
          setStep('create');
          setDomain('');
          if (onCloseModal) {
            onCloseModal();
          }
        }}
        title={() =>
          step !== 'create' ? (
            <Group className='p-2 rounded-lg border border-[#eaecf0] bg-white shadow-sm'>
              <FiCommand color={primary500} />
            </Group>
          ) : null
        }
        body={({ setOpened }) => (
          <ModalBody setOpened={setOpened} selectedMarktagId={selectedMarktagId} />
        )}
      >
        {() => <></>}
      </Modal>
    </MarkTagContext.Provider>
  );
};

export default CreateMarktagModal;
