import { useForm } from '@mantine/form';
import { Button, Select, Stack, TextInput } from '@nabiq-ui';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CompanyCreationInterface } from 'src/interfaces/company.interface';
import { useAppSelector } from 'src/store/hooks';
import { useOnboardUserMutation } from 'src/store/onboarding/onboardingApi';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

import { StepCount } from './StepCount';

export const CompanyCreation = () => {
  const { t } = useTranslation();
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
      businessName: (value) =>
        value?.length === 0 ? t('onboarding.business_name_required') : null,
      industry: (value) => (value?.length === 0 ? t('onboarding.industry_required') : null),
      businessSize: (value) =>
        value?.length === 0 ? t('onboarding.business_size_required') : null,
      website: (value) => (value?.length === 0 ? t('onboarding.website_required') : null),
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
          <p className='text-2xl font-semibold text-gray-950'>{t('onboarding_intro.title')}</p>
          <p className='font-normal text-gray-500'>{t('onboarding_intro.subtitle')}</p>
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
              label={t('onboarding_intro.business_name')}
              placeholder='e.g John’s company'
              disabled={!!companyId}
              required
              {...form.getInputProps('businessName')}
            />
            <Select
              label={t('onboarding_intro.industry')}
              placeholder='Select your industry'
              required
              data={[
                { value: 'apparel', label: t('settings.apparel') },
                { value: 'auto', label: t('settings.auto') },
                { value: 'b2b', label: t('settings.b2b') },
                { value: 'beauty', label: t('settings.beauty') },
                { value: 'consumer_service', label: t('settings.consumer_service') },
                { value: 'finance_insurance', label: t('settings.finance_insurance') },
                { value: 'fitness', label: t('settings.fitness') },
                { value: 'home_improvement', label: t('settings.home_improvement') },
                { value: 'healthcare', label: t('settings.healthcare') },
                { value: 'industrial_services', label: t('settings.industrial_services') },
                { value: 'legal', label: t('settings.legal') },
                { value: 'retail', label: t('settings.retail') },
                { value: 'technology', label: t('settings.technology') },
                { value: 'travel_hospitality', label: t('settings.travel_hospitality') },
              ]}
              disabled={!!companyId}
              {...form.getInputProps('industry')}
            />
            <Select
              data={[
                { value: '1-10', label: t('settings.employees_count', { size: '1-10' }) },
                { value: '11-50', label: t('settings.employees_count', { size: '11-50' }) },
                { value: '51-200', label: t('settings.employees_count', { size: '51-200' }) },
                { value: '201-500', label: t('settings.employees_count', { size: '201-500' }) },
                { value: '500+', label: t('settings.employees_count', { size: '500+' }) },
              ]}
              required
              label={t('onboarding_intro.business_size')}
              placeholder='Select your business size'
              disabled={!!companyId}
              {...form.getInputProps('businessSize')}
            />
            <TextInput
              required
              label={t('onboarding_intro.website')}
              placeholder='Paste your website URL here'
              disabled={!!companyId}
              description={form.errors.website ? null : t('onboarding_intro.usage_desc')}
              {...form.getInputProps('website')}
            />
          </div>
          {!companyId ? (
            <Button fullWidth type='submit' loading={isLoading || isLoadingUser}>
              {t('onboarding_intro.create_business')}
            </Button>
          ) : (
            <Button fullWidth type='button' loading={isLoading || isLoadingUser}>
              {t('onboarding.continue')}
            </Button>
          )}
        </Stack>
      </form>
    </Stack>
  );
};
