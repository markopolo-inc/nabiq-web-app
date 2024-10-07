import { Loader, Button as MantineButton } from '@mantine/core';
import cn from 'classnames';

import { useGetColors } from '../../hooks';
import {
  IButtonProp,
  TButtonVariant,
  getDisabledClasses,
  getInnerClassesBySize,
  getInnerClassesByVariant,
  getRootClassesBySize,
  getRootClassesByVariant,
} from './utils';

const getSizes = (size) => {
  const loaderSize = {
    sm: 13,
    md: 15,
    lg: 17,
  };

  return {
    loader: loaderSize[size],
  };
};

const Button = ({
  children,
  size = 'sm',
  loading = false,
  onClick,
  disabled = false,
  variant = 'primary',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  id,
}: IButtonProp) => {
  const { whiteBase, gray600, primary600, error600 } = useGetColors();
  const isText = typeof children === 'string';
  const isDisabled = disabled || loading;

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
      classNames={{
        root: cn(
          'rounded-xl p-[0.75px] !min-w-fit',
          getRootClassesBySize(size),
          getRootClassesByVariant(variant),
        ),
        inner: cn(
          '!font-semibold !rounded-[11px] !min-w-fit',
          getInnerClassesBySize(size, isText),
          getInnerClassesByVariant(variant),
          isDisabled ? getDisabledClasses(variant) : '',
        ),
      }}
      disabled={isDisabled}
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
    >
      {children}
    </MantineButton>
  );
};

export default Button;
