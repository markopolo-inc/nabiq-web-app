import { FiConnectFirstMarkTag } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

type ConnectFirstMarkTagCardPropType = {
  onClick: () => void;
};

export const ConnectFirstMarkTagCard: React.FC<ConnectFirstMarkTagCardPropType> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Stack className={`flex-row w-full p-[39px] items-center justify-between gap-4`}>
      <Stack gap={40}>
        <Stack gap={4} className='max-w-[360px] w-full'>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>
            {t('home_page.marktag_connect')}
          </h4>
          <p className='font-normal text-sm text-gray-600'>{t('home_page.tracking_description')}</p>
        </Stack>

        <Button variant='primary' onClick={onClick}>
          {t('home_page.common_connect')}
        </Button>
      </Stack>

      <FiConnectFirstMarkTag style={{ flex: 'none' }} />
    </Stack>
  );
};
