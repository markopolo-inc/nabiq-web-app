import { useState } from "react";
import { Button, Group, Stack, TextInput } from "@nabiq-ui";
import { FiPlus } from "@nabiq-icons";

import OptionTabs from "src/components/UI/components/OptionTabs";
import HeaderTitle from "src/layouts/HeaderTitle";
import CampaignGoalModal from "src/components/Features/Campaigns/CampaignGoalModal";

const Campaigns = () => {
  const [active, setActive] = useState<
    "all" | "active" | "processing" | "finished"
  >("all");
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  return (
    <>
      <HeaderTitle>Nabiq | Campaigns</HeaderTitle>

      <CampaignGoalModal
        showModal={showGoalModal}
        setShowModal={setShowGoalModal}
      />
      <Stack gap={64}>
        <div className="flex justify-between">
          <Stack gap={4}>
            <p className="text-gray-900 font-semibold text-3xl">Campaigns</p>
            <p className="text-gray-600 font-normal">
              Create your campaign to effectively target and engage specific
              cohorts
            </p>
          </Stack>
          <Group>
            <Button variant="secondary">How does it work?</Button>
            <Button
              leadingIcon={<FiPlus size={20} color="white" />}
              onClick={() => setShowGoalModal(true)}
            >
              Create campaign
            </Button>
          </Group>
        </div>

        <div className="max-w-[280px]" onClick={() => setShowGoalModal(true)}>
          <Stack
            className="rounded-xl border border-primary-200 bg-primary-25 p-8 shadow-sm cursor-pointer"
            gap={24}
          >
            <div>
              <Button fullWidth={false}>
                <FiPlus size={20} color="white" />
              </Button>
            </div>
            <p className="text-gray-900 font-semibold">
              Create your first campaign
            </p>
          </Stack>
        </div>

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
    </>
  );
};

export default Campaigns;
