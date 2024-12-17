import { FiGreenCheckCircle } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';
import React, { useEffect, useState } from 'react';
import {
  ConnectFirstMarkTagCard,
  CreateFirstCampaignCard,
  IntegrateChannels,
} from 'src/components/modules/home';

type OnBoardingItemsProps = {
  onClickShowGoalModal: () => void;
  onClickShowMarkTagModal: () => void;
  isIntegrationChannelDone: boolean;
  isFirstCampaignDone: boolean;
  isMarkTagDone: boolean;
};

export const OnBoardingItems: React.FC<OnBoardingItemsProps> = ({
  onClickShowGoalModal,
  onClickShowMarkTagModal,
  isIntegrationChannelDone,
  isFirstCampaignDone,
  isMarkTagDone,
}) => {
  const [activeCard, setActiveCard] = useState<
    'integration_channel' | 'first_campaign' | 'mark_tag'
  >('integration_channel');

  useEffect(() => {
    if (!isIntegrationChannelDone) {
      setActiveCard('integration_channel');
      return;
    }
    if (!isFirstCampaignDone) {
      setActiveCard('first_campaign');
      return;
    }
    if (!isMarkTagDone) {
      setActiveCard('mark_tag');
    }
  }, []);

  return (
    <Stack gap={24} className='flex-col lg:flex-row w-full'>
      <Stack gap={16} className='lg:max-w-[372px] w-full'>
        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border ${activeCard === 'integration_channel' ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {isIntegrationChannelDone ? (
            <FiGreenCheckCircle color='#fff' />
          ) : (
            <div className='text-base font-normal text-gray-950'>1</div>
          )}
          <p className='text-base font-semibold text-gray-950'>Integrate channels</p>
        </Group>

        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border  ${activeCard === 'first_campaign' ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {isFirstCampaignDone ? (
            <FiGreenCheckCircle color='#fff' />
          ) : (
            <div className='text-base font-normal text-gray-950'>2</div>
          )}
          <p className='text-base font-semibold text-gray-950'>Create your first campaign</p>
        </Group>

        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border ${activeCard === 'mark_tag' ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {isMarkTagDone ? (
            <FiGreenCheckCircle color='#fff' />
          ) : (
            <div className='text-base font-normal text-gray-950'>3</div>
          )}
          <p className='text-base font-semibold text-gray-950'>Connect MarkTag</p>
        </Group>
      </Stack>

      <Stack className='relative w-full min-h-[248px]'>
        {!isIntegrationChannelDone && <IntegrateChannels />}
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
        )}
      </Stack>
    </Stack>
  );
};
