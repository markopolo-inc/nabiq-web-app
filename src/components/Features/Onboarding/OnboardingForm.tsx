import { Button, Select, Text, TextInput } from '@nabiq-ui';

const OnboardingForm = () => {
  return (
    <div className='px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32'>
      <div className='mx-auto lg:max-w-md lg:mx-0 space-y-12'>
        <Text className='display-sm font-medium text-gray-900'>
          Your business details
        </Text>

        <div className='space-y-5'>
          <TextInput label='Business name' placeholder='Enter business name' />
          <Select label='Industry' placeholder='Select industry' />
          <Select label='Business size' placeholder='Select business size' />
        </div>

        <div className='flex flex-col gap-4'>
          <Button variant='primary'>Continue</Button>
          <Button variant='tertiary'>Skip</Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
