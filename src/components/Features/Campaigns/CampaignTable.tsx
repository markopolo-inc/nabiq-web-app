import { useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableRow,
  Td,
  Group,
  TextInput,
} from "@nabiq-ui";

import OptionTabs from "src/components/UI/components/OptionTabs";

const CampaignTable = () => {
  const [active, setActive] = useState<
    "all" | "active" | "processing" | "finished"
  >("all");

  const banner = (
    <Stack gap={0}>
      <Group className="px-8 py-5 border-b border-b-gray-200">
        <p className="text-gray-900 font-semibold text-lg">Campaign</p>
      </Group>
      <Stack className="py-3 px-4">
        <Group justify="space-between">
          <OptionTabs
            active={active}
            setActive={setActive}
            options={[
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "processing", label: "Processing" },
              { value: "finished", label: "Finished" },
            ]}
          />
          <TextInput
            // styles={{ input: { paddingLeft: 40 } }}
            // leftSection={<FiSearchLg size={26} color="#697586" />}
            // leftSectionPointerEvents="none"
            className="w-[400px]"
            placeholder="Search..."
          />
        </Group>
      </Stack>
    </Stack>
  );
  return (
    <Table banner={banner} withBanner>
      {/* <TableHead>
        <Th>hello</Th>
      </TableHead> */}
      <TableBody>
        <TableRow>
          <Td className="py-[48px]">
            <Stack align="center" gap={4}>
              <p className="text-gray-900 font-semibold text-base">
                No campaigns created yet
              </p>
              <p className="text-gray-600 text-sm">
                Your created campaigns will show up here.
              </p>
            </Stack>
          </Td>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CampaignTable;
