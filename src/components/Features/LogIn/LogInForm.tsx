import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Text, TextInput } from '@nabiq-ui';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import googleLogo from 'src/assets/onboarding/google.svg';
import { useGoogleSignInMutation, useLoginMutation } from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/string.utils';

const LogInForm = () => {
  const location = useLocation();
  const [login, { isLoading }] = useLoginMutation();
  const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();

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

  const handleFormSubmit = async (values) => {
    await login({ ...values }).unwrap();
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn({}).unwrap();
  };

  return (
    <form
      className='space-y-6'
      onSubmit={form.onSubmit((values) => {
        handleFormSubmit(trimAllValuesOfObject(values));
      })}
    >
      <Text className='display-xs font-semibold text-gray-900'>Log In</Text>

      <div className='space-y-5'>
        <TextInput label='Email' placeholder='Enter your email' {...form.getInputProps('email')} />

        <PasswordInput
          label='Password'
          placeholder='Enter your password'
          {...form.getInputProps('password')}
        />
      </div>

      <div className='flex justify-end items-center'>
        {/* <Checkbox label='Remember me' /> */}
        <Button
          variant='link'
          size='sm'
          className='px-0'
          onClick={() => window.open('https://app.markopolo.ai/reset-pass', '_blank')}
        >
          Forgot password?
        </Button>
      </div>

      <div className='flex flex-col space-y-4'>
        <Button variant='primary' size='md' type='submit' loading={isLoading} fullWidth>
          Login
        </Button>
        <Button
          variant='secondary'
          size='md'
          leadingIcon={<Image src={googleLogo} alt='' />}
          loading={isGoogleLoading}
          onClick={handleGoogleSignIn}
          fullWidth
        >
          Login with Google
        </Button>
      </div>
    </form>
  );
};

export default LogInForm;
