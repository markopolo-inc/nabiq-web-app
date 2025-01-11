import { FiCreateFirstCampaign, FiPlus02 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

type CreateFirstCampaignCardPropsType = {
  onClick: () => void;
  isActive: boolean;
};

export const CreateFirstCampaignCard: React.FC<CreateFirstCampaignCardPropsType> = ({
  onClick,
  isActive,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`absolute ${isActive ? 'top-0 left-0 z-20 w-full' : 'top-4 left-[calc(0%+16px)] z-20 w-[calc(100%-32px)]'} flex-row justify-between rounded-[20px] border border-white backdrop-blur-lg bg-white/48 p-[39px] shadow-lg flex gap-4 items-center`}
    >
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
    </motion.div>
  );
};
