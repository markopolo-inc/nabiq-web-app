import { GatewayLogo, Stack } from '@nabiq-ui';
import React from 'react';
import { GatewayType } from 'src/interfaces/brand.interface';
import { IIntegrationCard } from 'src/interfaces/modules/integrations';

export const IntegrationCard: React.FC<IIntegrationCard> = ({ name, gateway }) => {
  return (
    <Stack
      align='center'
      gap={16}
      className='py-[15px] px-3 rounded-xl border border-gray-200 bg-white shadow-sm max-w-[104px] w-full'
    >
      {gateway && <GatewayLogo app={gateway as GatewayType} width={32} />}
      <p className='font-normal text-xs leading-[18px] text-gray-950 truncate'>{name}</p>
    </Stack>
  );
};
