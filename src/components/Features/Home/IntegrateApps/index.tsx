import { Button, Image } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";
import { useNavigate } from "react-router-dom";

import KlavyoLogo from "assets/integraions/klavioLogo.svg";
import HubspotLogo from "assets/integraions/HubspotLogo.svg";
import PostMarkLogo from "assets/integraions/PostmarkLogo.png";

const IntegrateApps = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex gap-3 flex-nowrap">
        <div>
          <FiZap size={32} color="#EE46BC" fill="#EE46BC" />
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-lg font-semibold">
              Integrate apps
            </p>
            <p className="text-gray-600 text-sm font-normal">
              Integrate email, sms and push notification apps to build custom
              marketing funnels.
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center">
            <Button
              variant="secondary-black"
              onClick={() => navigate("/integrations")}
            >
              Integrate
            </Button>
            <div className="flex gap-4">
              <div>
                <Image src={KlavyoLogo} style={{ width: 20 }} />
              </div>
              <div>
                <Image src={HubspotLogo} style={{ width: 20 }} />
              </div>
              <div>
                <Image src={PostMarkLogo} style={{ width: 20 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateApps;
