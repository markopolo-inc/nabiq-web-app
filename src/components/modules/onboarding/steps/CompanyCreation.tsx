import { Button, Select, Stack, TextInput } from '@nabiq-ui';
import { useAppDispatch } from 'src/store/hooks';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';

export const CompanyCreation = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack gap={64}>
      <Stack gap={8}>
        <p className='text-2xl font-semibold text-gray-950'>Let’s get to know you</p>
        <p className='font-normal text-gray-500'>Help us understand your business better.</p>
      </Stack>
      <div className='space-y-5'>
        <TextInput label='Business Name' placeholder='e.g John’s company' />
        <Select label='Industry' placeholder='Select your industry' />
        <Select label='Business size' placeholder='Select your business size' />
        <TextInput
          label='Website URL'
          placeholder='Paste your website URL here'
          description={`We'll use this to understand your business and create campaigns for you.`}
        />
      </div>
      <Button onClick={() => dispatch(setOnboardingStep('lead_database'))} fullWidth>
        Create business
      </Button>
    </Stack>
  );
};
