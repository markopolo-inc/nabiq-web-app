import { FiChevronRight } from '@nabiq-icons';
import { Button, Group, Stack, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IntegrationCard } from 'src/components/modules/home';
import { integrations } from 'src/lib/home/integrations';

export const IntegrateChannelsCard: React.FC = () => {
  const navigate = useNavigate();
  const { primary600 } = useGetColors();
  const { t } = useTranslation();

  return (
    <Stack className='w-full px-6 py-[26px] flex flex-col gap-[42px]'>
      <Stack className='flex-row' justify='space-between'>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>
            {t('home_page.channels_integration')}
          </h4>
          <p className='font-normal text-sm text-gray-600'>{t('home_page.channels_suggestion')}</p>
        </Stack>

        <Button
          variant='link'
          trailingIcon={<FiChevronRight size={20} color={primary600} />}
          onClick={() => navigate('/integrations?selectedTab=email')}
        >
          {t('home_page.common_view_all')}
        </Button>
      </Stack>

      <Group gap={24} align='normal'>
        {integrations.map((integration) => (
          <IntegrationCard
            name={t(integration.name)}
            gateway={integration.gateway}
            id={integration.id}
            key={integration.id}
          />
        ))}
      </Group>
    </Stack>
  );
};
