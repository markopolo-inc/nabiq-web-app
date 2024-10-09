import { Envelope, FiCode, FiLifeBuoy01 } from '@nabiq-icons';
import { Button, Group, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
import React from 'react';

const ModalBody = ({ setOpened, setShowCodeMarktagModal, setShowGuidedMarktagModal }) => {
  const { gray600, gray900 } = useGetColors();

  const cardData = [
    {
      icon: <FiCode size={32} color='#0BA5EC' />,
      title: 'Install code manually',
      description: 'Setup everything by yourself',
      buttonLabel: 'Continue',
      buttonAction: () => {
        setOpened(false);
        setShowCodeMarktagModal(true);
      },
    },
    {
      icon: <Envelope size={32} color='#EE46BC' />,
      title: 'Email to developer',
      description: "Setup with developer's help",
      buttonLabel: 'Continue',
      buttonAction: () => {
        setOpened(false);
      },
    },
    {
      icon: <FiLifeBuoy01 size={32} color='#669F2A' />,
      title: 'Get support',
      description: 'Get us to help you setup!',
      buttonLabel: 'Continue',
      buttonAction: () => {
        setOpened(false);
        setShowGuidedMarktagModal(true);
      },
    },
  ];

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <Text color={gray900} size='24px' weight={600}>
          Create new ‘Marktag’
        </Text>
        <Text color={gray600} size='16px'>
          Select what platform you want to connect to
        </Text>
      </Stack>

      <Group justify='center'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'
          >
            <div className='flex flex-col gap-3 items-center'>
              {card.icon}
              <Text className='text-lg font-semibold text-gray-900'>{card.title}</Text>
            </div>
            <Text className='text-sm font-normal text-gray-600 text-center'>
              {card.description}
            </Text>
            <Button variant='primary' fullWidth onClick={card.buttonAction}>
              {card.buttonLabel}
            </Button>
          </div>
        ))}
      </Group>
    </Stack>
  );
};

const CreateNewMarktagModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCodeMarktagModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowGuidedMarktagModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal, setShowCodeMarktagModal, setShowGuidedMarktagModal }) => {
  return (
    <Modal
      zIndex={999}
      size='fit-content'
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => (
        <ModalBody
          setOpened={setOpened}
          setShowCodeMarktagModal={setShowCodeMarktagModal}
          setShowGuidedMarktagModal={setShowGuidedMarktagModal}
        />
      )}
    >
      {() => <></>}
    </Modal>
  );
};

export default CreateNewMarktagModal;
