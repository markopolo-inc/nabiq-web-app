import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Stack, TextInput } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import GoogleLogo from 'src/assets/onboarding/google.svg';
import { useGoogleSignInMutation, useSignupMutation } from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

export const SignUpForm = ({ setIsSignedUp }: { setIsSignedUp: (value: boolean) => void }) => {
  const location = useLocation();
  const [signup] = useSignupMutation();
  const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: {
      name: (value) => {
        const trimmedValue = value.trim(); //leading and trailing spaces removed
        if (trimmedValue.length === 0) return t('settings.name_required');
        if (trimmedValue.length < 2 || trimmedValue.length > 50) return t('settings.name_length');
        if (!/^[A-Za-z\s'-]+$/.test(trimmedValue)) return t('settings.name_invalid_chars'); //allows uppercase ,lowercase ,hyphens and apostrophes
        return null;
      },
      email: (value) => {
        const trimmedValue = value.trim();
        if (trimmedValue.length === 0) return t('settings.email_required');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedValue)) return t('settings.email_invalid');

        return null;
      },
      password: (value) => {
        const trimmedValue = value.trim(); // Remove leading and trailing spaces

        if (trimmedValue.length === 0) return t('signup.password_required');
        if (trimmedValue.length < 8 || trimmedValue.length > 64) return t('signup.password_length');
        if (!/[A-Z]/.test(trimmedValue)) return t('signup.password_capital_letter'); // At least one capital letter
        if (!/[a-z]/.test(trimmedValue)) return t('signup.password_lowercase_letter'); // At least one lowercase letter
        if (!/\d/.test(trimmedValue)) return t('signup.password_number'); // At least one number
        if (!/[@$!%*?&]/.test(trimmedValue)) return t('signup.password_special_character'); // At least one special character

        return null;
      },
    },
  });

  const onLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const onSuccess = () => {
    setIsSignedUp(true);
  };

  const handleFormSubmit = async (values) => {
    console.log('email - ', values.email);

    await signup({ ...values, onLoading, onSuccess }).unwrap();
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn({}).unwrap();
  };

  useEffect(() => {
    const checkAndAuthenticate = async () => {
      const hash = location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      const tokenType = params.get('token_type');

      if (accessToken && tokenType === 'Bearer') {
        await googleSignIn({}).unwrap();
      }
    };

    checkAndAuthenticate();
  }, [location]);

  return (
    <Stack gap={36}>
      <Stack gap={24}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Stack gap={32}>
            <p className='text-gray-950 text-2xl font-semibold'>{t('onboarding.create_account')}</p>
            <Button
              variant='secondary-black'
              leadingIcon={<Image src={GoogleLogo} alt='' />}
              fullWidth
              loading={isGoogleLoading}
              onClick={handleGoogleSignIn}
            >
              {t('onboarding.google_signup')}
            </Button>
          </Stack>
        </motion.div>
        <div className='flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-gray-300' />
          <p className='text-gray-700 text-sm font-normal'>{t('onboarding.email_signup')}</p>
          <div className='h-[1px] flex-1 bg-gray-300' />
        </div>
      </Stack>
      <form
        className='space-y-6'
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Stack gap={72}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='space-y-5'
          >
            <TextInput
              label={t('onboarding.full_name')}
              placeholder={t('signup.example_name')}
              {...form.getInputProps('name')}
            />
            <TextInput
              label={t('onboarding.email')}
              placeholder={t('signup.example_email')}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label={t('onboarding.password')}
              placeholder={t('onboarding.set_password')}
              description={form.errors.password ? null : t('onboarding.password_requirement')}
              {...form.getInputProps('password')}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className='flex flex-col gap-8'
          >
            <Button fullWidth loading={isLoading} type='submit'>
              {t('onboarding.signup')}
            </Button>
            <p className='text-gray-700 text-sm font-normal text-center'>
              {t('onboarding.signin_prompt')}{' '}
              <Link className='text-primary-600' to='/login'>
                {t('signup.signin')}
              </Link>
            </p>
          </motion.div>
        </Stack>
      </form>
    </Stack>
  );
};
