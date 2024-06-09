import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: React.ReactNode;
};

const ScrollToTop = ({ children }: ScrollToTopProps) => {
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

  return <>{children}</>;
};

export default ScrollToTop;
