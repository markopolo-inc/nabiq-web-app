import { useGetColors } from '@nabiq-ui';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { lowerPartOptions, sidebarOptions } from 'src/lib/sidebarOptions';

const MenuItem = ({ item }) => {
  const { pathname } = useLocation();
  const isSelected = item?.menuRegex?.test(pathname);
  const { gray950, primary600 } = useGetColors();

  const Icon = item.Icon;
  return (
    <Link
      to={item.to}
      //   className='p-3'
      className={cn('px-2 py-1.5', isSelected ? 'bg-white rounded-lg shadow-sm' : '')}
    >
      <div className='flex gap-3 items-center'>
        <Icon size={14} color={isSelected ? primary600 : gray950} />
        <span
          className={`${isSelected ? 'text-primary-600' : 'text-gray-050'} text-sm font-medium`}
        >
          {item.title}
        </span>
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <div className='h-screen pl-6 pr-8 py-8'>
      <div className='h-full flex flex-col justify-between overflow-y-auto'>
        <div className='flex-1'>
          <ul className='flex flex-col gap-3'>
            {sidebarOptions?.map((item, idx) => <MenuItem item={item} key={idx} />)}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            {lowerPartOptions?.map((item, idx) => <MenuItem key={idx} item={item} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};
