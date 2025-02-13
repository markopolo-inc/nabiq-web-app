import { FiChevronRight } from '@nabiq-icons';
import { Button, Group, Stack, useGetColors } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IntegrationCard } from 'src/components/modules/home';

export const IntegrateDataSourceCard: React.FC = () => {
  const navigate = useNavigate();
  const { primary600 } = useGetColors();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className='absolute z-40 w-full rounded-[20px] border border-white backdrop-blur-lg bg-white/48 px-6 py-[26px] shadow-lg flex flex-col gap-[42px]'
    >
      <Stack className='flex-row' justify='space-between'>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>
            {t('home_page.integrate_data_source')}
          </h4>
          <p className='font-normal text-sm text-gray-600'>
            {t('home_page.data_source_suggestion')}
          </p>
        </Stack>

        <Button
          variant='link'
          trailingIcon={<FiChevronRight size={20} color={primary600} />}
          onClick={() => navigate('/integrations?selectedTab=datasource')}
        >
          {t('home_page.common_view_all')}
        </Button>
      </Stack>

      <Group gap={24} align='normal'>
        {[
          {
            name: 'home_page.hubspot',
            gateway: 'hubspot',
            id: 1,
          },
          {
            name: 'home_page.salesforce',
            gateway: 'salesforce',
            id: 2,
          },
          {
            name: 'home_page.shopify',
            gateway: 'shopify',
            id: 3,
          },
          {
            name: 'home_page.salla',
            gateway: 'salla',
            id: 4,
          },
        ].map((integration) => (
          <IntegrationCard
            name={t(integration.name)}
            gateway={integration.gateway}
            id={integration.id}
            key={integration.id}
          />
        ))}
      </Group>
    </motion.div>
  );
};
