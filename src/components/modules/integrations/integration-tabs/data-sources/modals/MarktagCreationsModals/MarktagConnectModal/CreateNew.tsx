import { FiGlobe01, FiPhone01, FiServer01, FiShopify, FiWooCommerce } from '@nabiq-icons';
import { Button, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { toLower } from 'lodash';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

const CreateNew = () => {
  const { t } = useTranslation();
  const { gray600, gray900 } = useGetColors();
  const { setMarktagType, setStep } = useContext<MarktagContextType>(MarkTagContext);

  const cardData = [
    {
      icon: <FiGlobe01 size={32} color='#697586' />,
      title: 'home_page.website',
      description: 'home_page.connect_website',
      eligible: true,
    },
    {
      icon: <FiShopify size={32} />,
      title: 'home_page.shopify',
      description: 'home_page.add_to_shopify',
      eligible: true,
    },
    {
      icon: <FiWooCommerce size={32} />,
      title: 'home_page.woocommerce',
      description: 'home_page.add_to_woocommerce',
      eligible: true,
    },
    {
      icon: <FiPhone01 size={32} color='#EE46BC' />,
      title: 'home_page.mobile',
      description: 'home_page.add_to_mobile_app',
      eligible: true,
    },
    {
      icon: <FiServer01 size={32} color='#2E90FA' />,
      title: 'home_page.client_side',
      description: 'home_page.add_to_client_side',
      eligible: true,
    },
  ];

  return (
    <Stack gap={64}>
      <Group justify='center' className='-mt-1'>
        <Stack align='center' gap={8}>
          <Text color={gray900} size='24px' weight={600}>
            {t('home_page.create_new_marktag')}
          </Text>
          <Text color={gray600} size='16px'>
            {t('home_page.select_platform')}
          </Text>
        </Stack>
      </Group>
      <Group gap={20}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='w-[300px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'
          >
            <div className='flex flex-col gap-3 items-center'>
              {card.icon}
              <Text className='text-lg font-semibold text-gray-900'>{t(card.title)}</Text>
            </div>
            <Text className='text-sm font-normal text-gray-600 text-center'>
              {t(card.description)}
            </Text>
            <Button
              variant='primary'
              fullWidth
              onClick={() => {
                // @TODO: will be bug for translation
                setMarktagType(toLower(t(card.title)));
                setStep('register');
              }}
            >
              {t('create_campaign.create')}
            </Button>
          </div>
        ))}
      </Group>
    </Stack>
  );
};

export default CreateNew;
