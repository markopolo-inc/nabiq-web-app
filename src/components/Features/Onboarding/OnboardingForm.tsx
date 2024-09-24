import { useForm } from '@mantine/form';
import { Button, Select, Text, TextInput } from '@nabiq-ui';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useOnboardUserMutation } from 'store/onboarding/onboardingApi';
import { trimAllValuesOfObject } from 'utils/string.utils';

const OnboardingForm = () => {
  const [isLoadingUser, setIsLoading] = useState(false);
  const [onboardUser, { isLoading }] = useOnboardUserMutation();
  const form = useForm({
    initialValues: {
      businessName: '',
      industry: '',
      businessSize: '',
    },
    validate: {
      businessName: (value) => (value?.length === 0 ? 'Business name is required' : null),
      industry: (value) => (value?.length === 0 ? 'Industry is required' : null),
    },
  });

  const handleFormSubmit = async (values) => {
    setIsLoading(true);

    try {
      const user = await Auth.currentUserPoolUser();
      await onboardUser({
        cognitoId: user?.attributes?.sub,
        userName: user?.attributes?.['custom:fullName'] || 'Test',
        userEmail: user?.attributes?.email,
        ...values,
      });
    } catch (err) {
      toast.error('Failed to get user data!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32'>
      <form
        className='mx-auto lg:max-w-md lg:mx-0 space-y-12'
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Text className='display-sm font-medium text-gray-900'>Your business details</Text>

        <div className='space-y-5'>
          <TextInput
            required
            label='Business name'
            placeholder='Enter business name'
            {...form.getInputProps('businessName')}
          />
          <Select
            required
            data={[
              { value: 'apparel', label: 'Apparel' },
              { value: 'auto', label: 'Auto' },
              { value: 'b2b', label: 'B2B' },
              { value: 'beauty', label: 'Beauty' },
              { value: 'consumer_service', label: 'Consumer Service' },
              { value: 'finance_insurance', label: 'Finance Insurance' },
              { value: 'fitness', label: 'Fitness' },
              { value: 'home_improvement', label: 'Home Improvement' },
              { value: 'healthcare', label: 'Healthcare' },
              { value: 'industrial_services', label: 'Industrial Services' },
              { value: 'legal', label: 'Legal' },
              { value: 'retail', label: 'Retail' },
              { value: 'technology', label: 'Technology' },
              { value: 'travel_hospitality', label: 'Travel & Hospitality' },
            ]}
            label='Industry'
            placeholder='Select industry'
            {...form.getInputProps('industry')}
          />
          <Select
            required
            data={[
              { value: '1-10', label: '1-10 employees' },
              { value: '11-50', label: '11-50 employees' },
              { value: '51-200', label: '51-200 employees' },
              { value: '201-500', label: '201-500 employees' },
              { value: '500+', label: '500+ employees' },
            ]}
            label='Business size'
            placeholder='Select business size'
            {...form.getInputProps('businessSize')}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <Button variant='primary' type='submit' loading={isLoading || isLoadingUser}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
