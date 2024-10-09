import { FiCommand, FiPlus } from '@nabiq-icons';
import { Button, Group, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalBody = ({ setOpened, setOpenedCreateNew }) => {
  const navigate = useNavigate();
  const { gray600, gray900, primary500, success500 } = useGetColors();

  const cardData = [
    {
      icon: <FiCommand size={32} color={primary500} />,
      title: 'Existing marktag',
      description: 'Connect an existing marktag already created in Markpolo',
      buttonLabel: 'Connect',
      buttonAction: () => {
        setOpened(false);
        navigate('/connect-marktag');
      },
    },
    {
      icon: <FiPlus size={32} color={success500} />,
      title: 'Create new',
      description: 'New to this? No worries, create a new marktag from scratch',
      buttonLabel: 'Create',
      buttonAction: () => {
        setOpened(false);
        setOpenedCreateNew(true);
      },
    },
  ];

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <Text color={gray900} size='24px' weight={600}>
          Connect ‘Marktag’
        </Text>
        <Text color={gray600} size='16px'>
          Select how you want to connect
        </Text>
      </Stack>
      <Stack align='center'>
        <Group>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'
            >
              <div className='flex flex-col gap-3 items-center'>
                {card.icon}
                <Text color={gray900} size='18px' weight={600}>
                  {card.title}
                </Text>
              </div>
              <Text color={gray600} className='text-sm font-normal text-center'>
                {card.description}
              </Text>
              <Button variant='primary' onClick={card.buttonAction} fullWidth>
                {card.buttonLabel}
              </Button>
            </div>
          ))}
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
