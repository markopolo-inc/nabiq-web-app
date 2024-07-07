import { Button } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";
import { useNavigate } from "react-router-dom";

import AppLogo, { AppNameType } from "src/components/UI/AppLogo";

const IntegrateApps = () => {
  const navigate = useNavigate();
  const apps = ["klaviyo", "hubspot", "postmark"];
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
              {apps.map((item) => (
                <div>
                  <AppLogo app={item as AppNameType} key={item} width={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateApps;
