import { FiCheck, FiMinus, FiPrimitiveDot } from '@nabiq-icons';
import { ChangeEventHandler, useRef } from 'react';

import { useGetColors } from '../../hooks';
import Text from '../Text';
import styles from './_Checkbox.module.scss';

const Checkbox = ({
  indeterminate = false,
  size = 'sm',
  disabled = false,
  id,
  value = undefined,
  checked = false,
  onChange,
  variant = 'checkbox',
  readOnly = false,
  label = '',
}: PropTypes) => {
  const ref = useRef(null);
  const { gray300, primary50, gray700, primary100, primary600, whiteBase, primary700, gray100 } =
    useGetColors();

  const sizeMap = {
    md: 20,
    sm: 16,
  };

  const iconSizeMap = {
    checkbox: {
      md: 10,
      sm: 8,
    },
    radio: {
      md: 8,
      sm: 6,
    },
    'check-circle': {
      md: 9.33,
      sm: 8,
    },
  };

  const radiusSizeMap = {
    md: 6,
    sm: 4,
  };

  const radiusMap = {
    checkbox: radiusSizeMap[size],
    radio: 50,
    'check-circle': 50,
  };

  const iconColorMap = {
    checkbox: primary600,
    radio: primary600,
    'check-circle': whiteBase,
  };

  const iconMap = {
    checkbox: FiCheck,
    radio: FiPrimitiveDot,
    'check-circle': FiCheck,
  };

  const Icon = iconMap[variant];

  const checkedBackgroundColorMap = {
    checkbox: primary50,
    radio: primary50,
    'check-circle': primary600,
  };

  const checkedMouseEnterBorderColorMap = {
    checkbox: primary600,
    radio: primary600,
    'check-circle': primary700,
  };

  const checkedMouseEnterBackgroundColorMap = {
    checkbox: primary100,
    radio: primary100,
    'check-circle': primary700,
  };

  const checkedMouseLeaveBackgroundColorMap = {
    checkbox: primary50,
    radio: primary50,
    'check-circle': primary600,
  };

  const disabledIconColorMap = {
    checkbox: gray300,
    radio: gray300,
    'check-circle': whiteBase,
  };

  const disabledBackGroundColor = {
    checkbox: gray100,
    radio: gray100,
    'check-circle': gray300,
  };

  const indeterminateIconSize = {
    md: 9.5,
    sm: 7,
  };

  return (
    <div className='flex gap-2 flex-nowrap'>
      <span
        onClick={() => {
          if (!disabled && onChange) {
            // @ts-expect-error: ref.current may have properties that TypeScript is not aware of
            onChange({
              ...ref,
              currentTarget: ref.current,
            });
          }
        }}
        style={{
          height: sizeMap[size],
          width: sizeMap[size],
        }}
        className={styles.container}
        onMouseEnter={() => {
          if (!disabled) {
            ref.current.style.background = checked
              ? checkedMouseEnterBackgroundColorMap[variant]
              : primary100;
            ref.current.style.borderColor = checked
              ? checkedMouseEnterBorderColorMap[variant]
              : primary600;
          }
        }}
        onMouseLeave={() => {
          if (!disabled) {
            ref.current.style.background = checked
              ? checkedMouseLeaveBackgroundColorMap[variant]
              : whiteBase;
            ref.current.style.borderColor = checked ? primary600 : gray300;
          }
        }}
      >
        <input
          value={value}
          readOnly={readOnly}
          ref={ref}
          style={{
            borderRadius: radiusMap[variant],
            background:
              disabled && checked
                ? disabledBackGroundColor[variant]
                : disabled
                  ? gray100
                  : checked || (indeterminate && variant === 'checkbox')
                    ? checkedBackgroundColorMap[variant]
                    : whiteBase,
            borderColor: disabled
              ? gray300
              : checked || (indeterminate && variant === 'checkbox')
                ? primary600
                : gray300,
            height: sizeMap[size],
            width: sizeMap[size],
          }}
          disabled={disabled}
          type='checkbox'
          className={styles.input}
          id={id}
          checked={checked}
        />
        <div
          className={styles.icon}
          style={{
            opacity: checked || (indeterminate && variant === 'checkbox') ? 1 : 0,
            width: sizeMap[size],
          }}
        >
          {indeterminate && variant === 'checkbox' ? (
            <FiMinus
              size={indeterminateIconSize[size]}
              color={disabled ? disabledIconColorMap[variant] : iconColorMap[variant]}
            />
          ) : (
            <Icon
              size={iconSizeMap[variant][size]}
              color={disabled ? disabledIconColorMap[variant] : iconColorMap[variant]}
            />
          )}
        </div>
      </span>
      {label &&
        (typeof label === 'string' ? (
          <Text color={gray700} weight={500} size='14px'>
            {label}
          </Text>
        ) : (
          label
        ))}
    </div>
  );
};

export default Checkbox;

interface PropTypes {
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  id?: string;
  value?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  variant?: 'checkbox' | 'radio' | 'check-circle';
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
}
