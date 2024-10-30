import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import {
  ConnectCampaignPlatforms,
  ConnectMarktag,
  ConnectedMarktag,
  IntegrateApps,
  MarktagCreationsModals,
} from 'src/components/modules/home';
import { useAppSelector } from 'store/hooks';

const Home = () => {
  const { markTag } = useAppSelector((state) => state.brand);
  const company = useAppSelector((state) => state.company);

  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>

      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />

      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Hello, {company?.meta?.userName}</p>
          <p className='text-gray-600 font-normal text-lg'>
            Welcome to your marketing co-pilot captain.
          </p>
        </div>
        <div className='p-12 bg-gray-100 rounded-xl'>
          <div className='flex flex-col justify-center items-center'>
            <div className='gap-3 w-fit grid grid-cols-1 xl:grid-cols-2 justify-center'>
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
