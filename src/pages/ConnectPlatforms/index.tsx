import { HeaderTitle } from 'layouts';
import { PlatformDetails } from 'src/components/modules/home';
import { PlatformSidebar } from 'src/components/modules/home/components/screens/ConnectPlatforms/PlatformSidebar';

const ConnectCampaignPlatforms = () => {
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

export default ConnectCampaignPlatforms;
