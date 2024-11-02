import { ArrowNarrowLeft } from '@nabiq-icons';
import { Button, Image, Text } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo/nabiq-dark-logo.png';

export const PlatformSidebar = () => {
  const navigate = useNavigate();

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
          <Text className='display-xl font-medium text-white'>Select Brand</Text>
          <Text className='text-xl text-gray-300'>
            Connect and import data from ads you have run on facebook ads, google ads and linkedin
            ads.
          </Text>
        </div>
      </div>

      <div className='absolute bottom-0 pl-12 pb-12'>
        <Button
          variant='secondary'
          leadingIcon={<ArrowNarrowLeft size={20} color='#4B5565' />}
          onClick={() => navigate('/')}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};
