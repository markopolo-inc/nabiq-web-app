import {
  Button,
  Checkbox,
  Image,
  PasswordInput,
  Text,
  TextInput,
} from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import googleLogo from 'src/assets/onboarding/google.svg';

const LogInForm = () => {
  const navigate = useNavigate();

  return (
    <form className='space-y-6'>
      <Text className='display-xs font-semibold text-gray-900'>Log In</Text>

      <div className='space-y-5'>
        <TextInput label='Email' placeholder='Enter your email' />

        <PasswordInput label='Password' placeholder='Enter your password' />
      </div>

      <div className='flex justify-between items-center'>
        <Checkbox label='Remember me' />
        <Button
          type='link'
          size='sm'
          className='px-0'
          onClick={() => navigate('/reset-pass')}
        >
          Forgot password?
        </Button>
      </div>

      <div className='flex flex-col space-y-4'>
        <Button type='primary' size='md'>
          Login
        </Button>
        <Button
          type='secondary'
          size='md'
          leadingIcon={<Image src={googleLogo} alt='' />}
        >
          Login with Google
        </Button>
      </div>
    </form>
  );
};

export default LogInForm;
