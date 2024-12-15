import { FiChevronRight } from '@nabiq-icons';
import { Button, Group, Stack, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IntegrationCard } from 'src/components/modules/home';
import { IIntegrationCard } from 'src/interfaces/integrations.interface.ts';

const integrations: IIntegrationCard[] = [
  {
    id: 1,
    name: 'Klaviyo',
  },
  {
    id: 2,
    name: 'Postmark',
  },
  {
    id: 3,
    name: 'SendGrid',
  },
  {
    id: 4,
    name: 'Twillio',
  },
  {
    id: 5,
    name: 'Click Send',
  },
];
export const IntegrateChannels: React.FC = () => {
  const navigate = useNavigate();
  const { primary600 } = useGetColors();

  return (
    <Stack
      gap={42}
      className='absolute z-30 w-full rounded-[20px] border border-white backdrop-blur bg-white/48 p-6 shadow-lg'
    >
      <Stack className='flex-row' justify='space-between'>
        <Stack gap={4}>
          <h4 className='font-semibold text-xl leading-[30px] text-gray-950'>Integrate channels</h4>
          <p className='font-normal text-sm text-gray-600'>
            We suggest you to connect at least one channel.
          </p>
        </Stack>

        <Button
          variant='link'
          trailingIcon={<FiChevronRight size={20} color={primary600} />}
          onClick={() => navigate('/integrations')}
        >
          View all
        </Button>
      </Stack>

      <Group gap={24}>
        {integrations.map((integration) => (
          <IntegrationCard name={integration.name} id={integration.id} key={integration.id} />
        ))}
      </Group>
    </Stack>
  );
};
