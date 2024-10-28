import { Checkbox as CheckboxField } from '@mantine/core';
import cn from 'classnames';
import { ChangeEvent } from 'react';
import { CheckboxIcon, CircleIcon, MinusIcon } from 'src/components/UI/components/Checkbox/icons';

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
  const Icon: TCheckboxProps['icon'] = ({ indeterminate, ..._rest }) => {
    const checkboxSize = size === 'sm' ? 12 : 14;
    const radioSize = size === 'sm' ? 6 : 8;
    const strokeSize = size === 'sm' ? 1.66666 : 2;

    const checkboxOthers = { width: checkboxSize, height: checkboxSize, ..._rest };
    const radioOthers = { width: radioSize, height: radioSize, ..._rest };
    // show minus
    if (variant === 'checkbox' && indeterminate && !isDisabled)
      return <MinusIcon color='#fff' size={strokeSize} {...checkboxOthers} />;

    // show minus by disabled
    if (variant === 'checkbox' && indeterminate && isDisabled)
      return <MinusIcon color='#CDD5DF' size={strokeSize} {...checkboxOthers} />;

    // show tik
    if (variant === 'checkbox' && !isDisabled)
      return <CheckboxIcon color='#fff' size={strokeSize} {...checkboxOthers} />;

    // show tik by disabled
    if (variant === 'checkbox' && isDisabled)
      return <CheckboxIcon color='#CDD5DF' size={strokeSize} {...checkboxOthers} />;

    // show circle
    if (variant === 'radio' && !isDisabled)
      return <CircleIcon color='#fff' size={radioSize} {...radioOthers} />;

    // show circle by disabled
    if (variant === 'radio' && isDisabled)
      return <CircleIcon color='#CDD5DF' size={radioSize} {...radioOthers} />;
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
      icon={Icon}
      {...rest}
    />
  );
};

export default Checkbox;
