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
  const CheckboxIcon: TCheckboxProps['icon'] = ({ indeterminate, ..._rest }) => {
    const checkboxSize = size === 'sm' ? 12 : 14;
    const radioSize = size === 'sm' ? 6 : 8;

    const checkboxOthers = { width: checkboxSize, height: checkboxSize, ..._rest };
    const radioOthers = { width: radioSize, height: radioSize, ..._rest };

    if (variant === 'checkbox' && indeterminate && !isDisabled)
      // show minus
      return (
        <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...checkboxOthers}>
          <path
            d='M2.5 6H9.5'
            stroke='white'
            strokeWidth='1.66666'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

    if (variant === 'checkbox' && indeterminate && isDisabled)
      // show minus by disabled
      return (
        <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...checkboxOthers}>
          <path
            d='M2.5 6H9.5'
            stroke='#CDD5DF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

    if (variant === 'checkbox' && !isDisabled)
      // show tik
      return (
        <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...checkboxOthers}>
          <path
            d='M10 3L4.5 8.5L2 6'
            stroke='white'
            strokeWidth='1.6666'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    if (variant === 'checkbox' && isDisabled)
      // show tik by disabled
      return (
        <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...checkboxOthers}>
          <path
            d='M10 3L4.5 8.5L2 6'
            stroke='#CDD5DF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

    if (variant === 'radio' && !isDisabled)
      // show circle
      return (
        <svg viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...radioOthers}>
          <rect width='6' height='6' rx='3' fill='white' />
        </svg>
      );

    if (variant === 'radio' && isDisabled)
      // show circle by disabled
      return (
        <svg viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...radioOthers}>
          <rect width='6' height='6' rx='3' fill='#CDD5DF' />
        </svg>
      );
  };

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
      icon={CheckboxIcon}
      {...rest}
    />
  );
};

export default Checkbox;
