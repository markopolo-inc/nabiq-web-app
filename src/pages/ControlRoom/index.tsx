import { OptionTabs, Stack } from "@nabiq-ui";
import { FiHourglass03, FiCheckVerified01 } from "@nabiq-icons";
import { useState } from "react";
import { useGetConfigsQuery } from "src/store/controlRoom/controlRoom.api";

export const appCategories = [
  {
    value: "queued",
    label: "Queued",
    icon: FiHourglass03,
  },
  {
    value: "published",
    label: "Published",
    icon: FiCheckVerified01,
  },
];

const ControlRoom = () => {
  const [category, setCategory] = useState<"queued" | "published">("queued");

  const { data } = useGetConfigsQuery({ type: category, limit: 10, page: 1 });

  console.log(data);
  return (
    <Stack gap={32}>
      <Stack gap={64}>
        <Stack>
          <Stack gap={4}>
            <p className="text-gray-900 text-3xl font-semibold">Control room</p>
            <p className="text-gray-600 text-base font-normal">
              View cohorts and approve content generated for campaigns.
            </p>
          </Stack>
        </Stack>
        <OptionTabs
          setActive={setCategory}
          active={category}
          options={appCategories}
        />
      </Stack>
    </Stack>
  );
};

export default ControlRoom;
