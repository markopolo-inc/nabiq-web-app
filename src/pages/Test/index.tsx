import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  FileInput,
  Group,
  HorizontalFlow,
  Select,
  Text,
  TextInput,
  useDisclosure,
} from "@nabiq-ui";
import { XClose, FiMail01, ArrowRight, ArrowUp } from "@nabiq-icons";
import { useMemo, useState } from "react";

import DiscoverBali from "../../components/Features/Monitoring/DiscoverBali";
import Cohort from "../../components/Features/Monitoring/Cohort";
import Platform from "../../components/Features/Monitoring/Platform";

const index = () => {
  const [file, setFile] = useState(null);
  console.log(file);
  const [opened, { close }] = useDisclosure(true);

  const nodeTypes = useMemo(
    () => ({
      DiscoverBali: DiscoverBali,
      Cohort1: Cohort,
      Cohort2: Cohort,
      Cohort3: Cohort,
      Cohort4: Cohort,
      Platform: Platform,
    }),
    [],
  );

  const initialNodes = [
    {
      id: "discover_bali",
      type: "DiscoverBali",
      position: { x: 0, y: 100 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "cohort_1",
      type: "Cohort1",
      position: { x: 390, y: 0 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "cohort_2",
      type: "Cohort2",
      position: { x: 390, y: 100 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "cohort_3",
      type: "Cohort3",
      position: { x: 390, y: 200 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "cohort_4",
      type: "Cohort4",
      position: { x: 390, y: 300 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "platform",
      type: "Platform",
      position: { x: 860, y: 150 },
      data: { value: 123 },
      dragHandle: ".custom-drag-handle",
    },
  ];

  const initialEdges = [
    {
      id: "edge_1",
      source: "discover_bali",
      target: "cohort_1",
      sourceHandle: "a",
      style: { stroke: "#9AA4B2" },
    },
    {
      id: "edge_2",
      source: "discover_bali",
      target: "cohort_2",
      targetPosition: "right",
      sourceHandle: "a",
      style: { stroke: "#9AA4B2" },
    },
    {
      id: "edge_3",
      source: "discover_bali",
      target: "cohort_3",
      sourceHandle: "a",
      style: { stroke: "#9AA4B2" },
    },
    {
      id: "edge_4",
      source: "discover_bali",
      target: "cohort_4",
      sourceHandle: "a",
      style: { stroke: "#9AA4B2" },
    },
    {
      id: "edge_5",
      source: "cohort_2",
      target: "platform",
      sourceHandle: "",
      style: { stroke: "#9AA4B2" },
    },
  ];

  return (
    <>
      <div className="p-32">
        <div className="w-[564px] h-[126px]">
          <FileInput onChange={setFile} />
        </div>
      </div>
      <div className="h-[800px] p-4">
        <HorizontalFlow
          nodeTypes={nodeTypes}
          initialNodes={initialNodes}
          initialEdges={initialEdges}
        />
      </div>

      <div className="space-y-4 space-x-4">
        <Text className="display-lg text-primary-500 font-semibold">Nabiq</Text>
        <Button>Button CTA</Button>
        <Button variant="primary-destructive" size="sm">
          Button
        </Button>
        <Button variant="secondary" size="lg">
          Button
        </Button>
        <Button
          variant="secondary-black"
          size="md"
          leadingIcon={<FiMail01 size={16} />}
        >
          Button
        </Button>
        <Button variant="tertiary-gray" size="lg">
          Button
        </Button>
        <Button variant="tertiary" size="sm">
          Button
        </Button>
        <Button variant="tertiary-destructive" size="sm">
          Button
        </Button>
        <Button variant="link" size="sm">
          Button
        </Button>

        <div className="w-72 space-y-6">
          <TextInput
            label="Email"
            leftSection={<FiMail01 size={16} />}
            placeholder="Enter email"
          />

          <Select
            placeholder="Select team member"
            label="Team member"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </div>

        <Group gap={20}>
          {[
            "gray",
            "primary",
            "error",
            "warning",
            "success",
            "bluelight",
            "blue",
            "purple",
            "pink",
            "orange",
          ].map((item, i) => (
            <Group key={i} gap={64}>
              <Group>
                <Badge color={item as any} size="sm">
                  Label
                </Badge>
                <Badge color={item as any} size="md">
                  Label
                </Badge>
                <Badge color={item as any} size="lg">
                  Label
                </Badge>
              </Group>
              <Group>
                <Badge
                  color={item as any}
                  size="sm"
                  rightSection={<XClose color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="md"
                  rightSection={<XClose color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="lg"
                  rightSection={<XClose color={"currentColor"} />}
                >
                  Label
                </Badge>
              </Group>
              <Group>
                <Badge
                  color={item as any}
                  size="sm"
                  rightSection={<ArrowRight color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="md"
                  rightSection={<ArrowRight color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="lg"
                  rightSection={<ArrowRight color={"currentColor"} />}
                >
                  Label
                </Badge>
              </Group>
              <Group>
                <Badge
                  color={item as any}
                  size="sm"
                  leftSection={<ArrowUp color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="md"
                  leftSection={<ArrowUp color={"currentColor"} />}
                >
                  Label
                </Badge>
                <Badge
                  color={item as any}
                  size="lg"
                  leftSection={<ArrowUp color={"currentColor"} />}
                >
                  Label
                </Badge>
              </Group>
            </Group>
          ))}
        </Group>

        <Drawer opened={opened} onClose={close} position="right" size="lg">
          <DrawerHeader>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <div className="font-open text-lg font-semibold leading-7 text-left">
                  Discover Bali
                </div>

                <div className="p-[4px_12px] rounded-2xl border border-gray-200 font-open text-sm font-medium leading-5 text-center text-gray-700">
                  Step 1
                </div>
              </div>
              <div className="font-open text-sm font-normal leading-5 text-left">
                Sent on Jul 4, 2024 at 12:13 am
              </div>
            </div>
          </DrawerHeader>

          <DrawerBody>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col gap-8 w-full">
              <div className="flex justify-between w-full">
                <div className="flex gap-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_84_4432)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32 29.25V30.75C31.3097 30.75 30.75 31.3097 30.75 32H29.25C29.25 31.3097 28.6903 30.75 28 30.75C27.3097 30.75 26.75 31.3097 26.75 32H25.25C25.25 31.3097 24.6903 30.75 24 30.75C23.3097 30.75 22.75 31.3097 22.75 32H21.25C21.25 31.3097 20.6903 30.75 20 30.75C19.3097 30.75 18.75 31.3097 18.75 32H17.25C17.25 31.3097 16.6903 30.75 16 30.75C15.3097 30.75 14.75 31.3097 14.75 32H13.25C13.25 31.3097 12.6903 30.75 12 30.75C11.3097 30.75 10.75 31.3097 10.75 32H9.25001C9.25001 31.3097 8.69036 30.75 8 30.75C7.30964 30.75 6.75 31.3097 6.75 32H5.25001C5.25001 31.5534 5.01175 31.1408 4.625 30.9174C4.23825 30.6942 3.76175 30.6942 3.375 30.9174C2.98825 31.1408 2.74999 31.5534 2.74999 32H1.25001C1.25001 31.3097 0.690356 30.75 0 30.75V29.25C0.690356 29.25 1.25001 28.6903 1.25001 28C1.25001 27.3097 0.690356 26.75 0 26.75V25.25C0.690356 25.25 1.25001 24.6903 1.25001 24C1.25001 23.3097 0.690356 22.75 0 22.75V21.25C0.690356 21.25 1.25001 20.6903 1.25001 20C1.25001 19.3097 0.690356 18.75 0 18.75V17.25C0.690356 17.25 1.25001 16.6903 1.25001 16C1.25001 15.3097 0.690356 14.75 0 14.75V13.25C0.690356 13.25 1.25001 12.6903 1.25001 12C1.25001 11.3097 0.690356 10.75 0 10.75V9.25001C0.690356 9.25001 1.25001 8.69036 1.25001 8C1.25001 7.30964 0.690356 6.75 0 6.75V5.25001C0.690356 5.24999 1.25001 4.69036 1.25001 4C1.25001 3.30964 0.690356 2.75001 0 2.74999V1.25001C0.690356 1.25001 1.25001 0.690356 1.25001 0H2.74999C2.75001 0.690356 3.30964 1.25001 4 1.25001C4.69036 1.25001 5.24999 0.690356 5.25001 0H6.75C6.75 0.690356 7.30964 1.25001 8 1.25001C8.69036 1.25001 9.25001 0.690356 9.25001 0H10.75C10.75 0.690356 11.3097 1.25001 12 1.25001C12.6903 1.25001 13.25 0.690356 13.25 0H14.75C14.75 0.690356 15.3097 1.25001 16 1.25001C16.6903 1.25001 17.25 0.690356 17.25 0H18.75C18.75 0.690356 19.3097 1.25001 20 1.25001C20.6903 1.25001 21.25 0.690356 21.25 0H22.75C22.75 0.690356 23.3097 1.25001 24 1.25001C24.6903 1.25001 25.25 0.690356 25.25 0H26.75C26.75 0.690356 27.3097 1.25001 28 1.25001C28.6903 1.25001 29.25 0.690356 29.25 0H30.75C30.75 0.690356 31.3097 1.25001 32 1.25001V2.74999C31.3097 2.74999 30.75 3.30964 30.75 4C30.75 4.69036 31.3097 5.25001 32 5.25001V6.75C31.3097 6.75 30.75 7.30964 30.75 8C30.75 8.69036 31.3097 9.25001 32 9.25001V10.75C31.3097 10.75 30.75 11.3097 30.75 12C30.75 12.6903 31.3097 13.25 32 13.25V14.75C31.5534 14.75 31.1408 14.9883 30.9174 15.375C30.6942 15.7617 30.6942 16.2383 30.9174 16.625C31.1408 17.0117 31.5534 17.25 32 17.25V18.75C31.3097 18.75 30.75 19.3097 30.75 20C30.75 20.6903 31.3097 21.25 32 21.25V22.75C31.3097 22.75 30.75 23.3097 30.75 24C30.75 24.6903 31.3097 25.25 32 25.25V26.75C31.3097 26.75 30.75 27.3097 30.75 28C30.75 28.6903 31.3097 29.25 32 29.25Z"
                        fill="#FFDE00"
                      />
                      <path
                        d="M9.28345 22.8058H10.2811C10.7935 22.8058 11.117 22.4752 11.117 21.9518V10.2708C11.117 9.74733 10.7935 9.41674 10.2811 9.41674H9.28345V6.82709H16.51C20.3929 6.82709 23.4668 8.8382 23.4668 12.6676C23.4668 16.5245 20.3929 18.5357 16.51 18.5357H14.0292V21.9518C14.0292 22.4752 14.3528 22.8058 14.8921 22.8058H16.9144V25.423H9.28345V22.8058ZM16.2942 15.8357C18.8559 15.8357 20.3389 14.7338 20.3389 12.7227C20.3389 10.6565 18.8559 9.60959 16.2942 9.60959H14.0292V15.8634H16.2942V15.8357Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84_4432">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="font-open text-lg font-semibold leading-7 text-gray-900">
                    E-mail
                  </div>
                </div>

                <div className="self-end">
                  <div className="flex items-center gap-1 rounded-2xl py-0.5 px-2 border border-success-200 bg-success-50 font-open text-xs font-medium leading-4 text-center text-success-700">
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>

                    <div>Sent on Jul 4, 2024 at 12:13 am </div>
                  </div>
                </div>
              </div>

              <div className="font-open text-xs font-medium leading-7 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quod nobis magni qui tenetur non eum voluptatibus,
                maxime quos, ducimus ullam voluptatum nam ipsam soluta numquam
                asperiores pariatur corporis facere necessitatibus? Dolorum vero
                deserunt, provident aperiam possimus modi esse quaerat, facilis
                qui accusamus animi aspernatur, maiores tenetur non hic
                inventore? Neque aliquid quos, fugiat a dicta eos nulla veniam
                sapiente explicabo necessitatibus officiis odit, molestias
                molestiae non debitis, ipsa iure quisquam. Facere iusto
                accusantium debitis cum unde voluptatibus autem magnam?
                Voluptatum odit nisi reiciendis quibusdam, ex beatae ipsam
                expedita nam veritatis.
              </div>

              <div className="flex flex-col items-start p-6 gap-4 self-stretch rounded-lg bg-gray-50 font-open text-xs font-semibold leading-4 text-gray-600">
                <div className="flex justify-between items-center self-stretch">
                  <div>Open rate</div>
                  <div className="font-normal">12.57%</div>
                </div>

                <div className="flex justify-between items-center self-stretch">
                  <div>CTR</div>
                  <div className="font-normal">12.57%</div>
                </div>

                <div className="flex justify-between items-center self-stretch">
                  <div>Conversion rate</div>
                  <div className="font-normal">12.57%</div>
                </div>

                <div className="flex justify-between items-center self-stretch">
                  <div>Revenue</div>
                  <div className="font-normal">12.57%</div>
                </div>
              </div>
            </div>
          </DrawerBody>
        </Drawer>
      </div>
    </>
  );
};

export default index;
