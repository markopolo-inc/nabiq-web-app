import { useForm } from '@mantine/form';
import { FiMail01 } from '@nabiq-icons';
import { Button, OtpInput, PasswordInput, Stack } from '@nabiq-ui';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type CheckEmailProps = {
  email: string;
  onSetup: () => void;
};

export const CheckEmail = ({ email, onSetup }: CheckEmailProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)
  const [canResend, setCanResend] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Controls Reset Password button

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      setIsButtonDisabled(true); // Disable Reset Password button when timer ends
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResendCode = async () => {
    try {
      setCanResend(false);
      setTimeLeft(120); // Reset timer to 2 minutes
      setIsButtonDisabled(false); // Enable Reset Password button when timer restarts
      await Auth.forgotPassword(email);
      toast.success(t('verification.code_resent'));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const form = useForm({
    initialValues: {
      code: '',
      newPassword: '',
    },
    validate: {
      code: (value) => (!value.trim() ? t('reset_pass.enter_code_required') : null),
      newPassword: (value) => {
        if (!value.trim()) return t('signup.password_required');
        if (value.length < 8) return t('signup.password_min_length');
        if (!/[A-Z]/.test(value)) return t('signup.password_capital_letter');
        return null;
      },
    },
  });

  const handlePasswordReset = async () => {
    const validation = form.validate();
    if (validation.hasErrors) {
      Object.values(validation.errors).forEach((error) => toast.error(error));
      return;
    }

    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(email, form.values.code, form.values.newPassword);
      toast.success(t('reset_pass.password_reset_success'));
      onSetup();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='p-3.5 bg-gray-100 rounded-full'>
        <FiMail01 size={28} color='#697586' />
      </div>

      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>{t('verification.code_instruction')}</p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          {t('verification.enter_code')}
        </p>
      </Stack>

      <Stack gap={4} className='w-full'>
        <OtpInput
          className='mb-10'
          label='Verification Code'
          value={form.values.code}
          onChange={(value) => form.setFieldValue('code', value)}
          length={6}
        />

        <PasswordInput
          label={t('reset_pass.new_password')}
          placeholder={t('reset_pass.enter_new_password')}
          type='password'
          {...form.getInputProps('newPassword')}
          className='mb-5'
        />

        <Button
          type='submit'
          fullWidth
          onClick={handlePasswordReset}
          disabled={loading || isButtonDisabled}
        >
          {loading ? t('reset_pass.processing') : t('reset_pass.reset_password')}
        </Button>

        {/* Timer & Resend Code */}
        <p className='text-gray-700 text-sm font-normal text-center mt-3'>
          {canResend ? (
            <button className='text-primary-600 font-medium' onClick={handleResendCode}>
              {t('verification.resend')}
            </button>
          ) : (
            `${t('verification.resend')} ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`
          )}
        </p>

        <p className='text-gray-700 text-sm font-normal text-center mt-5'>
          {t('onboarding.signin_prompt')}{' '}
          <Link className='text-primary-600' to='/login'>
            {t('signup.signin')}
          </Link>
        </p>
      </Stack>
    </>
  );
};
