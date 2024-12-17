import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ChatWidget, ChatWindow } from 'src/components/modules/chatbot';
import { useLogoutMutation } from 'src/store/auth/authApi';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken } from 'src/utils/auth';

export const PrivateLayout = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
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

  return (
    <>
      {!isAuthenticated ? (
        <Navigate to={'/login'} />
      ) : (
        <>
          <Outlet />
          {isChatbotOpen ? <ChatWindow onClick={() => setIsChatbotOpen(false)} /> : <></>}
          <ChatWidget
            isOpen={isChatbotOpen}
            onClick={() => setIsChatbotOpen((prevState) => !prevState)}
          />
        </>
      )}
    </>
  );
};
