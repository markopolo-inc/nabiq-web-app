import { Outlet } from 'react-router-dom';

export const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='w-full mx-auto overflow-auto'>
      <div className='max-w-[1180px] mx-auto px-6 py-8'>{children ?? <Outlet />}</div>
    </div>
  );
};
