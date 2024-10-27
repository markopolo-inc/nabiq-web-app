import { ButtonProps } from '@mantine/core';
import cn from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import styles from './Button.module.scss';

export type TButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondary-black'
  | 'tertiary-gray'
  | 'tertiary'
  | 'link'
  | 'tertiary-destructive'
  | 'primary-destructive';

export type TButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProp extends ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  variant?: TButtonVariant;
  size?: TButtonSize;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
  width?: number;
}

const getRootClassesByVariant = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return cn(styles.primaryRoot, 'border-none shadow-btn-primary');
    case 'secondary':
      return cn(styles.secondaryRoot, 'border-none');
    case 'secondary-black':
      return styles.secondaryBlackRoot;
    case 'tertiary-gray':
      return cn(styles.tertiaryGrayRoot);
    case 'tertiary':
      return styles.tertiaryRoot;
    case 'link':
      return styles.linkRoot;
    case 'tertiary-destructive':
      return styles.tertiaryDestructiveRoot;
    case 'primary-destructive':
      return cn(styles.primaryDestructiveRoot, 'border-none shadow-btn-destructive-primary');
    default:
      return '';
  }
};

const getInnerClassesByVariant = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return cn(styles.primaryInner, 'text-white');
    case 'secondary':
      return cn(styles.secondaryInner, 'text-gray-600 hover:text-gray-700');
    case 'secondary-black':
      return cn(styles.secondaryBlackInner, 'text-white');
    case 'tertiary-gray':
      return cn(styles.tertiaryGrayInner, 'text-gray-600 hover:text-gray-700');
    case 'tertiary':
      return styles.tertiaryInner;
    case 'link':
      return cn('!px-0');
    case 'tertiary-destructive':
      return cn(styles.tertiaryDestructiveInner);
    case 'primary-destructive':
      return cn(styles.primaryDestructiveInner);
  }
};

const getDisabledClasses = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return cn(styles.primaryDisabled, '!text-gray-400');
    case 'secondary':
      return cn(styles.secondaryDisabled, '!text-gray-400');
    case 'secondary-black':
      return cn(styles.secondaryBlackDisabled, '!text-gray-400');
    case 'tertiary-gray':
      return cn('cursor-not-allowed !text-gray-400');
    case 'tertiary':
      return cn('cursor-not-allowed !text-gray-400');
    case 'link':
      return cn('cursor-not-allowed !text-gray-400');
    case 'tertiary-destructive':
      return cn('cursor-not-allowed !text-gray-400');
    case 'primary-destructive':
      return cn(styles.primaryDestructiveDisabled, '!text-gray-400');
    default:
      return '';
  }
};

const getInnerClassesBySize = (btnSize: TButtonSize, isText: boolean) => {
  switch (btnSize) {
    case 'sm':
      return ['!h-[36px] !text-sm', isText ? 'py-2 px-3' : 'p-2'];
    case 'md':
      return ['!h-[44px] !text-base', isText ? 'py-[10px] px-4' : 'p-3'];
    case 'lg':
      return ['!h-[60px] !text-lg', isText ? 'py-4 px-[22px]' : 'p-4 px-5'];
  }
};

export {
  getRootClassesByVariant,
  getInnerClassesByVariant,
  getDisabledClasses,
  getInnerClassesBySize,
};
