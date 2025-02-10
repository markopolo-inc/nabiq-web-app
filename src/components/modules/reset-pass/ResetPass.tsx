import { Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, Stack, TextInput } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import NabiqLogo from 'src/assets/logo/logo-landmark.png';
import { requestPasswordReset } from 'src/utils/auth';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

type ResetPasswordProps = {
  onSetup: () => void;
  setEmail: (email: string) => void;
};

export const ResetPass = ({ setEmail, onSetup }: ResetPasswordProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm<{ email: string }>({
    initialValues: { email: '' },
    validate: {
      email: (value) => (!value.trim() ? t('settings.email_required') : null),
    },
  });

  const handleFormSubmit = async (values: { email: string }) => {
    try {
      await requestPasswordReset(values.email);
      setEmail(values.email);
      toast.success(t('verification.code_instruction'));
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
        onSubmit={form.onSubmit((values) =>
          handleFormSubmit(trimAllValuesOfObject(values) as { email: string }),
        )}
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
