
import { Badge, Button, Group, HorizontalFlow, Select, Text, TextInput } from "@nabiq-ui";
import { XClose, FiMail01, ArrowRight, ArrowUp } from "@nabiq-icons";
import { useMemo } from "react";

import DiscoverBali from "../../components/Features/Monitoring/DiscoverBali"
import Cohort from "../../components/Features/Monitoring/Cohort"
import Platform from "../../components/Features/Monitoring/Platform"

const Test = () => {

  const nodeTypes = useMemo(() => ({
    DiscoverBali: DiscoverBali,
    Cohort1: Cohort,
    Cohort2: Cohort,
    Cohort3: Cohort,
    Cohort4: Cohort,
    Platform: Platform,
  }), []);

  const initialNodes = [
    {
      id: 'discover_bali',
      type: 'DiscoverBali',
      position: { x: 0, y: 100 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
    {
      id: 'cohort_1',
      type: 'Cohort1',
      position: { x: 390, y: 0 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
    {
      id: 'cohort_2',
      type: 'Cohort2',
      position: { x: 390, y: 100 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
    {
      id: 'cohort_3',
      type: 'Cohort3',
      position: { x: 390, y: 200 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
    {
      id: 'cohort_4',
      type: 'Cohort4',
      position: { x: 390, y: 300 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
    {
      id: 'platform',
      type: 'Platform',
      position: { x: 860, y: 150 },
      data: { value: 123 },
      dragHandle: '.custom-drag-handle',
    },
  ];

  const initialEdges = [
    {
      id: 'edge_1',
      source: 'discover_bali',
      target: 'cohort_1',
      sourceHandle: 'a',
      style: { stroke: '#9AA4B2' },
    },
    {
      id: 'edge_2',
      source: 'discover_bali',
      target: 'cohort_2',
      targetPosition: 'right',
      sourceHandle: 'a',
      style: { stroke: '#9AA4B2' },
    },
    {
      id: 'edge_3',
      source: 'discover_bali',
      target: 'cohort_3',
      sourceHandle: 'a',
      style: { stroke: '#9AA4B2' },
    },
    {
      id: 'edge_4',
      source: 'discover_bali',
      target: 'cohort_4',
      sourceHandle: 'a',
      style: { stroke: '#9AA4B2' },
    },
    {
      id: 'edge_5',
      source: 'cohort_2',
      target: 'platform',
      sourceHandle: '',
      style: { stroke: '#9AA4B2' },
    },
  ];


  return (
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
        Button<div className="h-[800px] p-20">
          <HorizontalFlow nodeTypes={nodeTypes} initialNodes={initialNodes} initialEdges={initialEdges} />
        </div>
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

      <div className="h-[800px] p-4">
        <HorizontalFlow nodeTypes={nodeTypes} initialNodes={initialNodes} initialEdges={initialEdges} />
      </div>
    </div>
  );
};

export default Test;
