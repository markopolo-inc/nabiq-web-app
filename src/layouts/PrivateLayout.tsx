import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogoutMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken } from 'src/utils/auth';

const PrivateLayout = () => {
  const [logout] = useLogoutMutation();
  useEffect(() => {
    const handleWindowFocus = async () => {
      const res = await getAuthToken();
      if (!res) {
        await logout({}).unwrap();
      }
    };

    // Attach the event listener for window focus
    window.addEventListener('focus', handleWindowFocus);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);
  // console.log("--- I am from PrivateLayout ---");
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return <>{!isAuthenticated ? <Navigate to={'/login'} /> : <Outlet />}</>;
};

export default PrivateLayout;
