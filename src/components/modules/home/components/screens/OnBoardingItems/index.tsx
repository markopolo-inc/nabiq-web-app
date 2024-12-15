import { FiGreenCheckCircle } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';
import React, { useEffect, useState } from 'react';
import {
  ConnectFirstMarkTagCard,
  CreateFirstCampaignCard,
  IntegrateChannels,
} from 'src/components/modules/home';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { useAppSelector } from 'src/store/hooks.ts';

function isObjectNotEmpty(obj) {
  // Check if the object exists and is not null
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    // Check if the object has any own properties
    return Object.keys(obj).length > 0;
  }
  return false;
}

type OnBoardingItemsProps = {
  onClickShowGoalModal: () => void;
  onClickShowMarkTagModal: () => void;
};

export const OnBoardingItems: React.FC<OnBoardingItemsProps> = ({
  onClickShowGoalModal,
  onClickShowMarkTagModal,
}) => {
  const {
    resourceId: brandId,
    emailIntegrations,
    smsIntegrations,
    markTag,
  } = useAppSelector((state) => state.brand);

  const { data: campaignList } = useGetCampaignConfigsQuery(brandId);

  const [activeCard, setActiveCard] = useState<
    'integration_channel' | 'first_campaign' | 'mark_tag' | undefined
  >(undefined);

  const isIntegrationChannelDone = !(
    !isObjectNotEmpty(emailIntegrations) && !isObjectNotEmpty(smsIntegrations)
  );
  const isFirstCampaignDone = !!campaignList?.data?.length;
  const isMarkTagDone = Boolean(markTag?.resourceId);

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
    <Stack gap={24} className='flex-row w-full'>
      <Stack gap={16} className='max-w-[372px] w-full'>
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
        {activeCard === 'integration_channel' && <IntegrateChannels />}
        {activeCard === 'first_campaign' && (
          <CreateFirstCampaignCard
            isActive={activeCard === 'first_campaign'}
            onClick={onClickShowGoalModal}
          />
        )}
        {activeCard === 'mark_tag' && (
          <ConnectFirstMarkTagCard isActive={isMarkTagDone} onClick={onClickShowMarkTagModal} />
        )}
      </Stack>
    </Stack>
  );
};
