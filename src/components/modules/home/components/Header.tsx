import { FiAsset51 } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';

// import { useTranslation } from 'react-i18next';
// import { useAppSelector } from 'src/store/hooks';

export const Header: React.FC = () => {
  const { userName } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  return (
    <Stack gap={16} align='center'>
      <FiAsset51 />

      <Stack align='center' gap={4}>
        <h2 className='text-2xl font-semibold text-gray-900'>
          {t('home_page.welcome_message', { name: userName?.split(' ')[0] })}
        </h2>
        <p className='text-base font-normal text-gray-600'>{t('home_page.welcome_subtitle')}</p>
      </Stack>
    </Stack>
  );
};
