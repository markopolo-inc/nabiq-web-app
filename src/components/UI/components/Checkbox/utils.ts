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

export { getClassesBySize, getInputColor };
