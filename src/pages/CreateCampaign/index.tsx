import { Breadcrumbs, Button, Stack } from "@nabiq-ui";
import HeaderTitle from "src/layouts/HeaderTitle.tsx";
import Stepper from "src/components/Features/Campaigns/Stepper";
import CampaignChannels from "src/components/Features/Campaigns/CampaignChannels";
import { useState } from "react";
import CampaignDetailsForm from "src/components/Features/Campaigns/CampaignDetailsForm";
import CampaignTiming from "src/components/Features/Campaigns/CampaignTiming";

const CreateCampaign = () => {
  const [active, setActive] = useState<number>(0);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>

      <Stack gap={78}>
        <Stack gap={20}>
          <Breadcrumbs separator=">">
            <p>Campaigns</p>
            <p>Campaign configuration</p>
          </Breadcrumbs>

          <div className="flex justify-between">
            <Stack>
              <p className="text-gray-900 font-semibold text-3xl">
                Configure your campaign
              </p>
            </Stack>
            <Stack>
              <Button
                variant="secondary"
                disabled={active === 2}
                onClick={nextStep}
              >
                Continue
              </Button>
            </Stack>
          </div>
        </Stack>

        <Stack gap={64} w={960} className="mx-auto">
          <Stepper active={active} setActive={setActive} />

          <Stack gap={32}>
            {active === 0 ? (
              <CampaignDetailsForm />
            ) : active === 1 ? (
              <CampaignTiming />
            ) : (
              <CampaignChannels />
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateCampaign;
