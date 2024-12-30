import { FiChevronRight } from '@nabiq-icons';
import { Button, Group, Stack, useGetColors } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IntegrationCard } from 'src/components/modules/home';
import { integrations } from 'src/lib/home/integrations';

export const IntegrateChannels: React.FC = () => {
  const navigate = useNavigate();
  const { primary600 } = useGetColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className='absolute z-30 w-full rounded-[20px] border border-white backdrop-blur bg-white/48 px-6 py-[26px] shadow-lg flex flex-col gap-[42px]'
    >
      <Stack className='flex-row' justify='space-between'>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>Integrate channels</h4>
          <p className='font-normal text-sm text-gray-600'>
            We suggest you to connect at least one channel.
          </p>
        </Stack>

        <Button
          variant='link'
          trailingIcon={<FiChevronRight size={20} color={primary600} />}
          onClick={() => navigate('/integrations?selectedTab=email')}
        >
          View all
        </Button>
      </Stack>

      <Group gap={24}>
        {integrations.map((integration) => (
          <IntegrationCard
            name={integration.name}
            gateway={integration.gateway}
            id={integration.id}
            key={integration.id}
          />
        ))}
      </Group>
    </motion.div>
  );
};
