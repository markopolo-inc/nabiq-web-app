import { RiCodeAiFill, RiFlashLight, RiMegaPhoneFill, RiShieldFill } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';
import React from 'react';

type QuickActionsProps = {
  header: string;
  subHeader: string;
  medium: string;
  onClick: () => void;
};

export const QuickActionsCard: React.FC<QuickActionsProps> = ({
  header,
  subHeader,
  medium = undefined,
  onClick,
}) => {
  return (
    <Stack
      gap={26}
      className='flex-row rounded-[20px] border border-white bg-white/48 backdrop-blur py-4 px-6 shadow-lg cursor-pointer'
      onClick={() => onClick && onClick()}
    >
      {medium === 'ri_code_ai_fill' && <RiCodeAiFill />}
      {medium === 'ri_megaphone_fill' && <RiMegaPhoneFill />}
      {medium === 'ri_shield_fill' && <RiShieldFill />}
      {medium === 'ri_flashlight_fill' && <RiFlashLight />}

      <Stack gap={4}>
        <p className='text-gray-900 text-lg font-semibold'>{header}</p>
        <p className='text-gray-600 text-sm font-normal'>{subHeader}</p>
      </Stack>
    </Stack>
  );
};
