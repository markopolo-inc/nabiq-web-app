import { FiCreateFirstCampaign, FiPlus02 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';

type CreateFirstCampaignCardPropsType = {
  onClick: () => void;
};

export const CreateFirstCampaignCard: React.FC<CreateFirstCampaignCardPropsType> = ({
  onClick,
}) => {
  return (
    <Stack
      gap={160}
      align='center'
      className='absolute top-4 left-[calc(0%+16px)] z-20 flex-row w-[calc(100%-32px)] rounded-[20px] border border-white backdrop-blur bg-white/48 p-[39px]'
    >
      <Stack gap={40}>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>
            Create your first campaign
          </h4>
          <p className='font-normal text-sm text-gray-600'>
            Launch a campaign to connect with your audience in a way that feels personal and real!{' '}
          </p>
        </Stack>

        <Button
          variant='primary'
          leadingIcon={<FiPlus02 size={20} color='white' />}
          onClick={onClick}
        >
          Create
        </Button>
      </Stack>

      <FiCreateFirstCampaign style={{ flex: 'none' }} />
    </Stack>
  );
};
