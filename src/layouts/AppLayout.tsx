import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useGetCompanyQuery } from 'src/store/company/companyApi';
import { useAppSelector } from 'src/store/hooks';

export const AppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { resourceId: companyId, isOnboardingComplete } = useAppSelector((state) => state.company);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const {
    refetch: refetchCompany,
    isFetching: isFetchingCompany,
    isLoading: isLoadingCompany,
  } = useGetCompanyQuery();
  useEffect(() => {
    if (isAuthenticated && !isFetchingCompany && !isLoadingCompany) {
      if (['/login', '/signup'].includes(pathname)) {
        navigate('/');
        return;
      }
      if (companyId && isOnboardingComplete && pathname === '/onboarding') {
        navigate('/');
      }
      if ((!companyId || !isOnboardingComplete) && pathname !== '/onboarding') {
        navigate('/onboarding');
      }
    }
  }, [
    companyId,
    isOnboardingComplete,
    pathname,
    isAuthenticated,
    isFetchingCompany,
    isLoadingCompany,
  ]);

  useEffect(() => {
    if (isAuthenticated) {
      refetchCompany();
    }
  }, [isAuthenticated]);

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
  // console.log('--- I am from AppLayout ---');
  if (isFetchingCompany || isLoadingCompany) {
    return null;
  }

  return <Outlet />;
};
