import { FiCommand } from '@nabiq-icons';
import { Group, Modal, useGetColors } from '@nabiq-ui';
import { useState } from 'react';
import { DomainDataType, MarkTagContext, StepType } from 'src/context/MarkTagContext';

import ModalBody from './ModalBody';

const stepSizeMap: { [key: string]: number } = {
  connect: 660,
  create: 1000,
  choose: 940,
  code: 782,
  email: 672,
  support: 552,
};

const MarktagCreationsModals: React.FC<{
  openedModal: boolean;
  setOpenedModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ openedModal, setOpenedModal }) => {
  const { primary500 } = useGetColors();
  const [marktagType, setMarktagType] = useState<string>('');
  const [domain, setDomain] = useState<string>('');
  const [domainData, setDomainData] = useState<DomainDataType>({
    markTagId: '',
    records: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<StepType>('connect');

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
        size={stepSizeMap[step] || 400}
        toggleFromOutside={openedModal}
        setToggleFromOutside={setOpenedModal}
        onClose={() => {
          setDomainData(null);
          setStep('connect');
          setDomain('');
        }}
        title={() =>
          ['register', 'verify']?.includes(step) ? (
            <Group className='p-2 rounded-lg border border-[#eaecf0] bg-white shadow-sm'>
              <FiCommand color={primary500} />
            </Group>
          ) : null
        }
        body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
      >
        {() => <></>}
      </Modal>
    </MarkTagContext.Provider>
  );
};

export default MarktagCreationsModals;
