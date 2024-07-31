import { Breadcrumbs, Button, Stack } from "@nabiq-ui";
import CampaignDetailsForm from "src/components/Features/Campaigns/CampaignDetailsForm";
import HeaderTitle from "src/layouts/HeaderTitle.tsx";
import Stepper from "src/components/Features/Campaigns/Stepper";

const CreateCampaign = () => {
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
              <Button variant="secondary" disabled>
                Continue
              </Button>
            </Stack>
          </div>
        </Stack>

        <Stack gap={64} w={960} className="mx-auto">
          <Stepper />

          <Stack gap={32}>
            {/*TODO: Will work later*/}
            <CampaignDetailsForm />
            {/*<CampaignTiming />*/}
            {/*<Channels />*/}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateCampaign;
