import { Stack } from '@nabiq-ui';
import React from 'react';
import { QuickActionsCard } from 'src/components/modules/home';

const quick_actions: { id: number; header: string; subHeader: string; medium: string }[] = [
  {
    id: 1,
    header: 'Sync lead databases',
    subHeader: 'Capture and track your marketing data.',
    medium: 'ri_code_ai_fill',
  },
  {
    id: 2,
    header: 'Create a campaign',
    subHeader: 'Launch a campaign to connect with your audience.',
    medium: 'ri_megaphone_fill',
  },
  {
    id: 3,
    header: 'AI constitution',
    subHeader: 'Help us make AI smarter and safer by reducing bias.',
    medium: 'ri_shield_fill',
  },
  {
    id: 4,
    header: 'Integrate channels',
    subHeader: 'Send marketing campaigns to your audience.',
    medium: 'ri_flashlight_fill',
  },
];

export const QuickActions: React.FC = () => {
  return (
    <Stack gap={12}>
      <p className='text-gray-600 text-base font-medium'>Quick actions</p>
      <Stack className='grid grid-cols-1 md:grid-cols-2' gap={24}>
        {quick_actions?.map((item) => (
          <QuickActionsCard
            medium={item.medium}
            key={item.id}
            header={item.header}
            subHeader={item.header}
          />
        ))}
      </Stack>
    </Stack>
  );
};
