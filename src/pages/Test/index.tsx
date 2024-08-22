import { Badge, Button, Group, Select, Text, TextInput } from "@nabiq-ui";
import { XClose, FiMail01, ArrowRight, ArrowUp } from "@nabiq-icons";

const Test = () => {

  return (
    <>
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
      </div>

      {/* <Drawer opened={opened} onClose={close} position="right">
        <DrawerHeader>
          Hello Header
        </DrawerHeader>

        <DrawerBody>
          Hello body
        </DrawerBody>
      </Drawer> */}
    </>
  );
};

export default Test;
