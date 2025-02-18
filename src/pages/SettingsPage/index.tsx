import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Avatar, Button, Dropzone, Grid, Group, Select, Stack, TextInput } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUpdateSettingMutation } from 'store/company/companyApi';
import { useAppSelector } from 'store/hooks';
import { uploadFile } from 'utils/fileUpload';
import { trimAllValuesOfObject } from 'utils/string.utils';

const Settings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const company = useAppSelector((state) => state.company);
  const user = useAppSelector((state) => state.user);

  const [updateSetting, { isLoading }] = useUpdateSettingMutation();
  const [hasChanges, setHasChanges] = useState(false);
  const [storedValues, setStoredValues] = useState({
    userName: user?.userName ?? '',
    userEmail: user?.userEmail ?? '',
    profilePhoto: company?.meta?.profilePhoto ?? '',
    businessName: company?.meta?.businessName ?? '',
    industry: company?.meta?.industry ?? '',
    businessSize: company?.meta?.businessSize ?? '',
  });

  const form = useForm({
    initialValues: {
      userName: user?.userName ?? '',
      userEmail: user?.userEmail ?? '',
      profilePhoto: company?.meta?.profilePhoto ?? '',
      businessName: company?.meta?.businessName ?? '',
      industry: company?.meta?.industry ?? '',
      businessSize: company?.meta?.businessSize ?? '',
    },
    validate: {
      userName: (value) => (value.length === 0 ? t('settings.name_required') : null),
      userEmail: (value) => (value.length === 0 ? t('settings.email_required') : null),
      businessName: (value) => (value?.length === 0 ? t('settings.business_name_required') : null),
      industry: (value) => (value?.length === 0 ? t('settings.industry_required') : null),
      businessSize: (value) => (value?.length === 0 ? t('settings.business_size_required') : null),
    },
  });

  useEffect(() => {
    setStoredValues({
      userName: user?.userName ?? '',
      userEmail: user?.userEmail ?? '',
      profilePhoto: company?.meta?.profilePhoto ?? '',
      businessName: company?.meta?.businessName ?? '',
      industry: company?.meta?.industry ?? '',
      businessSize: company?.meta?.businessSize ?? '',
    });
  }, [user, company]);

  useEffect(() => {
    setHasChanges(JSON.stringify(form.values) !== JSON.stringify(storedValues));
  }, [form.values, storedValues]);

  const handleFormSubmit = async (values) => {
    try {
      await updateSetting(values).unwrap();
      setHasChanges(false);
    } catch (error) {
      toast.error('Failed to update settings');
    }
  };

  useEffect(() => {
    if (!!files.length) {
      uploadFile(files[0], user.companyId).then((res) => {
        form.setFieldValue('profilePhoto', res);
      });
    }
  }, [files]);

  return (
    <Stack gap={64}>
      <HeaderTitle>{t('page_title.settings_title')}</HeaderTitle>

      <form
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Stack gap={64}>
          <Stack gap={64}>
            <div className='flex justify-between'>
              <Stack gap={4}>
                <p className='text-gray-900 font-semibold text-3xl'>{t('settings.title')}</p>
                <p className='text-gray-600 font-normal'>{t('settings.description')}</p>
              </Stack>
              <Group>
                <Button onClick={() => navigate('/')} variant='secondary' disabled={isLoading}>
                  {t('settings.cancel')}
                </Button>
                <Button type='submit' disabled={!hasChanges} loading={isLoading}>
                  {t('settings.save_changes')}
                </Button>
              </Group>
            </div>
          </Stack>

          <Stack gap={64}>
            <Grid>
              <Grid.Col span={6}>
                <p className='font-open text-md font-semibold leading-6 text-left text-gray-700'>
                  {t('settings.personal_details')}
                </p>
                <p className='text-gray-600 font-normal'>{t('settings.security_settings')}</p>
              </Grid.Col>
              <Grid.Col span={6}>
                <div className='space-y-5'>
                  <TextInput
                    label={t('settings.name')}
                    placeholder={t('settings.enter_name')}
                    {...form.getInputProps('userName')}
                  />

                  <TextInput
                    label={t('settings.email')}
                    placeholder={t('settings.enter_email')}
                    {...form.getInputProps('userEmail')}
                    disabled
                  />

                  <div className='flex flex-col gap-1.5'>
                    <p className='font-open text-sm font-medium leading-5 text-auto text-gray-700'>
                      {t('settings.avatar')}
                    </p>

                    <div className='flex gap-5'>
                      <div className='flex-none  w-16 h-16 rounded-full overflow-hidden'>
                        <Avatar
                          className='w-full h-full flex-none rounded-full focus:ring-4 ring-[#E0E0E0] !border-[0.75px] !border-gray-100 !shadow-sm'
                          src={form.getValues().profilePhoto}
                          alt='Avatar image'
                        />
                      </div>
                      <Dropzone className='w-full' onDrop={setFiles} />
                    </div>
                  </div>
                </div>
              </Grid.Col>
            </Grid>
          </Stack>

          <Stack gap={64}>
            <Grid>
              <Grid.Col span={6}>
                <p className='font-open text-md font-semibold leading-6 text-left text-gray-700'>
                  {t('settings.business_details')}
                </p>
                <p className='text-gray-600 font-normal'>{t('settings.business_desc')}</p>
              </Grid.Col>
              <Grid.Col span={6}>
                <div className='space-y-5'>
                  <TextInput
                    required
                    label={t('settings.business_name')}
                    placeholder={t('settings.enter_business_name')}
                    {...form.getInputProps('businessName')}
                  />
                  <Select
                    required
                    data={[
                      { label: t('settings.apparel'), value: 'apparel' },
                      { label: t('settings.auto'), value: 'auto' },
                      { label: t('settings.b2b'), value: 'b2b' },
                      { label: t('settings.beauty'), value: 'beauty' },
                      { label: t('settings.consumer_service'), value: 'consumer_service' },
                      { label: t('settings.finance_insurance'), value: 'finance_insurance' },
                      { label: t('settings.fitness'), value: 'fitness' },
                      { label: t('settings.home_improvement'), value: 'home_improvement' },
                      { label: t('settings.healthcare'), value: 'healthcare' },
                      { label: t('settings.industrial_services'), value: 'industrial_services' },
                      { label: t('settings.legal'), value: 'legal' },
                      { label: t('settings.retail'), value: 'retail' },
                      { label: t('settings.technology'), value: 'technology' },
                      { label: t('settings.travel_hospitality'), value: 'travel_hospitality' },
                    ]}
                    label={t('settings.industry')}
                    placeholder={t('settings.select_industry')}
                    {...form.getInputProps('industry')}
                  />
                  <Select
                    required
                    data={[
                      { value: '1-10', label: t('settings.employees_count', { size: '1-10' }) },
                      { value: '11-50', label: t('settings.employees_count', { size: '11-50' }) },
                      { value: '51-200', label: t('settings.employees_count', { size: '51-200' }) },
                      {
                        value: '201-500',
                        label: t('settings.employees_count', { size: '201-500' }),
                      },
                      { value: '500+', label: t('settings.employees_count', { size: '500+' }) },
                    ]}
                    label={t('settings.business_size')}
                    placeholder={t('settings.select_business_size')}
                    {...form.getInputProps('businessSize')}
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Settings;
