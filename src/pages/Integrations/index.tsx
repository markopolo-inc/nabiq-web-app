import { useState } from "react";
import { Button } from "@nabiq-ui";
import { FiZap } from "@nabiq-icons";

import GatewayLogo from "components/UI/GatewayLogo";
import HeaderTitle from "layouts/HeaderTitle";
import { buildQueryString } from "utils/stringUtils";
import { getAuthToken } from "utils/auth";
import { useAppSelector } from "store/hooks";
import ApiKeyModal from "components/Features/Integrations/Modals/ApiKeyModal";
import { appCategories, appOptions } from "lib/integration.lib";
import type { GatewayType } from "interfaces/brand.interface";

const Integrations = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [selectedCategory, setSelectedCategory] = useState<
    "email" | "sms" | "push"
  >("email");

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
        <div className="flex flex-col gap-6">
          <div className="border border-gray-200 rounded-xl w-fit p-2 flex gap-3 bg-gray-50">
            {appCategories.map((item) => {
              const isSelected = selectedCategory === item.key;
              const Icon = item.Icon;
              return (
                <span
                  onClick={() =>
                    setSelectedCategory(item.key as "email" | "sms" | "push")
                  }
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: isSelected
                      ? "0.75px solid rgba(13, 18, 28, 0.48)"
                      : "none",
                    background: isSelected ? "#FFF" : "#F8FAFC",
                    boxShadow: isSelected
                      ? "0px 1px 2px 0px rgba(13, 18, 28, 0.48), 0px 0px 1px 0px rgba(13, 18, 28, 0.08)"
                      : "none",
                    color: isSelected ? "#364152" : "#697586",
                    fontWeight: 600,
                  }}
                >
                  <Icon size={20} strokeWidth={2.2} /> {item.title}
                </span>
              );
            })}
          </div>
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {appOptions
              ?.filter((item) => item?.category === selectedCategory)
              .map((app) => {
                return (
                  <div
                    className="rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8"
                    key={app.gateway}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <GatewayLogo
                          app={app.gateway as GatewayType}
                          width={32}
                        />
                        <p className="text-gray-900 font-semibold text-lg">
                          {app.name}
                        </p>
                      </div>
                      <p className="mt-6">{app.headline}</p>
                    </div>
                    <div className="flex gap-3">
                      {app.isOauthIntegration && (
                        <Button
                          leadingIcon={<FiZap fill="white" size={22} />}
                          onClick={async () => {
                            window.location.href = `${
                              import.meta.env.VITE_BASE_API_URL
                            }/${app.gateway}/oauth?${buildQueryString({
                              brandId,
                              token: await getAuthToken(),
                              redirectUri: window.location.href,
                            })}`;
                          }}
                        >
                          Integrate
                        </Button>
                      )}

                      {app.isKeyIntegration && <ApiKeyModal app={app} />}

                      <Button variant="tertiary-gray">Learn more</Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
