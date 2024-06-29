import { Button } from "@nabiq-ui";
import { FiHexagon01 } from "@nabiq-icons";

const ConnectCampaignPlatforms = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex gap-3 flex-nowrap">
        <div>
          <FiHexagon01 size={32} color="#15B79E" fill="#15B79E" />
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-lg font-semibold">
              Connect campaign platforms
            </p>
            <p className="text-gray-600 text-sm font-normal">
              Connect and import data from ads you have run on facebook ads,
              google ads and linkedin ads.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCampaignPlatforms;
