import { Image, Text } from '@nabiq-ui';
import logo from 'src/assets/logo/nabiq-dark-logo.png';
import bgLine from 'src/assets/onboarding/background-line.png';

const OnboardingSidebar = () => {
  return (
    <div
      className='relative lg:col-span-4'
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), #303534',
      }}
    >
      <div className='py-20 lg:py-16 pl-12 pr-8'>
        <Image className='w-36' src={logo} alt='' />

        <div className='mt-16 flex flex-col gap-3'>
          <Text className='display-xl font-medium text-white'>
            Before we start...
          </Text>
          <Text className='text-xl text-gray-300'>
            Providing your business information will help us optimize your
            experience.
          </Text>
        </div>
      </div>

      <div className='absolute bottom-0'>
        <Image className='w-full' src={bgLine} alt='' />
      </div>
    </div>
  );
};

export default OnboardingSidebar;
