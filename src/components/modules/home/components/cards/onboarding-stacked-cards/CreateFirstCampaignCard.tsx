import { FiCreateFirstCampaign, FiPlus02 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

type CreateFirstCampaignCardPropsType = {
  onClick: () => void;
};

export const CreateFirstCampaignCard: React.FC<CreateFirstCampaignCardPropsType> = ({
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex-row w-full justify-between p-[39px] flex gap-4 items-center`}>
      <Stack gap={40}>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>
            {t('home_page.campaign_create_first')}
          </h4>
          <p className='font-normal text-sm text-gray-600'>{t('home_page.campaign_launch_cta')} </p>
        </Stack>

        <Button
          variant='primary'
          leadingIcon={<FiPlus02 size={20} color='white' />}
          onClick={onClick}
        >
          {t('home_page.common_create')}
        </Button>
      </Stack>

      <FiCreateFirstCampaign style={{ flex: 'none' }} />
    </div>
  );
};
