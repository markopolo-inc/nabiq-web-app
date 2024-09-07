import { Image, Text } from '@nabiq-ui';
import logoImg from 'src/assets/onboarding/logo.png';

const LogoComponent = () => {
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
      <Image className='mx-auto h-auto w-auto' src={logoImg} alt='Nabiq' />
      <Text className='mt-4 text-center text-xl text-gray-600'>Your AI marketing captain.</Text>
    </div>
  );
};

export default LogoComponent;
