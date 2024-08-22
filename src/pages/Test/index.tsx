
import { Badge, Button, Group, HorizontalFlow, Select, Text, TextInput } from "@nabiq-ui";
import { XClose, FiMail01, ArrowRight, ArrowUp } from "@nabiq-icons";
import { Edge, Position, Node } from "@xyflow/react";

const initialNodes: Node[] = [
  {
    id: 'horizontal-1',
    sourcePosition: Position.Right,
    type: 'input',
    dragHandle: '.custom-drag-handle',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
    style: {
      border: '1px solid #ddd',
    },
  },
  {
    id: 'horizontal-2',
    dragHandle: '.custom-drag-handle',
    targetPosition: Position.Left,
    data: { label: 'A Node' },
    position: { x: 250, y: 0 },
    style: {
      border: '1px solid #ddd',
    },
  },
  {
    id: 'horizontal-3',
    dragHandle: '.custom-drag-handle',
    targetPosition: Position.Left,
    data: { label: 'Node 3' },
    position: { x: 250, y: 160 },
    style: {
      border: '1px solid #ddd',
    },
  }
];

const initialEdges: Edge[] = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
  },
];

const Test = () => {
  return (
    <div className="space-y-4 space-x-4">
      <div className="h-[800px]">
        <HorizontalFlow initialEdges={initialEdges} initialNodes={initialNodes} />
      </div>
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
    </div>
  );
};

export default Test;
