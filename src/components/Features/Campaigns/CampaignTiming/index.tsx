import {
  Checkbox,
  DatePickerInput,
  Group,
  Select,
  Stack,
  Text,
} from "@nabiq-ui";
import { useState } from "react";

const CampaignTiming = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Stack gap={32} w={960} className="mx-auto">
      <Stack gap={20}>
        <Group grow className="justify-between">
          <DatePickerInput
            dropdownType="modal"
            label="Campaign starts on"
            allowDeselect
            value={value}
            onChange={setValue}
            placeholder="Select date"
          />

          <Select
            label="Time"
            defaultValue="Applicable across all time zones"
            data={["Applicable across all time zones"]}
          />
        </Group>

        <Checkbox label="Same time for all steps" />
      </Stack>

      <Stack gap={20}>
        <Select
          label="What is the maximum no. of steps you want for this campaign?"
          defaultValue="Select steps"
          data={["Select steps"]}
          placeholder="Select steps"
        />

        <Text size="14px" className="text-gray-600">
          Interval at which each step will be generated
        </Text>
      </Stack>

      <Stack gap={20}>
        <Select
          label="What should be the minimum delay between each step?"
          defaultValue="Select steps"
          data={["Select steps"]}
          placeholder="Select steps"
        />

        <Text size="14px" className="text-gray-600">
          Interval at which each step will be generated
        </Text>
      </Stack>

      <DatePickerInput
        dropdownType="modal"
        label="Campaign ends on"
        allowDeselect
        value={value}
        onChange={setValue}
        placeholder="Select date"
      />
    </Stack>
  );
};

export default CampaignTiming;
