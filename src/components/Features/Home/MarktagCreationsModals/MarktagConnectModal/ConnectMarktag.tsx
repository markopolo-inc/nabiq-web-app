import { FiCommand, FiPlus } from '@nabiq-icons';
import { Button, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useAppSelector } from 'src/store/hooks';
import { useLazyGetMarkopoloMarkTagsQuery } from 'src/store/marktag/markopoloMarktagApi';

const ConnectMarktag = () => {
  const navigate = useNavigate();
  const { gray600, gray900, primary500, success500 } = useGetColors();
  const { setStep } = useContext<MarktagContextType>(MarkTagContext);
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [getMarkTags] = useLazyGetMarkopoloMarkTagsQuery();
  const [_marktagList, setMarktagList] = useState<any[]>([]);

  useEffect(() => {
    if (connectedBrand?.resourceId) {
      getMarkTags(connectedBrand?.resourceId)
        .unwrap()
        .then((response) => {
          setMarktagList(response);
        });
    }
  }, [connectedBrand?.resourceId]);

  const cardData = [
    {
      icon: <FiCommand size={32} color={primary500} />,
      title: 'Existing marktag',
      description: 'Connect an existing marktag already created in Markpolo',
      buttonLabel: 'Connect',
      buttonAction: () => {
        navigate('/connect-marktag');
      },
    },
    {
      icon: <FiPlus size={32} color={success500} />,
      title: 'Create new',
      description: 'New to this? No worries, create a new marktag from scratch',
      buttonLabel: 'Create',
      buttonAction: () => {
        setStep('create');
      },
    },
  ];

  return (
    <Stack gap={64}>
      <Group justify='center' className='-mt-1'>
        <Stack align='center' gap={8}>
          <Text color={gray900} size='24px' weight={600}>
            Connect ‘Marktag’
          </Text>
          <Text color={gray600} size='16px'>
            Select how you want to connect
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

export default ConnectMarktag;
