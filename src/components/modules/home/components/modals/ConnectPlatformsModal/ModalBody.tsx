import { FiCommand, FiPlus } from '@nabiq-icons';
import { Button, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

export const ModalBody = ({ setOpened }: { setOpened: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const { gray600, gray900, primary500, success500 } = useGetColors();

  const cardData = [
    {
      icon: <FiCommand size={32} color={primary500} />,
      title: 'Existing brand',
      description: 'Connect an existing brand already created in Markpolo',
      buttonLabel: 'Connect',
      buttonAction: () => {
        navigate('/connect-platforms');
        setOpened(false);
      },
    },
    {
      icon: <FiPlus size={32} color={success500} />,
      title: 'Create new',
      description: 'New to this? No worries, create a new platform from scratch',
      buttonLabel: 'Create',
      buttonAction: () => {
        navigate('/connected-platforms');
        setOpened(false);
      },
    },
  ];

  return (
    <Stack gap={64}>
      <Group justify='center'>
        <Stack align='center' gap={8}>
          <Text color={gray900} size='24px' weight={600}>
            Connect Platforms
          </Text>
          <Text color={gray600} size='16px'>
            Select how you want to connect your platforms
          </Text>
        </Stack>
      </Group>
      <Group gap={20} className='px-4 pb-4'>
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
  );
};
