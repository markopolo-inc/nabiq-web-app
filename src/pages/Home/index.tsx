import ConnectCampaignPlatforms from "src/components/Features/Home/ConnectCampaignPlatforms";
import ConnectMarktag from "src/components/Features/Home/ConnectMarktag";
import IntegrateApps from "src/components/Features/Home/IntegrateApps";
import HeaderTitle from "src/layouts/HeaderTitle";
import { useAppSelector } from "src/store/hooks";

const Home = () => {
  const { userName } = useAppSelector((state) => state.user);
  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>

      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <p className="text-gray-900 font-semibold text-4xl">
            Hello, {userName}
          </p>
          <p className="text-gray-600 font-normal text-lg">
            Welcome to your marketing co-pilot captain.
          </p>
        </div>
        <div className="p-12 bg-gray-100 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <div className="gap-6 w-fit grid grid-cols-1 lg:grid-cols-2">
              <ConnectMarktag />
              <IntegrateApps />
              <ConnectCampaignPlatforms />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
