import { FiCommand } from '@nabiq-icons';
import { Group, Modal, useGetColors } from '@nabiq-ui';
import { useState } from 'react';
import { DomainDataType, MarkTagContext } from 'src/context/MarkTagContext';

import ModalBody from './ModalBody';

const MarktagConnectModal = ({
  setOpenedModal,
  openedModal,
  selectedMarktagId = null,
  setSelectedMarktagId = undefined,
  onCloseModal = undefined,
}) => {
  const { gray500 } = useGetColors();
  const [domain, setDomain] = useState<string>('');
  const [domainData, setDomainData] = useState<DomainDataType>({
    markTagId: '',
    records: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<'register' | 'verify' | 'code'>('register');

  return (
    <MarkTagContext.Provider
      value={{
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
        size={step === 'code' ? 782 : 400}
        toggleFromOutside={openedModal}
        setToggleFromOutside={setOpenedModal}
        onClose={() => {
          if (setSelectedMarktagId) {
            setSelectedMarktagId(null);
          }
          setDomainData(null);
          setStep('register');
          setDomain('');
          if (onCloseModal) {
            onCloseModal();
          }
        }}
        title={() => (
          <Group
            style={{
              padding: 8,
              borderRadius: 10,
              border: '1px solid #eaecf0',
              background: 'white',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            }}
          >
            <FiCommand color={gray500} />
          </Group>
        )}
        body={({ setOpened }) => (
          <ModalBody setOpened={setOpened} selectedMarktagId={selectedMarktagId} />
        )}
      >
        {() => <></>}
      </Modal>
    </MarkTagContext.Provider>
  );
};

export default MarktagConnectModal;
