import PlatformDetails from 'components/Features/ConnectCampaignPlatforms/PlatformDetails';
import PlatformSidebar from 'components/Features/ConnectCampaignPlatforms/PlatformSidebar';
import { HeaderTitle } from 'layouts';

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
