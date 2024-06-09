import { Image, Text } from '@nabiq-ui';
import logoLandmark from 'src/assets/logo/logo-landmark.png';

const VerifyLogoComponent = ({ email }) => {
  return (
    <>
      <Image className='mx-auto h-auto w-auto' src={logoLandmark} alt='Nabiq' />

      <div className='flex flex-col justify-center space-y-3'>
        <Text className='text-center display-sm font-medium text-gray-900'>
          Check your email to continue
        </Text>
        <Text className='text-center text-xl text-gray-500'>
          We have sent an email to{' '}
          <span className='text-gray-700'>{email}</span>
        </Text>
      </div>
    </>
  );
};

export default VerifyLogoComponent;
