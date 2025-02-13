import { ArrowRight } from '@nabiq-icons';
import { Button, Group, Text } from '@nabiq-ui';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const OfferBanner: React.FC = () => {
  const navigate = useNavigate();
  const messages = [
    'Next 100 users → 40% off for the first 6 months 🚀',
    'Other users → 20% off for the first 6 months 🚀',
  ];
  const [currentMessage, setCurrentMessage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = () => {
    navigator.clipboard.writeText('PH2M100');
    toast.success('Promo code copied to clipboard!');
    navigate('/billing');
  };

  return (
    <Group
      justify='space-between'
      gap={20}
      mb={40}
      className='mx-auto px-6 py-3 bg-pink-300 rounded-3xl shadow-lg max-w-6xl'
    >
      <Text className='text-lg font-medium leading-loose text-gray-900 flex items-center'>
        🎉 Product Hunt Launch Promo code “PH2M100”
        <AnimatePresence mode='wait'>
          <motion.span
            key={currentMessage}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='ml-2'
          >
            {messages[currentMessage]}
          </motion.span>
        </AnimatePresence>
      </Text>
      <Button
        size='sm'
        variant='secondary-black'
        trailingIcon={<ArrowRight size={16} strokeWidth={1.2} color='#FFF' />}
        onClick={handleNavigate}
      >
        🚀 Grab discount
      </Button>
    </Group>
  );
};
