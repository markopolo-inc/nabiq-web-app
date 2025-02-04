import { AppShell, Burger, Group, Image, PageLoader, useDisclosure } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';
import { Sidebar, SwitchLanguage, TopMenu } from 'src/components/modules/navigation';
import { NotificationPopover } from 'src/components/modules/notifications';
import { useAppSelector } from 'src/store/hooks';

export const NavigationLayout = () => {
  // console.log("--- I am from Navigationlayout ---");
  const { resourceId: companyId, isOnboardingComplete } = useAppSelector((state) => state.company);
  const [opened, { toggle, close }] = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    close();
  }, [pathname]);

  return companyId ? (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 240, breakpoint: 'md', collapsed: { mobile: !opened } }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <AppShell.Header px='sm' className='bg-gray-950'>
          <Group h='100%' px='md' className='justify-between'>
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom='md' color='white' size='sm' />
              <Image
                src={NabiqLogo}
                alt='Nabiq'
                className='w-[74px] cursor-pointer'
                onClick={() => (window.location.href = '/')}
              />
            </Group>

            <Group>
              <SwitchLanguage />
              <NotificationPopover />
              <TopMenu />
            </Group>
          </Group>
        </AppShell.Header>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <AppShell.Navbar className='!bg-gray-100 !border-none '>
          <Sidebar />
        </AppShell.Navbar>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <AppShell.Main>
          <div className='w-full mx-auto'>
            {companyId && isOnboardingComplete ? <Outlet /> : <PageLoader />}
          </div>
        </AppShell.Main>
      </motion.div>
    </AppShell>
  ) : (
    <PageLoader />
  );
};
