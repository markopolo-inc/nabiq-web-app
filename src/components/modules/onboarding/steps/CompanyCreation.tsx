import { useForm } from '@mantine/form';
import { Button, Select, Stack, TextInput } from '@nabiq-ui';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CompanyCreationInterface } from 'src/interfaces/company.interface';
import { useAppSelector } from 'src/store/hooks';
import { useOnboardUserMutation } from 'src/store/onboarding/onboardingApi';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

import { StepCount } from './StepCount';

export const CompanyCreation = () => {
  const [isLoadingUser, setIsLoading] = useState(false);
  const [onboardUser, { isLoading }] = useOnboardUserMutation();
  const { resourceId: companyId, companyName } = useAppSelector((state) => state.company);

  const form = useForm<CompanyCreationInterface>({
    initialValues: {
      businessName: '',
      industry: '',
      businessSize: '',
      website: '',
    },
    validate: {
      businessName: (value) => (value?.length === 0 ? 'Business name is required' : null),
      industry: (value) => (value?.length === 0 ? 'Industry is required' : null),
      businessSize: (value) => (value?.length === 0 ? 'Business size is required' : null),
      website: (value) => (value?.length === 0 ? 'Website is required' : null),
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
      setOnboardingStep('lead_database');
    } catch (err) {
      toast.error('Failed to get user data!', { id: 'user-data-error' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (companyId) {
      form.setValues({
        businessName: companyName,
      });
    }
  }, [companyId]);

  return (
    <Stack gap={64}>
      <Stack gap={32}>
        <StepCount step={1} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>Let’s get to know you</p>
          <p className='font-normal text-gray-500'>Help us understand your business better.</p>
        </Stack>
      </Stack>
      <form
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Stack gap={64}>
          <div className='space-y-5'>
            <TextInput
              label='Business Name'
              placeholder='e.g John’s company'
              disabled={!!companyId}
              required
              {...form.getInputProps('businessName')}
            />
            <Select
              label='Industry'
              placeholder='Select your industry'
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
              disabled={!!companyId}
              {...form.getInputProps('industry')}
            />
            <Select
              data={[
                { value: '1-10', label: '1-10 employees' },
                { value: '11-50', label: '11-50 employees' },
                { value: '51-200', label: '51-200 employees' },
                { value: '201-500', label: '201-500 employees' },
                { value: '500+', label: '500+ employees' },
              ]}
              required
              label='Business size'
              placeholder='Select your business size'
              disabled={!!companyId}
              {...form.getInputProps('businessSize')}
            />
            <TextInput
              required
              label='Website URL'
              placeholder='Paste your website URL here'
              disabled={!!companyId}
              description={
                form.errors.website
                  ? null
                  : `We'll use this to understand your business and create campaigns for you.`
              }
              {...form.getInputProps('website')}
            />
          </div>
          {!companyId ? (
            <Button fullWidth type='submit' loading={isLoading || isLoadingUser}>
              Create business
            </Button>
          ) : (
            <Button fullWidth type='button' loading={isLoading || isLoadingUser}>
              Continue
            </Button>
          )}
        </Stack>
      </form>
    </Stack>
  );
};
