import { Image } from '@nabiq-ui';
import LoaderGif from 'src/assets/loader/loading.gif';

export const ContentLoader = () => {
  return (
    <div className='flex items-center justify-center flex-col h-[40vh] opacity-60'>
      <Image src={LoaderGif} alt='Loading...' className='w-48' />
    </div>
  );
};
