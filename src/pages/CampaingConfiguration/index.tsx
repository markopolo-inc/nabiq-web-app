import { Button, Stack } from "@nabiq-ui";
import HeaderTitle from "src/layouts/HeaderTitle";
import Stepper from "src/components/Features/Campaigns/Stepper";

const CampaignConfigurations = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>

      <Stack gap={64}>
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

        <Stack w={960} className="mx-auto">
          <Stepper />
        </Stack>
      </Stack>
    </>
  );
};

export default CampaignConfigurations;
