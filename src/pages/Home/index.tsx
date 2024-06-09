import { Image } from '@nabiq-ui';
import NabiqLogo from 'src/assets/logo/nabiq-logo.png';

const Home = () => {
  return (
    <div className='bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <div className='flex items-center justify-center'>
          <Image src={NabiqLogo} alt='Nabiq' className='w-40' />
        </div>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Welcome to your marketing co-pilot captain.
        </p>
      </div>
    </div>
  );
};

export default Home;
