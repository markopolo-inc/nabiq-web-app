import { Button, OtpInput, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
// Add useRef
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResendVerificationCodeMutation, useVerifyMutation } from 'src/store/auth/authApi';
import { setIsAuthenticated } from 'src/store/auth/authSlice';
import { useAppSelector } from 'src/store/hooks';

export const VerificationForm = () => {
  const { t } = useTranslation();
  const [confirmationPin, setConfirmationPin] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Use a ref to store the interval ID

  const [verify] = useVerifyMutation();
  const [resend] = useResendVerificationCodeMutation();
  const dispatch = useDispatch();
  const { email } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const OTP_EXPIRY_TIME = 120;

  const startTimer = () => {
    setTimeLeft(OTP_EXPIRY_TIME);
    setIsExpired(false);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          setIsExpired(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
    intervalRef.current = timer;
  };

  useEffect(() => {
    let storedTimestamp = localStorage.getItem('otpTimestamp');
    if (!storedTimestamp) {
      storedTimestamp = Date.now().toString();
      localStorage.setItem('otpTimestamp', storedTimestamp);
    }

    const elapsedTime = Math.floor((Date.now() - parseInt(storedTimestamp, 10)) / 1000);
    if (elapsedTime < OTP_EXPIRY_TIME) {
      setTimeLeft(OTP_EXPIRY_TIME - elapsedTime);
      setIsExpired(false);
    } else {
      setIsExpired(true);
    }

    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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

  const handleVerify = () => {
    if (!email || confirmationPin.length !== 6) return;

    const storedTimestamp = localStorage.getItem('otpTimestamp');
    if (!storedTimestamp) {
      toast.error('OTP timestamp not found. Please resend the code.');
      return;
    }

    const elapsedTime = Math.floor((Date.now() - parseInt(storedTimestamp, 10)) / 1000);
    if (elapsedTime > OTP_EXPIRY_TIME) {
      toast.error('OTP has expired. Please request a new one.');
      setIsExpired(true);
      return;
    }

    verify({ email, confirmationPin, onLoading, onSuccess });
  };

  const handleResend = async () => {
    try {
      await resend({ email });
      localStorage.setItem('otpTimestamp', Date.now().toString());
      if (intervalRef.current) clearInterval(intervalRef.current);
      startTimer();
      setIsExpired(false);
    } catch (error) {
      console.error('Error resending OTP:', error);
    }
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
            label={t('verification.verification_code')}
          />
          <p className='text-sm text-gray-600'>
            {isExpired ? 'OTP expired. Please resend.' : `OTP expires in ${timeLeft}s`}
          </p>
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
            disabled={confirmationPin.length !== 6 || !email}
            onClick={handleVerify}
          >
            {t('onboarding.verify')}
          </Button>
          <div className='flex justify-center items-center gap-1'>
            <p className='text-gray-700 text-sm font-normal text-center'>
              {t('onboarding.resend_code')}
            </p>
            <Button
              disabled={!email || !isExpired}
              onClick={handleResend}
              variant='link'
              className='px-0'
            >
              {t('verification.resend')}
            </Button>
          </div>
        </Stack>
      </motion.div>
    </Stack>
  );
};
