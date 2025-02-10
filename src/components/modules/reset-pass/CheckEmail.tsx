import { useForm } from '@mantine/form';
import { FiMail01 } from '@nabiq-icons';
import { Button, OtpInput, PasswordInput, Stack } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useResendCodeMutation, useSubmitNewPasswordMutation } from 'src/store/auth/authApi';

type CheckEmailProps = {
  email: string;
  onSetup: () => void;
};

export const CheckEmail = ({ email, onSetup }: CheckEmailProps) => {
  const { t } = useTranslation();
  const [submitNewPassword, { isLoading }] = useSubmitNewPasswordMutation();
  const [resendCode] = useResendCodeMutation();
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      setIsButtonDisabled(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResendCode = async () => {
    try {
      await resendCode({ email }).unwrap();
      setCanResend(false);
      setTimeLeft(120);
      setIsButtonDisabled(false);
      toast.success(t('verification.code_resent'));
    } catch (error: any) {
      toast.error(t(error.message) || t('error.something_went_wrong'));
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
    if (validation.hasErrors) return;

    try {
      const result = await submitNewPassword({
        email,
        code: form.values.code,
        newPassword: form.values.newPassword,
      }).unwrap();

      if (result.success) {
        toast.success(t('reset_pass.password_changed_successfully'));
        onSetup(); // Only called when successful
      }
    } catch (error: any) {
      if (error.data?.message?.includes('Invalid verification code provided')) {
        toast.error(t('reset_pass.invalid_code'));
      } else {
        toast.error(error.data?.message || t('error.something_went_wrong'));
      }
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
          disabled={isLoading || isButtonDisabled}
          loading={isLoading}
        >
          {t('reset_pass.reset_password')}
        </Button>

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
