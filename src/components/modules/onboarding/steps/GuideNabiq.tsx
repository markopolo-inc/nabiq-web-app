import { Button, Group, Stack, TextArea } from '@nabiq-ui';
import { useDispatch } from 'react-redux';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const GuideNabiq = () => {
  const dispatch = useDispatch();

  const handleSkipStep = () => {
    // TODO: set isOnboardingCompleted to true
  };

  return (
    <Stack gap={64} className='h-full' justify='space-between'>
      <Stack gap={32}>
        <StepCount step={3} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>Guide Nabiq</p>
          <p className='font-normal text-gray-500'>
            We’re ready to create a sample campaign! Share your ideas to help us tailor it to your
            needs.
          </p>
        </Stack>
      </Stack>
      <Stack className='min-w-[520px]'>
        <TextArea
          label='Instructions'
          placeholder='Tell us how to engage your leads—mention key products, discounts, or goals.'
        />
      </Stack>
      <Button fullWidth>Generate sample content</Button>
      <Group>
        <Button variant='link' onClick={() => dispatch(setOnboardingStep('lead_database'))}>
          Go back
        </Button>
        <Button variant='secondary' onClick={() => handleSkipStep()}>
          Skip this step
        </Button>
      </Group>
    </Stack>
  );
};
