import cn from 'classnames';
import React, { SetStateAction, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface Option {
  label:
    | string
    | React.ReactNode
    | ((props: { value: string | number; isSelected: boolean }) => React.ReactNode);
  value: string | number;
}

const OptionTabs: React.FC<{
  active: string | number;
  setActive: React.Dispatch<SetStateAction<string | number>>;
  options: Option[];
}> = ({ active, setActive, options }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tabFromUrl = searchParams.get('selectedTab');

    if (tabFromUrl && options.some((opt) => opt.value.toString() === tabFromUrl)) {
      setActive(
        // Convert to number if the active value is numeric, otherwise keep as string
        !isNaN(Number(tabFromUrl)) ? Number(tabFromUrl) : tabFromUrl,
      );
    }
  }, []);

  return (
    <div className='border border-gray-200 rounded-[10px] w-fit p-1 flex gap-3 flex-nowrap bg-gray-50'>
      {options.map((item, idx) => {
        const isSelected = active === item.value;
        return (
          <span
            onClick={() => {
              setActive(item.value);
              navigate({
                search: `?selectedTab=${item.value.toString()}`,
              });
            }}
            className={cn(
              'cursor-pointer text-sm px-3 py-2 rounded-lg font-semibold flex whitespace-nowrap',
              isSelected
                ? 'bg-white text-gray-700 shadow-custom-secondary'
                : 'bg-gray-50 text-gray-500',
            )}
            key={idx}
            style={{
              border: isSelected ? '0.75px solid rgba(13, 18, 28, 0.48)' : 'none',
            }}
          >
            {typeof item.label === 'function'
              ? item.label({ value: item.value, isSelected })
              : item.label}
          </span>
        );
      })}
    </div>
  );
};

export default OptionTabs;
