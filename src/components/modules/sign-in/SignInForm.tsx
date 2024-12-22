import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Stack, TextInput } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from 'src/assets/onboarding/google.svg';
import {
  useGoogleSignInMutation,
  useLoginMutation,
  useResendVerificationCodeMutation,
} from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

export const SignInForm = () => {
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
      email: (value) => (value.length === 0 ? 'Email is required' : null),
      password: (value) => (value.length === 0 ? 'Password is required' : null),
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
              <p className='text-gray-950 text-2xl font-semibold'>Sign in</p>
              <p className='text-gray-700 text-sm font-normal'>
                Don't have an account?{' '}
                <Link className='text-primary-600' to='/signup'>
                  Sign up
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
              Sign in with Google
            </Button>
          </Stack>
        </motion.div>
        <div className='flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-gray-300' />
          <p className='text-gray-700 text-sm font-normal'>Or, sign in with email</p>
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
              label='Email'
              placeholder='e.g johndoe@gmail.com'
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label='Password'
              placeholder='Enter your password'
              {...form.getInputProps('password')}
            />
            <Button
              variant='link'
              size='sm'
              className='px-0'
              onClick={() => window.open('https://app.markopolo.ai/reset-pass', '_blank')}
            >
              Forgot password?
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className='flex flex-col gap-8 mt-[64px]'
          >
            <Button type='submit' fullWidth loading={isLoading}>
              Sign in
            </Button>
          </motion.div>
        </form>
      </Stack>
    </Stack>
  );
};
