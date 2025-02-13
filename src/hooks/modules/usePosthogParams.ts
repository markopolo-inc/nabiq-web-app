import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';

export const usePosthogParams = () => {
  const { pathname } = useLocation();
  const { userEmail } = useAppSelector((state) => state.user);

  return {
    email: userEmail,
    page: pathname,
    timestamp: new Date().toISOString(),
  };
};
