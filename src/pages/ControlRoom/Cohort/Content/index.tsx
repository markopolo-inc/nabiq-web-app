import { useParams } from "react-router-dom";
import { Breadcrumbs, Button, Group, Stack } from "@nabiq-ui";
import { useGetConfigContentQuery } from "src/store/controlRoom/controlRoom.api";

const Content = () => {
  const { configId } = useParams();

  const { data } = useGetConfigContentQuery(configId);
  // console.log(data);

  const contents = data?.data?.contents || [];

  return (
    <Stack gap={20}>
      <Breadcrumbs />
      <Stack align="center" gap={32}>
        {contents?.map((content, idx) => (
          <Stack
            key={idx}
            className="rounded-xl border-gray-200 border p-6 max-w-[744px]"
            gap={24}
          >
            <Stack className="font-medium text-[12px] text-gray-600">
              <p>Subject: {content?.subject}</p>
              <p>{content?.content}</p>
            </Stack>
            <Group justify="flex-end">
              <Button variant="secondary" size="sm">
                Irrelavant
              </Button>
              <Button variant="secondary-black" size="sm">
                I find this relevant
              </Button>
            </Group>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Content;
