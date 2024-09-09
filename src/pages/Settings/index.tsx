import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Button, Dropzone, Grid, Group, Image, Select, Stack, TextInput } from '@nabiq-ui';
import { useState } from 'react';
import HeaderTitle from 'src/layouts/HeaderTitle';
import { useAppSelector } from 'src/store/hooks.ts';

const Settings = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const user = useAppSelector((state) => state.user);
  const company = useAppSelector((state) => state.company);

  const form = useForm({
    initialValues: {
      userName: user.userName,
      userEmail: user.userEmail,
      profilePhoto: '',
      businessName: company.companyName,
      industry: '',
      businessSize: '',
    },
    validate: {
      userName: (value) => (value.length === 0 ? 'Name is required' : null),
      userEmail: (value) => (value.length === 0 ? 'Email is required' : null),
      businessName: (value) => (value?.length === 0 ? 'Business name is required' : null),
      industry: (value) => (value?.length === 0 ? 'Industry is required' : null),
    },
  });

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        className='w-16 h-16 rounded-full'
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Stack gap={64}>
      <HeaderTitle>Nabiq | Settings</HeaderTitle>

      <Stack gap={64}>
        <div className='flex justify-between'>
          <Stack gap={4}>
            <p className='text-gray-900 font-semibold text-3xl'>Settings</p>
            <p className='text-gray-600 font-normal'>Customize and configure your nabiq profile.</p>
          </Stack>
          <Group>
            <Button variant='secondary'>Cancel</Button>
            <Button>Save changes</Button>
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
                disabled
              />

              <div className='flex flex-col gap-1.5'>
                <p className='font-open text-sm font-medium leading-5 text-left text-gray-700'>
                  Avatar
                </p>

                <div className='flex gap-5'>
                  {!files.length ? (
                    <Image
                      className='w-16 h-16 rounded-full'
                      src='./img.png'
                      alt='no preview img'
                    />
                  ) : (
                    previews
                  )}

                  <Dropzone
                    className='w-full'
                    onDrop={setFiles}
                    // onReject={(_files) => console.log('rejected files', _files)}
                  />
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
                data={['Travel']}
                label='Industry'
                placeholder='Select industry'
                {...form.getInputProps('industry')}
              />
              <Select
                required
                data={['10-50']}
                label='Business size'
                placeholder='Select business size'
                {...form.getInputProps('businessSize')}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Settings;
