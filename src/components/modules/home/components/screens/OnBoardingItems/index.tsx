import { FiGreenCheckCircle } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';
import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ConnectFirstMarkTagCard,
  CreateFirstCampaignCard,
  IntegrateChannelsCard,
  IntegrateDataSourceCard,
} from 'src/components/modules/home';

type OnBoardingItemsProps = {
  onClickShowGoalModal: () => void;
  onClickShowMarkTagModal: () => void;
  isIntegrationChannelDone: boolean;
  isFirstCampaignDone: boolean;
  isMarkTagDone: boolean;
  isDataSourceConnected: boolean;
};

export const OnBoardingItems: React.FC<OnBoardingItemsProps> = ({
  onClickShowGoalModal,
  onClickShowMarkTagModal,
  isIntegrationChannelDone,
  isDataSourceConnected,
  isFirstCampaignDone,
  isMarkTagDone,
}) => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<
    'integrate_datasource' | 'integration_channel' | 'first_campaign' | 'mark_tag'
  >('integrate_datasource');

  useEffect(() => {
    if (!isDataSourceConnected) {
      setActiveCard('integrate_datasource');
    } else if (!isIntegrationChannelDone) {
      setActiveCard('integration_channel');
    } else if (!isFirstCampaignDone) {
      setActiveCard('first_campaign');
    } else if (!isMarkTagDone) {
      setActiveCard('mark_tag');
    }
  }, [isDataSourceConnected, isIntegrationChannelDone, isFirstCampaignDone, isMarkTagDone]);

  const items = [
    {
      id: 'integrate_datasource',
      step: 1,
      isDone: isDataSourceConnected,
      label: t('home_page.integrate_datasource'),
      card: <IntegrateDataSourceCard />,
    },
    {
      id: 'integration_channel',
      step: 2,
      isDone: isIntegrationChannelDone,
      label: t('home_page.channels_integration'),
      card: <IntegrateChannelsCard />,
    },
    {
      id: 'first_campaign',
      step: 3,
      isDone: isFirstCampaignDone,
      label: t('home_page.campaign_create_first'),
      card: <CreateFirstCampaignCard onClick={onClickShowGoalModal} />,
    },
    {
      id: 'mark_tag',
      step: 4,
      isDone: isMarkTagDone,
      label: t('home_page.marktag_connect'),
      card: <ConnectFirstMarkTagCard onClick={onClickShowMarkTagModal} />,
    },
  ];

  const displayCards = items?.filter((item) => !Boolean(item.isDone));

  return (
    <Stack gap={24} className='flex-col lg:flex-row w-full mt-8'>
      <Stack gap={16} className='lg:max-w-[372px] w-full'>
        {items.map(({ id, step, isDone, label }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (length - index) * 0.2 }}
          >
            <Group
              key={id}
              gap={16}
              className={`p-[15px] rounded-xl bg-white border ${
                activeCard === id ? 'border-primary-600' : 'border-gray-200'
              }`}
            >
              {isDone ? (
                <FiGreenCheckCircle color='#079455' />
              ) : (
                <div className='text-base font-normal text-gray-950'>{step}</div>
              )}
              <p className='text-base font-semibold text-gray-950'>{label}</p>
            </Group>
          </motion.div>
        ))}
      </Stack>

      <Stack className='relative w-full min-h-[248px] pb-[32px]'>
        {displayCards.map((item, index) => {
          const length = displayCards.length;
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (length - index) * 0.3 }}
              key={item.id}
              className={cn(
                'absolute rounded-[20px] border border-white backdrop-blur-lg bg-white/48 shadow-lg',
              )}
              style={{
                width: `calc(100% - ${index * 32}px)`,
                top: `${index * 16}px`,
                left: `${index * 16}px`,
                zIndex: length - index,
              }}
            >
              {item.card}
            </motion.div>
          );
        })}
        {/* {!isDataSourceConnected && <IntegrateDataSourceCard />}
        {!isIntegrationChannelDone && <IntegrateChannelsCard />}
        {!isFirstCampaignDone && (
          <CreateFirstCampaignCard
            isActive={Boolean(activeCard === 'first_campaign')}
            onClick={onClickShowGoalModal}
          />
        )}
        {!isMarkTagDone && (
          <ConnectFirstMarkTagCard
            isIntegratedChannel={isIntegrationChannelDone}
            isActive={Boolean(activeCard === 'mark_tag')}
            onClick={onClickShowMarkTagModal}
          />
        )} */}
      </Stack>
    </Stack>
  );
};
