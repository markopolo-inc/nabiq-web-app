import { Loader, Button as MantineButton } from '@mantine/core';
import { useGetColors } from '@nabiq-ui';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import Text from '../Text';
import styles from './Button.module.scss';

const getSizes = (size) => {
  const buttonSize = {
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    '2xl': 'xl',
  };
  const textSize = {
    sm: '14px',
    md: '14px',
    lg: '16px',
    xl: '16px',
    '2xl': '18px',
  };
  const loaderSize = {
    sm: 13,
    md: 15,
    lg: 17,
    xl: 19,
    '2xl': 21,
  };
  const buttonHeight = {
    sm: 36,
    md: 40,
    lg: 44,
    xl: 48,
    '2xl': 60,
  };

  return {
    button: buttonSize[size],
    text: textSize[size],
    loader: loaderSize[size],
    buttonHeight: buttonHeight[size],
  };
};

const Button = ({
  children,
  size = 'md',
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
}: ButtonPropType) => {
  const { whiteBase, gray600, primary600, error600 } = useGetColors();

  const getClassName = (btnVariant) => {
    const classes = {
      primary: styles.primary,
      'primary-destructive': styles.primaryDestructive,
      secondary: styles.secondary,
      'secondary-black': styles.secondaryBlack,
      tertiary: styles.tertiary,
      'tertiary-gray': styles.tertiaryGray,
      'tertiary-destructive': styles.tertiaryDestructive,
      link: styles.link,
    };
    return classes[btnVariant];
  };

  const getLoaderColor = (btnVariant) => {
    const colors = {
      primary: whiteBase,
      'primary-destructive': whiteBase,
      secondary: gray600,
      'secondary-black': whiteBase,
      tertiary: primary600,
      'tertiary-gray': gray600,
      'tertiary-destructive': error600,
      link: primary600,
    };
    return colors[btnVariant];
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
        height: getSizes(size).buttonHeight,
        ...style,
      }}
      size={getSizes(size).button}
      className={`${styles.container} ${getClassName(variant)} ${className}`}
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
      <Text style={{ whiteSpace: 'nowrap' }} size={getSizes(size).text}>
        {children}
      </Text>
    </MantineButton>
  );
};

export default Button;

interface ButtonPropType {
  children: ReactNode;
  type?: 'submit';
  variant?:
    | 'primary'
    | 'primary-destructive'
    | 'secondary'
    | 'secondary-black'
    | 'tertiary'
    | 'tertiary-gray'
    | 'tertiary-destructive'
    | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
