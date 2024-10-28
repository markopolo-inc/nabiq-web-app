import { PropTypes } from 'src/components/Icons/types.ts';

export const CheckboxIcon = ({ size, color, ...restProps }: PropTypes) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps}>
    <path
      d='M10 3L4.5 8.5L2 6'
      stroke={color}
      strokeWidth={size}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const CircleIcon = ({ size, color, ...restProps }: PropTypes) => (
  <svg
    viewBox={`0 0 ${size} ${size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...restProps}
  >
    <rect width={size} height={size} rx={Number(size) / 2} fill={color} />
  </svg>
);

export const MinusIcon = ({ size, color, ...restProps }: PropTypes) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps}>
    <path
      d='M2.5 6H9.5'
      stroke={color}
      strokeWidth={size}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
