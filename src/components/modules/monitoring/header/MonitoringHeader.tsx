import { Stack } from '@nabiq-ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const MonitoringHeader: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap={4}>
      <p className='text-gray-900 font-semibold text-3xl'>{t('monitoring.title')}</p>
      <p className='text-gray-600 font-normal text-base'>{t('monitoring.description')}</p>
    </Stack>
  );
};
