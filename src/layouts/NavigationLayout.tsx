import { AppShell, Burger, Group, Image, PageLoader, useDisclosure } from '@nabiq-ui';
import Sidebar from 'components/Features/Sidebar';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';
import TopMenu from 'src/components/Features/Sidebar/TopMenu';
import { useAppSelector } from 'src/store/hooks';

export const NavigationLayout = () => {
  // console.log("--- I am from Navigationlayout ---");
  const navigate = useNavigate();
  const { resourceId: companyId, isOnboardingComplete } = useAppSelector((state) => state.company);
  const [opened, { toggle, close }] = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!companyId || !isOnboardingComplete) {
      navigate('/onboarding');
    }
  }, [companyId, isOnboardingComplete]);

  useEffect(() => {
    close();
  }, [pathname]);

  return companyId ? (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header px='sm' className='bg-gray-950'>
        <Group h='100%' px='md' className='justify-between'>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom='md' color='white' size='sm' />
            <Image src={NabiqLogo} alt='Nabiq' className='w-[74px]' />
          </Group>

          <TopMenu />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md' className='!bg-gray-25 border-r !border-gray-200'>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className='p-4 w-full mx-auto'>
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  ) : (
    <PageLoader />
  );
};
