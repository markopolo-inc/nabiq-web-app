import { Button } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";

import AppLogo from "src/components/UI/AppLogo";
import HeaderTitle from "layouts/HeaderTitle";
import {} from "src/store/integrations/integrations.api";
import { buildQueryString } from "src/utils/stringUtils";
import { getAuthToken } from "src/utils/auth";

import { useAppSelector } from "src/store/hooks";

import ApiKeyModal from "./Modals/ApiKeyModal";

const Integrations = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);

  return (
    <>
      <HeaderTitle>Nabiq - Integrations</HeaderTitle>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <p className="text-gray-900 font-semibold text-4xl">Integrations</p>
          <p className="text-gray-600 font-normal text-lg">
            Integrate email, sms and push notification apps to build custom
            marketing funnels.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <AppLogo app="klaviyo" width={32} />
                <p className="text-gray-900 font-semibold text-lg">Klaviyo</p>
              </div>
              <p className="mt-6">
                Enhance your e-commerce marketing with data-driven email
                automation.
              </p>
            </div>
            <div className="flex gap-3">
              <ApiKeyModal appName="klaviyo" />
              <Button variant="tertiary-gray">Learn more</Button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <AppLogo app="hubspot" width={32} />
                <p className="text-gray-900 font-semibold text-lg">Hubspot</p>
              </div>
              <p className="mt-6">
                Increase sales with personalized email campaigns designed for
                online retailers.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                leadingIcon={<FiZap fill="white" size={22} />}
                onClick={async () => {
                  window.location.href = `${
                    import.meta.env.VITE_BASE_API_URL
                  }/hubspot/oauth?${buildQueryString({
                    brandId,
                    token: await getAuthToken(),
                    redirectUri:
                      window.location.hostname + window.location.pathname,
                  })}`;
                }}
              >
                Integrate
              </Button>
              <Button variant="tertiary-gray">Learn more</Button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <AppLogo app="postmark" width={32} />
                <p className="text-gray-900 font-semibold text-lg">Postmark</p>
              </div>
              <p className="mt-6">
                Increase sales with personalized email campaigns designed for
                online retailers.
              </p>
            </div>
            <div className="flex gap-3">
              <ApiKeyModal appName="postmark" />
              <Button variant="tertiary-gray">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
