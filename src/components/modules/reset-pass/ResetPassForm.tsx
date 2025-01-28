import { useForm } from '@mantine/form';
import { Button, Stack, TextInput } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { trimAllValuesOfObject } from 'src/utils/string.utils.ts';

export const ResetPassForm = () => {
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
    console.log({ values });
  };

  return (
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
          Back to sign in
        </Button>
      </Stack>
    </form>
  );
};
