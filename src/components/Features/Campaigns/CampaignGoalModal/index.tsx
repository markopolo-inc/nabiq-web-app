import { Button, Group, Modal, Stack } from "@nabiq-ui";
import {
  FiCursorClick01,
  FiZapFast,
  FiInfinity,
  FiHelpCircle,
} from "@nabiq-icons";
import React from "react";

const goals = [
  {
    title: "Acquisition",
    headline: "To acquire new customers either for paying, trial or freemium.",
    icon: FiZapFast,
    color: "#EE46BC",
  },
  {
    title: "Activation",
    headline: "To convert trail/freemium users to paying customers.",
    icon: FiCursorClick01,
    color: "#2E90FA",
  },
  {
    title: "Retention",
    headline: "To push recurring subscription, cross-sell and upsell.",
    icon: FiInfinity,
    color: "#17B26A",
  },
];

const ModalBody = ({ setOpened }) => {
  return (
    <Stack className="p-8" gap={64} align="center">
      <Stack align="center" gap={8}>
        <p className="text-gray-900 text-[24px] font-semibold">New campaign</p>
        <p className="text-gray-600 text-base font-normal">
          Select your campaign goal
        </p>
      </Stack>
      <Stack align="center">
        <Group>
          {goals?.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <Stack
                gap={24}
                key={idx}
                className="w-[310px] p-8 border shadow-sm border-gray-200 rounded-xl"
              >
                <Group justify="end">
                  <FiHelpCircle
                    color="#9AA4B2"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                </Group>
                <Stack align="center">
                  <Icon size={32} color={goal.color} />
                  <p className="text-gray-900 font-semibold text-lg">
                    {goal.title}
                  </p>
                </Stack>
                <p className="text-gray-600 font-normal text-sm text-center">
                  {goal.headline}
                </p>
                <Button onClick={() => setOpened(false)}>Create</Button>
              </Stack>
            );
          })}
        </Group>
      </Stack>
    </Stack>
  );
};

const CampaignGoalModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      size="fit-content"
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};

export default CampaignGoalModal;
