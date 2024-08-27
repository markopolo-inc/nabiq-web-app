import { Avatar, Dialog, Group, useDisclosure } from "@nabiq-ui";

const AvatarMenu = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Group>
      <Avatar
        src="img.png"
        alt="It's me"
        onClick={toggle}
        className="border-4 border-[#98A2B324]"
      />
      <Dialog position={{ top: 60, right: 50 }} opened={opened} onClose={close}>
        Hello 123
        <div className="border-"></div>
      </Dialog>
    </Group>
  );
};

export default AvatarMenu;
