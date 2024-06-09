import { Button, Image, PasswordInput, Text, TextInput } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import googleLogo from 'src/assets/onboarding/google.svg';

const SignUpForm = () => {
  const navigate = useNavigate();

  return (
    <form className='space-y-6'>
      <Text className='display-xs font-semibold text-gray-900'>Sign up</Text>

      <div className='space-y-5'>
        <TextInput label='Name' placeholder='Enter your name' />

        <TextInput label='Email' placeholder='Enter your email' />

        <PasswordInput
          label='Password'
          placeholder='Enter your password'
          description='Password must contain at least 8 characters.'
        />
      </div>

      <Button
        type='link'
        size='sm'
        className='px-0'
        onClick={() => navigate('/reset-pass')}
      >
        Forgot password?
      </Button>

      <div className='flex flex-col space-y-4'>
        <Button type='primary' size='md'>
          Continue
        </Button>
        <Button
          type='secondary'
          size='md'
          leadingIcon={<Image src={googleLogo} alt='' />}
        >
          Continue with Google
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
