import { Loader, UnstyledButton as MantineButton } from '@mantine/core';
import cn from 'classnames';

import { useGetColors } from '../../hooks';
import {
  IButtonProp,
  getDisabledClasses,
  getInnerClassesBySize,
  getInnerClassesByVariant,
  getRootClassesByVariant,
} from './utils';

const getLoaderSizes = (size) => {
  switch (size) {
    case 'sm':
      return 18;
    case 'md':
      return 18;
    case 'lg':
      return 20;
  }
};

const Button = ({
  className,
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
  type = 'button',
}: IButtonProp) => {
  const { gray400 } = useGetColors();
  const isText = typeof children === 'string';
  const isDisabled = disabled || loading;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <MantineButton
      type={type}
      id={id}
      classNames={{
        root: cn(
          'rounded-xl p-[0.75px] min-w-fit',
          fullWidth ? '!w-full' : 'w-fit',
          !isDisabled ? 'transition-transform duration-75 active:scale-[0.98]' : '',
          getRootClassesByVariant(variant),
          className,
        ),
      }}
      disabled={isDisabled}
      onClick={(e) => handleClick(e)}
    >
      <div
        className={cn(
          '!font-semibold !rounded-[11.2px] !w-full flex',
          'items-center justify-center !flex-nowrap gap-2',
          getInnerClassesBySize(size, isText),
          getInnerClassesByVariant(variant),
          isDisabled ? getDisabledClasses(variant) : '',
        )}
      >
        {loading && isText ? (
          <Loader color={gray400} size={getLoaderSizes(size)} />
        ) : leadingIcon ? (
          leadingIcon
        ) : null}
        <span className='whitespace-nowrap flex items-center justify-center'>
          {!isText && loading ? <Loader color={gray400} size={getLoaderSizes(size)} /> : children}
        </span>
        {trailingIcon ? trailingIcon : null}
      </div>
    </MantineButton>
  );
};

export default Button;
