import { Select, Stack, Text, TextArea, TextInput } from "@nabiq-ui";

const CampaignDetailsForm = () => {
  return (
    <Stack gap={32} w={960} className="mx-auto">
      <TextInput label="Campaign name" placeholder="Enter campaign name" />

      <Stack gap={6}>
        <TextArea
          label="Campaign details"
          placeholder="Enter campaign details"
          rows={4}
        />
        <Text size="14px">Microcopy required</Text>
      </Stack>

      <Stack gap={6}>
        <TextInput label="Campaign link" placeholder="www.mywebsite/offer2" />
        <Text size="14px">
          Destination link where you want to redirect users to
        </Text>
      </Stack>

      <Stack gap={6}>
        <Select
          label="Content tone"
          placeholder="Pick value"
          defaultValue="Content tone"
          data={["Content tone"]}
        />

        <Text size="14px">
          The tone of the content we will generate for you
        </Text>
      </Stack>
    </Stack>
  );
};

export default CampaignDetailsForm;
