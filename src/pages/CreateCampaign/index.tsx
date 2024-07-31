import { Breadcrumbs, Stack } from "@nabiq-ui";

const CreateCampaign = () => {
  return (
    <Stack gap={64}>
      <div>
        <Breadcrumbs separator=">">
          <p>Campaigns</p>
          <p>Campaign configuration</p>
        </Breadcrumbs>
      </div>
      {/*TODO: Will work later*/}
      {/*<Channels />*/}
    </Stack>
  );
};

export default CreateCampaign;
