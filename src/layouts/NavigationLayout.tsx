import { AppShell, Burger, Group, Image, useDisclosure } from "@nabiq-ui";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "src/store/hooks";
import NabiqLogo from "src/assets/logo/nabiq-logo.png";
import Sidebar from "components/Features/Sidebar";
import AvatarMenu from "src/components/Features/Sidebar/AvatarMenu";

const NavigationLayout = () => {
  console.log("--- I am from Navigationlayout ---");
  const navigate = useNavigate();
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    if (!companyId) {
      navigate("/onboarding");
    }
  }, [companyId]);

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{ width: 300, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header className="px-8">
        <Group h="100%" px="md" className="justify-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
            />
            <Image src={NabiqLogo} alt="Nabiq" className="w-24" />
          </Group>

          <AvatarMenu />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="p-4">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default NavigationLayout;
