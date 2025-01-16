import { Envelope, FiCode, FiLifeBuoy01 } from '@nabiq-icons';
import { Button, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

const ChooseOption = () => {
  const { t } = useTranslation();
  const { gray600, gray900 } = useGetColors();
  const { setStep } = useContext<MarktagContextType>(MarkTagContext);

  const cardData = [
    {
      icon: <FiCode size={32} color='#0BA5EC' />,
      title: 'Install code manually',
      description: 'Setup everything by yourself',
      buttonLabel: 'onboarding.continue',
      buttonAction: () => {
        setStep('code');
      },
    },
    {
      icon: <Envelope size={32} color='#EE46BC' />,
      title: 'Email to developer',
      description: "Setup with developer's help",
      buttonLabel: 'onboarding.continue',
      buttonAction: () => {
        setStep('email');
      },
    },
    {
      icon: <FiLifeBuoy01 size={32} color='#669F2A' />,
      title: 'Get support',
      description: 'Get us to help you setup!',
      buttonLabel: 'onboarding.continue',
      buttonAction: () => {
        setStep('support');
      },
    },
  ];

  return (
    <Stack gap={64} align='center'>
      <Group justify='center' className='-mt-1'>
        <Stack align='center' gap={8}>
          <Text color={gray900} size='24px' weight={600}>
            {t('home_page.connect_marktag')}
          </Text>
          <Text color={gray600} size='16px'>
            {t('home_page.select_connection_method')}
          </Text>
        </Stack>
      </Group>

      <Group gap={20}>
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
              {t(card.buttonLabel)}
            </Button>
          </div>
        ))}
      </Group>
    </Stack>
  );
};

export default ChooseOption;
