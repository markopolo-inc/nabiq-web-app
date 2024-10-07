import { useState } from 'react';
import ConnectCampaignPlatforms from 'src/components/Features/Home/ConnectCampaignPlatforms';
import ConnectMarktag from 'src/components/Features/Home/ConnectMarktag';
import ConnectMarktagModal from 'src/components/Features/Home/ConnectMarktagModal';
import ConnectedMarktag from 'src/components/Features/Home/ConnectedMarktag';
import CreateNewMarktagModal from 'src/components/Features/Home/CreateNewMarktagModal';
import GuidedMarktagModal from 'src/components/Features/Home/GuidedMarktagModal';
import InstallCodeManuallyModal from 'src/components/Features/Home/InstallCodeManuallyModal';
import IntegrateApps from 'src/components/Features/Home/IntegrateApps';
import HeaderTitle from 'src/layouts/HeaderTitle';
import { useAppSelector } from 'src/store/hooks';

const Home = () => {
  const { markTag } = useAppSelector((state) => state.brand);
  const company = useAppSelector((state) => state.company);

  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);
  const [showNewMarktagModal, setShowNewMarktagModal] = useState<boolean>(false);
  const [showCodeMarktagModal, setShowCodearktagModal] = useState<boolean>(false);
  const [showGuidedMarktagModal, setShowGuidedMarktagModal] = useState<boolean>(false);

  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>

      <ConnectMarktagModal
        showModal={showMarktagModal}
        setShowModal={setShowMarktagModal}
        setShowCreateNewModal={setShowNewMarktagModal}
      />
      <CreateNewMarktagModal
        showModal={showNewMarktagModal}
        setShowModal={setShowNewMarktagModal}
      />
      <InstallCodeManuallyModal
        showModal={showCodeMarktagModal}
        setShowModal={setShowCodearktagModal}
      />

      <GuidedMarktagModal
        showModal={showGuidedMarktagModal}
        setShowModal={setShowGuidedMarktagModal}
      />

      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Hello, {company?.meta?.userName}</p>
          <p className='text-gray-600 font-normal text-lg'>
            Welcome to your marketing co-pilot captain.
          </p>
        </div>
        <div className='p-12 bg-gray-100 rounded-xl'>
          <div className='flex flex-col justify-center items-center'>
            <div className='gap-6 w-fit grid grid-cols-1 xl:grid-cols-2 justify-center'>
              <ConnectCampaignPlatforms />
              <IntegrateApps />
              {Boolean(markTag) ? (
                <ConnectedMarktag onShowMarktag={() => setShowMarktagModal(true)} />
              ) : (
                <ConnectMarktag onShowMarktag={() => setShowMarktagModal(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
