import { DatePickerInput, Group, Stack } from "@nabiq-ui";
import { useState } from "react";

const CampaignTiming = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Stack gap={32} w={960} className="mx-auto">
      <Group>
        <DatePickerInput
          dropdownType="modal"
          label="Campaign starts on"
          allowDeselect
          value={value}
          onChange={setValue}
        />
      </Group>
    </Stack>
  );
};

export default CampaignTiming;
