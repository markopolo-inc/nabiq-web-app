import { Breadcrumbs, Stack } from "@nabiq-ui";
import CampaignDetailsForm from "src/components/Features/Campaigns/CampaignDetailsForm";

const CreateCampaign = () => {
  return (
    <Stack gap={64}>
      <div>
        <Breadcrumbs separator=">">
          <p>Campaigns</p>
          <p>Campaign configuration</p>
        </Breadcrumbs>
      </div>
      <CampaignDetailsForm />
      {/*TODO: Will work later*/}
      {/*<Channels />*/}
    </Stack>
  );
};

export default CreateCampaign;
