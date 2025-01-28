import { Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, PasswordInput, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import NabiqLogo from 'src/assets/logo/logo-landmark.png';
import { trimAllValuesOfObject } from 'src/utils/string.utils.ts';

export const NewPass = () => {
  const { t } = useTranslation();

  const form = useForm({
    initialValues: {
      password: '',
    },
    validate: {
      password: (value) => (value.length === 0 ? t('signup.password_required') : null),
    },
  });

  const handleFormSubmit = async (values) => {
    console.log({ values });
  };

  return (
    <>
      <Image src={NabiqLogo} alt='Nabiq' className='w-8 h-8' />
      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>Reset password</p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          Enter a new password for Nabiq.
        </p>
      </Stack>
      <form
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
        className='flex flex-col gap-6 w-full'
      >
        <PasswordInput
          label='New password'
          placeholder='Enter your new password'
          {...form.getInputProps('password')}
        />

        <Stack gap={16}>
          <Button type='submit' fullWidth>
            Reset password
          </Button>
        </Stack>
      </form>
    </>
  );
};
