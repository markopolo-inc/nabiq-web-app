import { HeaderTitle } from 'layouts';
import { PlatformDetails, PlatformSidebar } from 'src/components/modules/home';

const ConnectPlatforms = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Connect Platforms</HeaderTitle>

      <div className='min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <PlatformSidebar />
        <PlatformDetails />
      </div>
    </>
  );
};

export default ConnectPlatforms;
