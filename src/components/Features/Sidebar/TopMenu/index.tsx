import { Menu, UnstyledButton, Image, Avatar, useGetColors } from "@nabiq-ui"
import { FiHelpCircle, FiSettings01, Logout01 } from "@nabiq-icons"
import { rem } from "@mantine/core";
import { useLogoutMutation } from "src/store/auth/authApi";
import {useAppSelector} from "src/store/hooks.ts";

const TopMenu = () => {
    const { userEmail, userName  } = useAppSelector((state) => state.user);
    const { gray500 } = useGetColors();
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        await logout({}).unwrap();
    }

    return (
        <Menu width={240} position="bottom-end">
            <Menu.Target>
                <UnstyledButton className="w-10 h-10 rounded-full focus:ring-4 ring-[#E0E0E0]">
                    <Image src="img.png" className="w-10 h-10 rounded-full" />
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown className="!p-0 border border-gray-200 shadow-custom-md rounded-lg">
                <Menu.Label className="flex gap-3 py-3 px-4">
                    <Avatar
                        src="img.png"
                        alt="It's me"
                        active
                        size="md"
                    />

                    <div className="flex flex-col items-start font-sans text-sm font-semibold leading-5 text-gray-700">
                        <div>{userName}</div>
                        <div className="font-normal text-gray-600">{userEmail}</div>
                    </div>

                </Menu.Label>

                <Menu.Divider />

                <Menu.Item
                    className="text-sm font-medium leading-5 text-gray-700"
                    component="a" href="/settings"
                    leftSection={<FiSettings01 style={{ width: rem(18), height: rem(18) }} color={gray500} />}
                >
                    Settings
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    className="text-sm font-medium leading-5 text-gray-700"
                    component="a" href="/support"
                    leftSection={<FiHelpCircle style={{ width: rem(18), height: rem(18) }} color={gray500} />}
                >
                    Support
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    onClick={handleLogout}
                    className="text-sm font-medium leading-5 text-gray-700"
                    leftSection={<Logout01 style={{ width: rem(18), height: rem(18) }} color={gray500} />}
                >
                    Log out
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default TopMenu
