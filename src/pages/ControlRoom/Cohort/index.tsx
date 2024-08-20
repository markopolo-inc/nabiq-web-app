import { Breadcrumbs, Button, Group, Stack } from "@nabiq-ui";

const Cohort = () => {
  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />

        <Group justify="space-between">
          <Stack gap={4}>
            <p>Title</p>
            <p>Cohorts for the campaign which will be updated in each step.</p>
          </Stack>
          <Button>Back to control room</Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default Cohort;
