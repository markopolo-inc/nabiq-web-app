import { Button, OtpInput, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResendVerificationCodeMutation, useVerifyMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks';

export const VerificationForm = () => {
  const [confirmationPin, setConfirmationPin] = useState<string>('');

  const [verify] = useVerifyMutation();
  const [resend] = useResendVerificationCodeMutation();
  const { email } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (email) {
  //     setConfirmationPin('');
  //   }
  // }, [email]);

  const onLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const onSuccess = () => {
    navigate('/login');
  };

  const handleOTPChange = (_value: string) => {
    setConfirmationPin(_value);
  };
  return (
    <Stack gap={200}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Stack gap={64}>
          <Stack gap={9}>
            <p className='text-2xl font-semibold text-gray-950'>Check your email to continue</p>
            <p className='font-normal text-gray-500'>
              We sent a verification code to <span className='text-gray-700'>{email}</span>
            </p>
          </Stack>
          <OtpInput onChange={handleOTPChange} label='Verification code' />
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='space-y-5'
      >
        <Stack>
          <Button
            fullWidth
            variant='primary'
            loading={isLoading}
            disabled={confirmationPin?.length !== 6 || !email}
            onClick={() => verify({ email, confirmationPin, onLoading, onSuccess })}
          >
            Verify
          </Button>
          <div className='flex justify-center items-center gap-1'>
            <p className='text-gray-700 text-sm font-normal text-center'>
              Having trouble with the code?
            </p>
            <Button
              disabled={!email}
              onClick={() => resend({ email })}
              variant='link'
              className='px-0'
            >
              Resend
            </Button>
          </div>
        </Stack>
      </motion.div>
    </Stack>
  );
};
