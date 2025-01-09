import { Button, OtpInput, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResendVerificationCodeMutation, useVerifyMutation } from 'src/store/auth/authApi';
import { setIsAuthenticated } from 'src/store/auth/authSlice';
import { useAppSelector } from 'src/store/hooks';

export const VerificationForm = () => {
  const { t } = useTranslation();
  const [confirmationPin, setConfirmationPin] = useState<string>('');

  const [verify] = useVerifyMutation();
  const [resend] = useResendVerificationCodeMutation();
  const dispatch = useDispatch();
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
    setTimeout(() => {
      dispatch(setIsAuthenticated(true));
      navigate('/');
    }, 1000);
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
          <Stack gap={8}>
            <p className='text-2xl font-semibold text-gray-950'>{t('onboarding.email_check')}</p>
            <p className='font-normal text-gray-500'>
              {t('onboarding.verification_sent')} <span className='text-gray-700'>{email}</span>
            </p>
          </Stack>
          <OtpInput
            onChange={handleOTPChange}
            length={6}
            placeholder='0'
            label='Verification code'
          />
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
            {t('onboarding.verify')}
          </Button>
          <div className='flex justify-center items-center gap-1'>
            <p className='text-gray-700 text-sm font-normal text-center'>
              {t('onboarding.resend_code')}
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
