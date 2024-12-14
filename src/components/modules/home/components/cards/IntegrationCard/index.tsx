import { FiIntegrationsIcon } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';
import React from 'react';
import { IIntegrationCard } from 'src/interfaces/integrations.interface.ts';

export const IntegrationCard: React.FC<IIntegrationCard> = ({ name }) => {
  return (
    <Stack
      align='center'
      gap={16}
      className='py-[15px] px-3 rounded-xl border border-gray-200 bg-white shadow-sm max-w-[104px] w-full'
    >
      <FiIntegrationsIcon name={name} size={32} />
      <p className='font-normal text-xs leading-[18px] text-gray-950'>{name}</p>
    </Stack>
  );
};
