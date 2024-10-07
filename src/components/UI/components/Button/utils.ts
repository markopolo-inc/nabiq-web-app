import { ButtonProps } from '@mantine/core';
import cn from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import styles from './Button.module.scss';

export type TButtonVariant =
  | 'primary'
  | 'primary-destructive'
  | 'secondary'
  | 'secondary-black'
  | 'tertiary'
  | 'tertiary-gray'
  | 'tertiary-destructive'
  | 'link';

export type TButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProp extends ButtonProps {
  children: ReactNode;
  type?: 'submit';
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
}

export const getRootClassesByVariant = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return cn(styles.primaryRoot, 'border-none shadow-btn-primary !disabled:bg-gray-100');
    default:
      return '';
  }
};

export const getInnerClassesByVariant = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return cn(styles.primaryInner);
    case 'primary-destructive':
      return styles.primaryDestructive;
    case 'secondary':
      return styles.secondary;
    case 'secondary-black':
      return styles.secondaryBlack;
    case 'tertiary':
      return styles.tertiary;
    case 'tertiary-gray':
      return styles.tertiaryGray;
    case 'tertiary-destructive':
      return styles.tertiaryDestructive;
    case 'link':
      return styles.link;
  }
};

export const getDisabledClasses = (btnVariant: TButtonVariant) => {
  switch (btnVariant) {
    case 'primary':
      return styles.primaryDisabled;
    default:
      return '';
  }
};

export const getRootClassesBySize = (btnSize: TButtonSize) => {
  switch (btnSize) {
    case 'sm':
      return ['!h-[36px]'];
    case 'md':
      return ['!h-[44px]'];
    case 'lg':
      return ['!h-[60px]'];
  }
};

export const getInnerClassesBySize = (btnSize: TButtonSize, isText: boolean) => {
  switch (btnSize) {
    case 'sm':
      return ['!text-sm', isText ? 'py-2 px-3' : 'p-3'];
    case 'md':
      return ['!text-base', isText ? 'py-[10px] px-4' : 'p-3'];
    case 'lg':
      return ['!text-lg', isText ? 'py-4 px-[22px]' : 'p-4'];
  }
};

export const getButtonStylesBySize = (btnSize: TButtonSize) => {
  switch (btnSize) {
    case 'sm':
      return {};
    case 'md':
      return {};
    case 'lg':
      return {};
  }
};
