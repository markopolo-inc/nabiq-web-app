import { CheckboxProps } from '@mantine/core';
import cn from 'classnames';
import { CSSProperties, ChangeEventHandler } from 'react';

import styles from './Checkbox.module.scss';

export type TCheckboxVariant = 'checkbox' | 'radio';
export type TCheckboxSize = 'sm' | 'md';

export interface TCheckboxProps extends CheckboxProps {
  variant?: TCheckboxVariant;
  size?: TCheckboxSize;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  indeterminate?: boolean;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

const getClassesByVariant = (variant: TCheckboxVariant) => {
  switch (variant) {
    case 'checkbox':
      return cn('checkbox');
    case 'radio':
      return cn('radio');
    default:
      return '';
  }
};

const getDisabledClasses = (variant: TCheckboxVariant) => {
  switch (variant) {
    case 'checkbox':
      return cn('checkbox_disabled');
    case 'radio':
      return cn('radio_disabled');
    default:
      return '';
  }
};

const getClassesBySize = (size: TCheckboxSize) => {
  switch (size) {
    case 'sm':
      return cn(styles.root);
    case 'md':
      return cn(styles.root);
  }
};

const getInputColor = () => {
  return cn(styles._input);
};

export { getClassesByVariant, getDisabledClasses, getClassesBySize, getInputColor };
