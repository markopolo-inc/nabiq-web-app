import { Badge, Button, Group, Stack, Progress } from "@nabiq-ui";
import { FiChevronRight, FiDot } from "@nabiq-icons";
import { formatTimeAgo } from "src/utils/date.uitils";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

const Queued = ({ configs }) => {
  const navigate = useNavigate();
  return (
    <Stack gap={32}>
      {configs.map((item, idx) => (
        <Stack gap={8} key={idx}>
          <p className="text-gray-600 font-normal text-sm">
            {formatTimeAgo(item.queuedAt)}
          </p>
          <Stack
            className="rounded-xl border-gray-200 border p-6 w-[552px]"
            gap={32}
          >
            <Stack gap={20}>
              <Group justify="space-between">
                <Badge color="gray">Step {item?.step}</Badge>
                {item?.hasFeedBack && (
                  <Badge color="success">
                    <FiDot size={8} color="#17B26A" />
                    Feedback given
                  </Badge>
                )}
              </Group>

              <Stack gap={4}>
                <p className="text-gray-900 font-semibold text-lg">
                  '{item?.name}'{" "}
                  <span className="font-normal">
                    {item?.status === "processing"
                      ? "funnel is processing..."
                      : "funnel is ready to view!"}
                  </span>
                </p>

                <p className="text-gray-600 font-normal text-sm">
                  {item?.status === "processing"
                    ? "Our AI is building you the perfect cohorts and contents within."
                    : "View cohorts and give feedback on sample funnel contents."}
                </p>
              </Stack>
              {item?.status === "processing" ? (
                <div className="flex flex-nowrap items-center justify-between">
                  <div className="w-[75%]">
                    <Progress value={20} color="#2972F5" />
                  </div>

                  <span className="text-gray-700 font-sm font-medium">
                    {item?.timeLeft} left
                  </span>
                </div>
              ) : (
                <Badge color="gray">
                  Scheduled for {moment(item?.startDate).format("MMM D, YYYY")}
                </Badge>
              )}
            </Stack>
            {item?.status === "processing" && (
              <Group>
                <Button
                  trailingIcon={<FiChevronRight />}
                  onClick={() =>
                    navigate(`/control-room/cohort/content/${item?.id}`)
                  }
                >
                  View content sample
                </Button>
                <Button
                  variant="secondary-black"
                  onClick={() => navigate(`/control-room/cohort/${item?.id}`)}
                >
                  View cohort
                </Button>
              </Group>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Queued;
