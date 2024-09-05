import { Image } from '@nabiq-ui';
import LoaderGif from 'src/assets/loader/loading.gif';

const PageLoader = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-[99999]'>
      <Image src={LoaderGif} alt='Loading...' className='w-48' />
    </div>
  );
};

export default PageLoader;
