import { Checkbox as CheckboxField } from '@mantine/core';
import cn from 'classnames';
import { ChangeEvent } from 'react';

import { TCheckboxProps, getClassesBySize, getInputColor } from './utils';

const Checkbox = ({
  className,
  size = 'sm',
  onChange,
  disabled = false,
  variant = 'checkbox',
  id,
  ...rest
}: TCheckboxProps) => {
  const isDisabled = disabled;
  // const CheckboxIcon: TCheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  //   indeterminate ? (
  //     <svg
  //       width='14'
  //       height='14'
  //       viewBox='0 0 14 14'
  //       fill='none'
  //       xmlns='http://www.w3.org/2000/svg'
  //       {...others}
  //     >
  //       <path
  //         d='M2.9165 7H11.0832'
  //         stroke='white'
  //         stroke-width='2'
  //         stroke-linecap='round'
  //         stroke-linejoin='round'
  //       />
  //     </svg>
  //   ) : (
  //     <svg
  //       width='14'
  //       height='14'
  //       viewBox='0 0 14 14'
  //       fill='none'
  //       xmlns='http://www.w3.org/2000/svg'
  //       {...others}
  //     >
  //       <path
  //         d='M11.6668 3.5L5.25016 9.91667L2.3335 7'
  //         stroke='white'
  //         stroke-width='2'
  //         stroke-linecap='round'
  //         stroke-linejoin='round'
  //       />
  //     </svg>
  //   );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <CheckboxField
      id={id}
      classNames={{
        root: cn(getClassesBySize(size), className),
        input: getInputColor(),
      }}
      disabled={isDisabled}
      onChange={(e) => handleChange(e)}
      size={size}
      radius={variant === 'radio' ? 'xl' : 'sm'}
      // icon={CheckboxIcon}
      {...rest}
    />
  );
};

export default Checkbox;
