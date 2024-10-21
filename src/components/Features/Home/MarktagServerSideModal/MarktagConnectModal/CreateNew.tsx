import { FiGlobe01, FiPhone01, FiServer01, FiShopify, FiWooCommerce } from '@nabiq-icons';
import { Button, Group, Text } from '@nabiq-ui';
import { toLower } from 'lodash';
import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

const CreateNew = () => {
  const { setMarktagType, setStep } = useContext<MarktagContextType>(MarkTagContext);

  const cardData = [
    {
      icon: <FiGlobe01 size={32} color='#697586' />,
      title: 'Website',
      description: 'Connect to your website',
      eligible: true,
    },
    {
      icon: <FiShopify size={32} />,
      title: 'Shopify',
      description: 'Add to your Shopify store',
      eligible: true,
    },
    {
      icon: <FiWooCommerce size={32} />,
      title: 'WooCommerce',
      description: 'Add to your Woocommmerce store',
      eligible: true,
    },
    {
      icon: <FiPhone01 size={32} color='#EE46BC' />,
      title: 'Mobile',
      description: 'Add to your native react mobile app',
      eligible: true,
    },
    {
      icon: <FiServer01 size={32} color='#2E90FA' />,
      title: 'Client-side',
      description: 'Add top your client-side',
      eligible: true,
    },
  ];

  return (
    <Group align='center'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='w-[300px] flex flex-col gap-6 border border-gray-200 rounded-xl bg-white shadow-sm p-6'
        >
          <div className='flex flex-col gap-3 items-center'>
            {card.icon}
            <Text className='text-lg font-semibold text-gray-900'>{card.title}</Text>
          </div>
          <Text className='text-sm font-normal text-gray-600 text-center'>{card.description}</Text>
          <Button
            variant='primary'
            fullWidth
            onClick={() => {
              setMarktagType(toLower(card.title));
              setStep('register');
            }}
          >
            Create
          </Button>
        </div>
      ))}
    </Group>
  );
};

export default CreateNew;
