import React, { useRef, useState } from 'react';

interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange }) => {
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
    <div className='flex gap-3'>
      {otp.map((_, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type='text'
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className='w-20 h-20 text-[36px] font-medium text-gray-400 text-center border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export const VerificationForm = () => {
  const handleOTPChange = (_value: string) => {
    // Handle OTP verification here
  };
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold text-gray-900'>Verification code</h2>
      <OTPInput onChange={handleOTPChange} />
    </div>
  );
};
