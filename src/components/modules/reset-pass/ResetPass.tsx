import { Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, Stack, TextInput } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import NabiqLogo from 'src/assets/logo/logo-landmark.png';
import { trimAllValuesOfObject } from 'src/utils/string.utils.ts';

type ResetPasswordProps = {
  onSetup: () => void;
};

export const ResetPass = ({ onSetup }: ResetPasswordProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (value.length === 0 ? t('settings.email_required') : null),
    },
  });

  const handleFormSubmit = async (values) => {
    // @TODO: Need to confirm with @simanto bhai: (if user put space then not showing require text)
    // if (values.email.length === 0) {
    //   form.setErrors({ email: 'Email is required' });
    //   return;
    // }

    try {
      console.log({ values });
      onSetup();
      // await Auth.forgotPassword(values.email);
      // toast.success('Code has been sent!');
    } catch {
      // @TODO: Handle error
    }
  };

  return (
    <>
      <Image src={NabiqLogo} alt='Nabiq' className='w-8 h-8' />
      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>{t('page_title.reset_pass')}</p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          {t('reset_pass.enter_email_reset_pass')}
        </p>
      </Stack>
      <form
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
        className='flex flex-col gap-6 w-full'
      >
        <TextInput
          label={t('onboarding.email')}
          placeholder={t('signup.example_email')}
          {...form.getInputProps('email')}
        />

        <Stack gap={16}>
          <Button type='submit' fullWidth>
            {t('onboarding.continue')}
          </Button>
          <Button type='submit' variant='link' fullWidth onClick={() => navigate('/login')}>
            {t('reset_pass.back_to_sign_in')}
          </Button>
        </Stack>
      </form>
    </>
  );
};
