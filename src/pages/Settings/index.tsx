import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Button, Dropzone, Grid, Group, Image, Select, Stack, TextInput } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from 'src/layouts/HeaderTitle';
import { useUpdateSettingMutation } from 'src/store/company/companyApi.ts';
import { useAppSelector } from 'src/store/hooks.ts';
import { uploadFile } from 'src/utils/fileUpload.ts';
import { trimAllValuesOfObject } from 'src/utils/string.utils.ts';

const Settings = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const company = useAppSelector((state) => state.company);
  const user = useAppSelector((state) => state.user);

  const [updateSetting] = useUpdateSettingMutation();

  const form = useForm({
    initialValues: {
      userName: company?.meta?.userName ?? '',
      userEmail: company?.meta?.userEmail ?? '',
      profilePhoto: company?.meta?.profilePhoto ?? '',
      businessName: company?.meta?.businessName ?? '',
      industry: company?.meta?.industry ?? '',
      businessSize: company?.meta?.businessSize ?? '',
    },
    validate: {
      userName: (value) => (value.length === 0 ? 'Name is required' : null),
      userEmail: (value) => (value.length === 0 ? 'Email is required' : null),
      businessName: (value) => (value?.length === 0 ? 'Business name is required' : null),
      industry: (value) => (value?.length === 0 ? 'Industry is required' : null),
      businessSize: (value) => (value?.length === 0 ? 'Business Size is required' : null),
    },
  });

  const handleFormSubmit = (values) => {
    updateSetting(values).unwrap();
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
      <HeaderTitle>Nabiq | Settings</HeaderTitle>

      <form
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Stack gap={64}>
          <Stack gap={64}>
            <div className='flex justify-between'>
              <Stack gap={4}>
                <p className='text-gray-900 font-semibold text-3xl'>Settings</p>
                <p className='text-gray-600 font-normal'>
                  Customize and configure your nabiq profile.
                </p>
              </Stack>
              <Group>
                <Button onClick={() => navigate('/')} variant='secondary'>
                  Cancel
                </Button>
                <Button type='submit'>Save changes</Button>
              </Group>
            </div>
          </Stack>

          <Stack gap={64}>
            <Grid>
              <Grid.Col span={6}>
                <p className='font-open text-md font-semibold leading-6 text-left text-gray-700'>
                  Personal details
                </p>
                <p className='text-gray-600 font-normal'>Your personal and security settings.</p>
              </Grid.Col>
              <Grid.Col span={6}>
                <div className='space-y-5'>
                  <TextInput
                    label='Name'
                    placeholder='Enter your name'
                    {...form.getInputProps('userName')}
                  />

                  <TextInput
                    label='Email'
                    placeholder='Enter your email'
                    {...form.getInputProps('userEmail')}
                  />

                  <div className='flex flex-col gap-1.5'>
                    <p className='font-open text-sm font-medium leading-5 text-left text-gray-700'>
                      Avatar
                    </p>

                    <div className='flex gap-5'>
                      <Image
                        className='w-16 h-16 rounded-full'
                        src={form.getValues().profilePhoto}
                        alt='Avatar image'
                      />
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
                  Business details
                </p>
                <p className='text-gray-600 font-normal'>Your business details.</p>
              </Grid.Col>
              <Grid.Col span={6}>
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
              </Grid.Col>
            </Grid>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Settings;
