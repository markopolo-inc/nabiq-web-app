import { FiDatabase01, FiShoppingBag02 } from '@nabiq-icons';
import { Accordion, Button, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { useDispatch } from 'react-redux';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const LeadsDatabase = () => {
  const dispatch = useDispatch();
  return (
    <Stack gap={64}>
      <Stack gap={32}>
        <StepCount step={2} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>Sync your lead database</p>
          <p className='font-normal text-gray-500'>
            Connect your CRM or store to instantly create campaigns for your leads.
          </p>
        </Stack>
      </Stack>
      <Stack gap={16} className='min-w-[520px]'>
        <Accordion
          title='Sync from marketplace'
          icon={<FiShoppingBag02 size={20} color='#697586' />}
        >
          <Stack gap={24}>
            <p className='text-sm text-gray-600'>
              Subjects, participants and timestamps will be visible to your team, Content won’t be
              visible unless shared.
            </p>
            <Group className='p-1'>
              <Button leadingIcon={<GatewayLogo app='shopify' width={20} />}>
                Connect Shopify
              </Button>
              <Button
                variant='secondary-black'
                leadingIcon={<GatewayLogo app='salla' width={20} />}
              >
                Connect Salla
              </Button>
            </Group>
          </Stack>
        </Accordion>
        <Accordion title='Sync from marketplace' icon={<FiDatabase01 size={20} color='#697586' />}>
          <Stack gap={24}>
            <p className='text-sm text-gray-600'>
              Participants and timestamps will be visible to your team. Subject lines and contents
              won’t be visible unless shared.
            </p>
            <Group className='p-1'>
              <Button leadingIcon={<GatewayLogo app='hubspot' width={20} />}>
                Connect Hubspot
              </Button>
              <Button
                variant='secondary-black'
                leadingIcon={<GatewayLogo app='salesforce' width={20} />}
              >
                Connect Salesforce
              </Button>
            </Group>
          </Stack>
        </Accordion>
      </Stack>
      <Button
        fullWidth
        onClick={() => {
          dispatch(setOnboardingStep('guide_nabiq'));
        }}
      >
        Continue
      </Button>
    </Stack>
  );
};
