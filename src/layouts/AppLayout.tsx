import { PageLoader } from '@nabiq-ui';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useGetCompanyQuery } from 'src/store/company/companyApi';

export const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const unListen = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    return () => {
      unListen();
    };
  }, [pathname]);
  // console.log("--- I am from AppLayout ---");
  const { isLoading: isLoadingCompany } = useGetCompanyQuery();
  return isLoadingCompany ? <PageLoader /> : <Outlet />;
};
