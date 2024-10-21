import { FiCommand } from '@nabiq-icons';
import { Group, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
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
  const { gray600, gray900, primary500 } = useGetColors();
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
        size={step === 'create' ? 1090 : step === 'code' ? 782 : 400}
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
          step === 'create' ? (
            <Group className='p-8' justify='between'>
              <Stack align='center' gap={8}>
                <Text color={gray900} size='24px' weight={600}>
                  Create new ‘Marktag’
                </Text>
                <Text color={gray600} size='16px'>
                  Select what platform you want to connect to
                </Text>
              </Stack>
            </Group>
          ) : (
            <Group
              style={{
                padding: 8,
                borderRadius: 10,
                border: '1px solid #eaecf0',
                background: 'white',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
            >
              <FiCommand color={primary500} />
            </Group>
          )
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
