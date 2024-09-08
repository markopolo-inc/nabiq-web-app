import { useForm } from '@mantine/form';
import { Button, Image, PasswordInput, Text, TextInput } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import googleLogo from 'src/assets/onboarding/google.svg';
import { useGoogleSignInMutation, useSignupMutation } from 'src/store/auth/authApi';
import { trimAllValuesOfObject } from 'src/utils/stringUtils';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();

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
    await signup({ ...values }).unwrap();
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
      <Text className='display-xs font-semibold text-gray-900'>Sign up</Text>

      <div className='space-y-5'>
        <TextInput label='Name' placeholder='Enter your name' {...form.getInputProps('name')} />

        <TextInput label='Email' placeholder='Enter your email' {...form.getInputProps('email')} />

        <PasswordInput
          label='Password'
          placeholder='Enter your password'
          description='Password must contain at least 8 characters.'
          {...form.getInputProps('password')}
        />
      </div>

      <Button variant='link' size='sm' className='px-0' onClick={() => navigate('/reset-pass')}>
        Forgot password?
      </Button>

      <div className='flex flex-col space-y-4'>
        <Button variant='primary' size='md' type='submit' loading={isLoading}>
          Continue
        </Button>
        <Button
          variant='secondary'
          size='md'
          leadingIcon={<Image src={googleLogo} alt='' />}
          loading={isGoogleLoading}
          onClick={handleGoogleSignIn}
        >
          Continue with Google
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
