import { ButtonProps, Loader, Button as MantineButton } from '@mantine/core';
import { useGetColors } from '@nabiq-ui';
import cn from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import Text from '../Text';
import styles from './Button.module.scss';

const SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

const getSizes = (size) => {
  const btnSize = {
    SM: SIZES.SM,
    MD: SIZES.MD,
    LG: SIZES.LG,
  };

  const loaderSize = {
    sm: 13,
    md: 15,
    lg: 17,
  };

  return {
    button: btnSize[size],
    loader: loaderSize[size],
  };
};

const Button = ({
  children,
  size = SIZES.SM,
  loading = false,
  onClick,
  disabled = false,
  variant = 'primary',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  style,
  className,
  id,
  ...rest
}: IButtonProp) => {
  const { whiteBase, gray600, primary600, error600 } = useGetColors();

  const isText = typeof children === 'string';

  const getButtonClassesBySize = (btnSize: TButtonSize) => {
    switch (btnSize) {
      case 'sm':
        return '!text-[32px]';
      case 'md':
        return isText ? 'py-2.5 px-4' : 'p-3';
      case 'lg':
        return isText ? 'py-4 px-5.5' : 'p-4';
      default:
        return '';
    }
  };
  const getPaddingClassesBySize = (btnSize: TButtonSize) => {
    switch (btnSize) {
      case 'sm':
        return isText ? 'py-2 px-3 rounded-[12px]' : 'p-2';
      case 'md':
        return isText ? 'py-2.5 px-4' : 'p-3';
      case 'lg':
        return isText ? 'py-4 px-5.5' : 'p-4';
      default:
        return '';
    }
  };

  const getClassName = (btnVariant: TButtonVariant) => {
    switch (btnVariant) {
      case 'primary':
        return styles.primary;
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
      default:
        return '';
    }
  };

  const getLoaderColor = (btnVariant: TButtonVariant) => {
    switch (btnVariant) {
      case 'primary':
        return whiteBase;
      case 'primary-destructive':
        return whiteBase;
      case 'secondary':
        return gray600;
      case 'secondary-black':
        return whiteBase;
      case 'tertiary':
        return primary600;
      case 'tertiary-gray':
        return gray600;
      case 'tertiary-destructive':
        return error600;
      case 'link':
        return primary600;
      default:
        return '';
    }
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <MantineButton
      id={id}
      style={{
        minWidth: 'fit-content',
        ...style,
      }}
      size={getSizes(size).button}
      className={cn(
        styles.container,
        getClassName(variant),
        getButtonClassesBySize(size),
        getPaddingClassesBySize(size),
        className,
      )}
      disabled={loading || disabled}
      onClick={(e) => handleClick(e)}
      fullWidth={fullWidth}
      rightSection={trailingIcon}
      leftSection={
        loading ? (
          <Loader color={getLoaderColor(variant)} size={getSizes(size).loader} />
        ) : (
          leadingIcon
        )
      }
      {...rest}
    >
      <Text style={{ whiteSpace: 'nowrap' }}>{children}</Text>
    </MantineButton>
  );
};

export default Button;

type TButtonVariant =
  | 'primary'
  | 'primary-destructive'
  | 'secondary'
  | 'secondary-black'
  | 'tertiary'
  | 'tertiary-gray'
  | 'tertiary-destructive'
  | 'link';

type TButtonSize = 'sm' | 'md' | 'lg';

interface IButtonProp extends ButtonProps {
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
