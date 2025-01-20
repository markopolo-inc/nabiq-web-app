import { show } from '@intercom/messenger-js-sdk';
import { useGetColors } from '@nabiq-ui';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { lowerPartOptions, sideBarCategories } from 'src/lib/sidebarOptions';
import { useAppSelector } from 'src/store/hooks';

import { PlanCard } from './PlanCard';

const MenuItem = ({ item }) => {
  const { pathname } = useLocation();
  const isSelected = item?.menuRegex?.test(pathname);

  const { gray950, primary600 } = useGetColors();
  const { t } = useTranslation();

  const Icon = item.Icon;
  return (
    <Link
      to={item.to}
      className={cn('px-2 py-1.5', isSelected ? 'bg-white rounded-lg shadow-sm' : '')}
      onClick={(event) => {
        if (item.to === '#') {
          event.preventDefault();
          show();
        }
      }}
    >
      <div className='flex gap-3 items-center'>
        <Icon size={18} fill={isSelected ? primary600 : gray950} />
        <span
          className={`${isSelected ? 'text-primary-600' : 'text-gray-050'} text-sm font-medium`}
        >
          {t(item.title)}
        </span>
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  const { payment } = useAppSelector((state) => state.company);
  return (
    <div className='h-screen pl-6 pr-8 py-8 overflow-y-auto'>
      <div className='h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-3.5'>
          {sideBarCategories?.map((category, idx) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 * (idx + 1), staggerChildren: 0.1 }}
              key={idx}
            >
              {category?.title && (
                <p className='text-sm font-medium text-gray-500 px-2 py-2'>{category?.title}</p>
              )}
              <div className='flex-1'>
                <ul className='flex flex-col gap-2'>
                  {category?.options?.map((item, index) => <MenuItem item={item} key={index} />)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col gap-8 mt-4'>
          <ul className='flex flex-col gap-2'>
            <p className='text-sm font-medium text-gray-500 px-2'>Others</p>
            {lowerPartOptions?.map((item, idx) => <MenuItem key={idx} item={item} />)}
          </ul>
          {payment && <PlanCard />}
        </div>
      </div>
    </div>
  );
};
