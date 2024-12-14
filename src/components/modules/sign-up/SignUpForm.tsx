import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Stack, TextInput } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from 'src/assets/onboarding/google.svg';
import { useGoogleSignInMutation, useSignupMutation } from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

export const SignUpForm = () => {
  const [signup] = useSignupMutation();
  const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: {
      name: (value) => (value.length === 0 ? 'Name is required' : null),
      email: (value) => (value.length === 0 ? 'Email is required' : null),
      password: (value) => (value.length === 0 ? 'Password is required' : null),
    },
  });

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    await signup({ ...values }).unwrap();
    setIsLoading(false);
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
            <p className='text-gray-950 text-2xl font-semibold'>Create your Nabiq account</p>
            <Button
              variant='secondary-black'
              leadingIcon={<Image src={GoogleLogo} alt='' />}
              fullWidth
              loading={isGoogleLoading}
              onClick={handleGoogleSignIn}
            >
              Sign up with Google
            </Button>
          </Stack>
        </motion.div>
        <div className='flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-gray-300' />
          <p className='text-gray-700 text-sm font-normal'>Or, sign up with email</p>
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
              label='Full Name'
              placeholder='e.g John Doe'
              {...form.getInputProps('name')}
            />
            <TextInput
              label='Email'
              placeholder='e.g johndoe@gmail.com'
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label='Password'
              placeholder='Set password'
              description='Password must contain at least 8 characters.'
              // {...form.getInputProps('password')}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className='flex flex-col gap-8'
          >
            <Button fullWidth loading={isLoading} type='submit'>
              Sign up
            </Button>
            <p className='text-gray-700 text-sm font-normal text-center'>
              Already have an account?{' '}
              <Link className='text-primary-600' to='/login'>
                Sign in
              </Link>
            </p>
          </motion.div>
        </Stack>
      </form>
    </Stack>
  );
};
