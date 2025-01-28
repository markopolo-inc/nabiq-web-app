import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';
import { useGetCompanyQuery } from 'src/store/company/companyApi';
import { useAppSelector } from 'src/store/hooks';

export const AppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { resourceId: companyId, isOnboardingComplete } = useAppSelector((state) => state.company);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
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
        const installationId = searchParams.get(QUERY_PARAMS.INSTALLATION_ID);
        const shopifyShop = searchParams.get(QUERY_PARAMS.SHOPIFY_SHOP);
        if (installationId && shopifyShop) {
          navigate(
            `/onboarding?${QUERY_PARAMS.INSTALLATION_ID}=${installationId}&${QUERY_PARAMS.SHOPIFY_SHOP}=${shopifyShop}`,
          );
        } else {
          navigate('/onboarding');
        }
      }
    }
  }, [
    companyId,
    isOnboardingComplete,
    pathname,
    isAuthenticated,
    isFetchingCompany,
    isLoadingCompany,
    searchParams,
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
  if (!isAuthenticated && (isFetchingCompany || isLoadingCompany)) {
    return null;
  }

  return <Outlet />;
};
