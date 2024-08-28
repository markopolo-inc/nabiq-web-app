import { Divider } from "@mantine/core";
import { Avatar, Dialog, Group, useDisclosure, useGetColors } from "@nabiq-ui";
import { FiHelpCircle, FiSettings01, Logout01 } from "@nabiq-icons"
import { Link } from "react-router-dom";

const AvatarMenu = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { gray500 } = useGetColors();

  return (
    <Group>
      <Avatar
        src="img.png"
        alt="It's me"
        onClick={toggle}
        className="border-4 border-[#98A2B324]"
        size="lg"
      />
      <Dialog position={{ top: 65, right: 55 }} opened={opened} onClose={close} className="!p-0 border border-gray-200 shadow-custom-md rounded-lg">
        <div className="flex gap-3 py-3 px-4 ">
          <Avatar
            src="img.png"
            alt="It's me"
            active
            size="md"
          />

          <div className="flex flex-col items-start font-sans text-sm font-semibold leading-5 text-gray-700">
            <div>John Doe</div>
            <div className="font-normal text-gray-600">johndoe@gmail.com</div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col py-1.5 px-1">
          <Link
            to="/settings"
            className="py-2 px-2.5"
          >
            <div className="flex gap-3 items-center">
              <FiSettings01 size={18} color={gray500} />
              <span
                className="text-sm font-medium leading-5 text-gray-700"
              >
                Settings
              </span>
            </div>
          </Link>

          <Link
            to="/support"
            className="py-2 px-2.5"
          >
            <div className="flex gap-3 items-center">
              <FiHelpCircle size={18} color={gray500} />
              <span
                className="text-sm font-medium leading-5 text-gray-700"
              >
                Support
              </span>
            </div>
          </Link>
        </div>
        <Divider />
        <div className="py-1.5 px-1">
          <div
            className="py-2 px-2.5 hover:cursor-pointer"
          >
            <div className="flex gap-3 items-center">
              <Logout01 size={18} color={gray500} />
              <span
                className="text-sm font-medium leading-5 text-gray-700"
              >
                Log out
              </span>
            </div>
          </div>
        </div>
      </Dialog>
    </Group>
  );
};

export default AvatarMenu;
