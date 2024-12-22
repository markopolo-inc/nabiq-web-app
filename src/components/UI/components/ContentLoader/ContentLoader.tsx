import { Image } from '@nabiq-ui';
import LoaderGif from 'src/assets/loader/loading.gif';

const ContentLoader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform x -translate-x-1/2 lg:-translate-x-[20%] -translate-y-1/2 flex items-center justify-center flex-col opacity-60'>
      <Image src={LoaderGif} alt='Loading...' className='w-48' />
    </div>
  );
};

export default ContentLoader;
