import { Button, PasswordInput, TextInput } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetLogoComponent from './ResetLogoComponent';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [isResetInitiated, setIsResetInitiated] = useState<boolean>(false);
  const [isResetPassword, setIsResetPassword] = useState<boolean>(false);
  const [isResetSuccessful, setIsResetSuccessful] = useState<boolean>(false);

  return (
    <div className='space-y-6 sm:mx-auto sm:w-full sm:max-w-md'>
      <ResetLogoComponent
        isResetInitiated={isResetInitiated}
        isResetPassword={isResetPassword}
        isResetSuccessful={isResetSuccessful}
        email='johndoe@gmail.com'
      />

      {isResetSuccessful ? (
        <Button
          variant='primary'
          size='md'
          className='w-full'
          onClick={() => navigate('/login')}
        >
          Back to login
        </Button>
      ) : isResetInitiated && !isResetPassword ? (
        <Button
          variant='primary'
          size='md'
          className='w-full'
          onClick={() => setIsResetPassword(true)}
        >
          Resend email
        </Button>
      ) : isResetPassword ? (
        <>
          <PasswordInput
            label='New password'
            placeholder='Enter your new password'
          />

          <PasswordInput
            label='Re-enter password'
            placeholder='Re-enter your new password'
          />

          <Button
            variant='primary'
            size='md'
            className='w-full'
            onClick={() => setIsResetSuccessful(true)}
          >
            Reset password
          </Button>
        </>
      ) : (
        <>
          <TextInput label='Email' placeholder='Enter your email' />
          <div className='flex flex-col space-y-4'>
            <Button
              variant='primary'
              size='md'
              onClick={() => setIsResetInitiated(true)}
            >
              Continue
            </Button>
            <Button
              variant='tertiary'
              size='md'
              onClick={() => navigate('/login')}
            >
              Back to login
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPasswordForm;
