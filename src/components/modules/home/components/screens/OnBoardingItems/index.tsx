import { FiGreenCheckCircle } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';
import React from 'react';
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

  const isIntegratedChannel =
    !isObjectNotEmpty(emailIntegrations) && !isObjectNotEmpty(smsIntegrations);
  const isFirstCampaignDone = !!campaignList?.data?.length;
  const isConnectedMarkTag = !!markTag?.resourceId;

  const isIntegratedChannelCardActive = !isFirstCampaignDone && !isConnectedMarkTag;
  const isFirstCampaignCardActive = !isIntegratedChannel && !isConnectedMarkTag;
  const isMarkTagCardActive = !isIntegratedChannel && isFirstCampaignDone && !isConnectedMarkTag;

  return (
    <Stack gap={24} className='flex-row w-full'>
      <Stack gap={16} className='max-w-[372px] w-full'>
        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border ${isIntegratedChannelCardActive ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {isIntegratedChannel ? (
            <div className='text-base font-normal text-gray-950'>1</div>
          ) : (
            <FiGreenCheckCircle color='#fff' />
          )}
          <p className='text-base font-semibold text-gray-950'>Integrate channels</p>
        </Group>

        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border  ${isFirstCampaignCardActive ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {!isFirstCampaignDone ? (
            <div className='text-base font-normal text-gray-950'>2</div>
          ) : (
            <FiGreenCheckCircle color='#fff' />
          )}
          <p className='text-base font-semibold text-gray-950'>Create your first campaign</p>
        </Group>

        <Group
          gap={16}
          className={`p-[15px] rounded-xl bg-white border ${isMarkTagCardActive ? 'border-primary-600' : 'border-gray-200'}`}
        >
          {!isConnectedMarkTag ? (
            <div className='text-base font-normal text-gray-950'>3</div>
          ) : (
            <FiGreenCheckCircle color='#fff' />
          )}
          <p className='text-base font-semibold text-gray-950'>Connect MarkTag</p>
        </Group>
      </Stack>

      <Stack className='relative w-full min-h-[248px]'>
        {isIntegratedChannel && <IntegrateChannels />}
        {!isFirstCampaignDone && <CreateFirstCampaignCard onClick={onClickShowGoalModal} />}

        {!isIntegratedChannel && isFirstCampaignDone && (
          <ConnectFirstMarkTagCard
            isActive={isConnectedMarkTag}
            onClick={onClickShowMarkTagModal}
          />
        )}
      </Stack>
    </Stack>
  );
};
