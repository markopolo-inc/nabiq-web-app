import Intercom from '@intercom/messenger-js-sdk';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogoutMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken } from 'src/utils/auth';

export const PrivateLayout = () => {
  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { resourceId, userEmail, userName, createdAt } = useAppSelector((state) => state.user);

  // integrate intercom with user info
  Intercom({
    app_id: import.meta.env.VITE_INTERCOM_APP_ID,
    user_id: resourceId,
    name: userName,
    email: userEmail,
    created_at: new Date(createdAt)?.getTime(),
  });

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

  return <>{!isAuthenticated ? <Navigate to={'/login'} /> : <Outlet />}</>;
};
