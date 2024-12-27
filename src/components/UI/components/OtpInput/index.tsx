import { PinInput, PinInputProps } from '@mantine/core';

// import { useRef, useState } from 'react';
import styles from './index.module.scss';

// interface OTPInputProps {
//   length?: number;
//   value?: string;
//   label?: string;
//   onChange?: (value: string) => void;
// }

// const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange, label = null }) => {
//   const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value.slice(-1);
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     onChange?.(newOtp.join(''));

//     if (value && index < length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, length);

//     if (pastedData) {
//       const newOtp = [...otp];
//       pastedData.split('').forEach((char, i) => {
//         if (i < length) {
//           newOtp[i] = char;
//         }
//       });

//       setOtp(newOtp);
//       onChange?.(newOtp.join(''));

//       // Focus the next empty input or the last input
//       const nextEmptyIndex = newOtp.findIndex((val) => !val);
//       const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
//       inputRefs.current[focusIndex]?.focus();
//     }
//   };

//   return (
//     <div className='flex flex-col gap-[6px]'>
//       {label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
//       <div className='flex gap-3 w-full'>
//         {otp.map((_, index) => (
//           <input
//             key={index}
//             ref={(ref) => (inputRefs.current[index] = ref)}
//             type='text'
//             maxLength={1}
//             placeholder='0'
//             onFocus={() => {
//               const input = inputRefs.current[index];
//               if (input) {
//                 input.placeholder = '';
//               }
//             }}
//             onBlur={() => {
//               const input = inputRefs.current[index];
//               if (input) {
//                 input.placeholder = '0';
//               }
//             }}
//             autoFocus={index === 0}
//             value={otp[index]}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             className={`flex-1 aspect-square min-w-0 text-[32px] font-medium text-primary-600 text-center border rounded-2xl focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 placeholder:text-gray-300 ${
//               otp[index] ? 'border-primary-600 border-[2px]' : 'border-gray-300'
//             }`}
//             onPaste={handlePaste}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OTPInput;

interface OtpInputProps extends PinInputProps {
  label?: string;
}

export const OtpInput = ({ label, ...rest }: OtpInputProps) => {
  return (
    <div className='flex flex-col gap-[6px]'>
      {label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
      <PinInput
        classNames={{
          pinInput: styles.pinInput,
          input: styles.input,
          root: styles.root,
        }}
        {...rest}
      />
    </div>
  );
};
