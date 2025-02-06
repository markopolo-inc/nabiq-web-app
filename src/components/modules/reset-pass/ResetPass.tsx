import { Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, Stack, TextInput } from '@nabiq-ui';
import { Auth } from 'aws-amplify';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NabiqLogo from 'src/assets/logo/logo-landmark.png';
import { trimAllValuesOfObject } from 'src/utils/string.utils.ts';

type ResetPasswordProps = {
  onSetup: () => void;
  setEmail: (email: string) => void;
};

export const ResetPass = ({ setEmail, onSetup }: ResetPasswordProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (!value.trim() ? t('settings.email_required') : null),
    },
  });

  const handleFormSubmit = async (values) => {
    try {
      await Auth.forgotPassword(values.email);
      setEmail(values.email);
      toast.success(t('reset_pass.code_sent'));
      onSetup(); // Proceed to verification step
    } catch (error) {
      toast.error(error.message);
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
        onSubmit={form.onSubmit((values) => handleFormSubmit(trimAllValuesOfObject(values)))}
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
          <Button type='button' variant='link' fullWidth onClick={() => navigate('/login')}>
            {t('reset_pass.back_to_sign_in')}
          </Button>
        </Stack>
      </form>
    </>
  );
};
