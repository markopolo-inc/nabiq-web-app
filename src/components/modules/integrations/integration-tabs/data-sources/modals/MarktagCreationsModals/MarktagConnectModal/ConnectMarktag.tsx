import { FiCommand, FiPlus } from '@nabiq-icons';
import { Button, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useAppSelector } from 'src/store/hooks';
import { useLazyGetMarkopoloMarkTagsQuery } from 'src/store/marktag/markopoloMarktagApi';

const ConnectMarktag = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gray600, gray900, primary500, success500 } = useGetColors();
  const { setStep, setDomain, setDomainData } = useContext<MarktagContextType>(MarkTagContext);
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [getMarkTags, { isLoading }] = useLazyGetMarkopoloMarkTagsQuery();
  const [marktagList, setMarktagList] = useState<any[]>([]);

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
      title: 'home_page.existing_marktag',
      description: 'home_page.connect_existing_marktag',
      buttonLabel: 'home_page.common_connect',
      buttonAction: () => {
        navigate('/connect-marktag');
      },
    },
    {
      icon: <FiPlus size={32} color={success500} />,
      title: 'home_page.create_new',
      description: 'home_page.new_to_this',
      buttonLabel: 'create_campaign.create',
      buttonAction: () => {
        if (marktagList?.length === 0) {
          setStep('create');
        } else {
          const lastItem = marktagList[marktagList?.length - 1];
          if (lastItem?.setupStatus !== 'pending') {
            setStep('create');
          } else {
            setStep('verify');
            setDomain(lastItem?.domain);
            const domainData = { ...lastItem, markTagId: lastItem.resourceId };
            setDomainData(domainData);
          }
        }
      },
    },
  ];

  return (
    <Stack gap={64}>
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
      <Group gap={20} className='px-4 pb-4'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='w-[280px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'
          >
            <div className='flex flex-col gap-3 items-center'>
              {card.icon}
              <Text color={gray900} size='18px' weight={600}>
                {t(card.title)}
              </Text>
            </div>
            <Text color={gray600} className='text-sm font-normal text-center'>
              {t(card.description)}
            </Text>
            <Button
              variant='primary'
              onClick={card.buttonAction}
              fullWidth
              loading={index === 0 ? false : isLoading}
            >
              {t(card.buttonLabel)}
            </Button>
          </div>
        ))}
      </Group>
    </Stack>
  );
};

export default ConnectMarktag;
