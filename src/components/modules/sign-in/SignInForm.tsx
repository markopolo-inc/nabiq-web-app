import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Stack, TextInput } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from 'src/assets/onboarding/google.svg';
import {
  useGoogleSignInMutation,
  useLoginMutation,
  useResendVerificationCodeMutation,
} from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

export const SignInForm = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();
  const [resend] = useResendVerificationCodeMutation();
  const navigate = useNavigate();

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

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      // email: (value) => {
      //   const trimmedValue = value.trim();
      //   if (trimmedValue.length === 0) return t('settings.email_required');
      //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //   if (!emailRegex.test(trimmedValue)) return t('settings.email_invalid');
      //   return null;
      // },
      // password: (value) => {
      //   const trimmedValue = value.trim(); // Remove leading and trailing spaces
      //   if (trimmedValue.length === 0) return t('signup.password_required');
      //   if (trimmedValue.length < 8 || trimmedValue.length > 64) return t('signup.password_length');
      //   if (!/[A-Z]/.test(trimmedValue)) return t('signup.password_capital_letter'); // At least one capital letter
      //   if (!/[a-z]/.test(trimmedValue)) return t('signup.password_lowercase_letter'); // At least one lowercase letter
      //   if (!/\d/.test(trimmedValue)) return t('signup.password_number'); // At least one number
      //   if (!/[@$!%*?&]/.test(trimmedValue)) return t('signup.password_special_character'); // At least one special character
      //   return null;
      // },
    },
  });

  const onLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const onUnverified = () => {
    navigate('/signup?step=verification');
    resend({ email: form.values.email });
  };

  const handleFormSubmit = async (values) => {
    await login({ ...values, onLoading, onUnverified }).unwrap();
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn({}).unwrap();
  };

  return (
    <Stack gap={36}>
      <Stack gap={24}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Stack gap={32}>
            <Stack gap={8}>
              <p className='text-gray-950 text-2xl font-semibold'>{t('signup.signin')}</p>
              <p className='text-gray-700 text-sm font-normal'>
                {t('signin.no_account')}{' '}
                <Link className='text-primary-600' to='/signup'>
                  {t('onboarding.signup')}
                </Link>
              </p>
            </Stack>
            <Button
              variant='secondary-black'
              leadingIcon={<Image src={GoogleLogo} alt='' />}
              fullWidth
              loading={isGoogleLoading}
              onClick={handleGoogleSignIn}
            >
              {t('signin.signin_google')}
            </Button>
          </Stack>
        </motion.div>
        <div className='flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-gray-300' />
          <p className='text-gray-700 text-sm font-normal'>{t('signin.signin_email')}</p>
          <div className='h-[1px] flex-1 bg-gray-300' />
        </div>
      </Stack>
      <Stack gap={72}>
        <form
          onSubmit={form.onSubmit((values) => {
            handleFormSubmit(trimAllValuesOfObject(values));
          })}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='space-y-5'
          >
            <TextInput
              label={t('onboarding.email')}
              placeholder={t('signup.example_email')}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label={t('onboarding.password')}
              placeholder={t('signin.enter_password')}
              {...form.getInputProps('password')}
            />
            <Button
              variant='link'
              size='sm'
              className='px-0'
              onClick={() => navigate('/reset-pass')}
            >
              {t('signin.forgot_password')}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className='flex flex-col gap-8 mt-[64px]'
          >
            <Button type='submit' fullWidth loading={isLoading}>
              {t('signup.signin')}
            </Button>
          </motion.div>
        </form>
      </Stack>
    </Stack>
  );
};
