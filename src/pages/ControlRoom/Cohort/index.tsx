import { Breadcrumbs, Button, Group, Stack } from "@nabiq-ui";
import {
  useNavigate,
  // useParams
} from "react-router-dom";
// import { useGetConfigCohortQuery } from "src/store/controlRoom/controlRoom.api";

const Cohort = () => {
  // const { configId } = useParams();
  const navigate = useNavigate();

  // const { data } = useGetConfigCohortQuery(configId);

  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />

        <Group justify="space-between">
          <Stack gap={4}>
            <p>Title</p>
            <p>Cohorts for the campaign which will be updated in each step.</p>
          </Stack>
          <Button onClick={() => navigate("/control-room")}>
            Back to control room
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default Cohort;
