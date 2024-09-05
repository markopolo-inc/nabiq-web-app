import { Image, Text } from '@nabiq-ui';
import logoSvg from 'src/assets/logo/logo.svg';
import { FiCheck, FiMail01 } from 'src/components/Icons';

const ResetLogoComponent = ({
  isResetInitiated,
  isResetPassword,
  isResetSuccessful,
  email = '',
}) => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto space-y-6'>
      {isResetSuccessful ? (
        <div className='flex w-10 h-10 p-3 justify-center items-center rounded-full bg-success-600'>
          <FiCheck size={28} color='#fff' />
        </div>
      ) : isResetInitiated && !isResetPassword ? (
        <div className='flex w-14 h-14 p-3 justify-center items-center rounded-full bg-gray-100'>
          <FiMail01 size={28} />
        </div>
      ) : (
        <Image className='mx-auto h-auto w-auto' src={logoSvg} alt='Nabiq' />
      )}

      <div className='flex flex-col justify-center space-y-1'>
        <Text className='text-center display-xs font-semibold text-gray-900'>
          {isResetSuccessful
            ? 'Password changed!'
            : isResetInitiated && !isResetPassword
              ? 'Please check your email'
              : 'Reset password'}
        </Text>
        <Text className='text-center text-xl text-gray-500'>
          {isResetSuccessful
            ? 'Your password has been changed successfully.'
            : isResetInitiated && !isResetPassword
              ? `We have sent you instructions to reset your password on ${email}`
              : 'Enter your email address and we will send you instructions to reset your password.'}
        </Text>
      </div>
    </div>
  );
};

export default ResetLogoComponent;
