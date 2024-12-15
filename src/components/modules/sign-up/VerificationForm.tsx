import { Button, Stack } from '@nabiq-ui';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResendVerificationCodeMutation, useVerifyMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks';

interface OTPInputProps {
  length?: number;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange, label = null }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    onChange?.(newOtp.join(''));

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);

    if (pastedData) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, i) => {
        if (i < length) {
          newOtp[i] = char;
        }
      });

      setOtp(newOtp);
      onChange?.(newOtp.join(''));

      // Focus the next empty input or the last input
      const nextEmptyIndex = newOtp.findIndex((val) => !val);
      const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();
    }
  };

  return (
    <div className='flex flex-col gap-[6px]'>
      {label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
      <div className='flex gap-3'>
        {otp.map((_, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type='text'
            maxLength={1}
            placeholder='0'
            onFocus={() => {
              const input = inputRefs.current[index];
              if (input) {
                input.placeholder = '';
              }
            }}
            onBlur={() => {
              // Use optional chaining with nullish coalescing to safely set placeholder
              const input = inputRefs.current[index];
              if (input) {
                input.placeholder = '0';
              }
            }}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-20 h-20 text-[52px] font-medium text-primary-600 text-center border  rounded-2xl focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 placeholder:text-gray-300 ${otp[index] ? 'border-primary-600 border-[2px]' : 'border-gray-300'}`}
            onPaste={handlePaste}
          />
        ))}
      </div>
    </div>
  );
};

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
      <Stack gap={64}>
        <Stack gap={9}>
          <p className='text-2xl font-semibold text-gray-950'>Check your email to continue</p>
          <p className='font-normal text-gray-500'>
            We sent a verification code to <span className='text-gray-700'>{email}</span>
          </p>
        </Stack>
        <OTPInput onChange={handleOTPChange} label='Verification code' />
      </Stack>

      <Stack>
        <Button
          fullWidth
          variant='primary'
          loading={isLoading}
          disabled={confirmationPin?.length !== 6}
          onClick={() => verify({ email, confirmationPin, onLoading, onSuccess })}
        >
          Verify
        </Button>
        <div className='flex justify-center items-center gap-1'>
          <p className='text-gray-700 text-sm font-normal text-center'>
            Having trouble with the code?
          </p>
          <Button onClick={() => resend({ email })} variant='link' className='px-0'>
            Resend
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};
