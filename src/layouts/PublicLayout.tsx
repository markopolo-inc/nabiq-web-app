import { Topbar } from '@nabiq-ui';
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};
