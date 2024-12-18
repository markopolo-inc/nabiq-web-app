import { rem } from '@mantine/core';
import { FiSettings02, HelpCircle02, Logout01 } from '@nabiq-icons';
import { Avatar, Image, Menu, UnstyledButton, useGetColors } from '@nabiq-ui';
import AvatarImage from 'src/assets/logo/avatar.png';
import { useLogoutMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks.ts';

const TopMenu = () => {
  const company = useAppSelector((state) => state.company);

  const { gray500 } = useGetColors();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout({}).unwrap();
  };

  return (
    <Menu width={240} position='bottom-end'>
      <Menu.Target>
        <UnstyledButton
          className='w-8 h-8 rounded-full focus:ring-2 ring-[#E0E0E0] !border-[0.75px] !border-gray-100 !shadow-sm'
          style={{ border: 'inherit' }}
        >
          <Image
            src={company?.meta?.profilePhoto || AvatarImage}
            className='w-[32px] h-[32px] rounded-full'
            alt={company?.meta?.userName}
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown className='!p-0 border border-gray-200 shadow-custom-md rounded-lg'>
        <Menu.Label className='flex gap-3 py-3 px-4'>
          <Avatar
            className='w-10 h-10 flex-none rounded-full focus:ring-4 ring-[#E0E0E0] !border-[0.75px] !border-gray-100 !shadow-sm'
            src={company?.meta?.profilePhoto || AvatarImage}
            alt={company?.meta?.userName}
            active
            size='md'
          />
          <div className='grid font-sans text-sm font-semibold leading-5 text-gray-700'>
            <p className='truncate'>{company?.meta?.userName}</p>
            <p className='font-normal text-gray-600 truncate'>{company?.meta?.userEmail}</p>
          </div>
        </Menu.Label>

        <Menu.Divider style={{ marginTop: '0' }} />

        <Menu.Item
          className='text-sm font-medium leading-5 text-gray-700'
          component='a'
          href='/settings'
          leftSection={<FiSettings02 style={{ width: rem(16), height: rem(16) }} color={gray500} />}
        >
          Settings
        </Menu.Item>

        <Menu.Item
          className='text-sm font-medium leading-5 text-gray-700'
          component='a'
          href='/support'
          leftSection={<HelpCircle02 style={{ width: rem(16), height: rem(16) }} color={gray500} />}
        >
          Support
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          onClick={handleLogout}
          className='text-sm font-medium leading-5 text-gray-700 mb-1'
          leftSection={<Logout01 style={{ width: rem(12), height: rem(12) }} color={gray500} />}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default TopMenu;
