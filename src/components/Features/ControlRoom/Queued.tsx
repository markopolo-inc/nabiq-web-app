import { Badge, Button, Group, Stack } from "@nabiq-ui";
import { FiChevronRight, FiDot } from "@nabiq-icons";
import { formatTimeAgo } from "src/utils/date.uitils";
import moment from "moment";
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
                  {item?.name}
                </p>
                <p className="text-gray-600 font-normal text-sm">
                  View cohorts and give feedback on sample funnel contents.
                </p>
              </Stack>
              <Badge color="gray">
                Scheduled for {moment(item?.startDate).format("MMM D, YYYY")}
              </Badge>
            </Stack>
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
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Queued;
