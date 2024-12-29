import { PropTypes } from '../types';

export const FiBell02 = ({
  size = 28,
  color = 'currentColor',
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.6665 17.5H8.33315M14.9998 6.66663C14.9998 5.34054 14.473 4.06877 13.5353 3.13109C12.5977 2.19341 11.3259 1.66663 9.99981 1.66663C8.67373 1.66663 7.40196 2.19341 6.46428 3.13109C5.5266 4.06877 4.99981 5.34054 4.99981 6.66663C4.99981 9.24178 4.3502 11.0049 3.62453 12.1711C3.01242 13.1549 2.70636 13.6467 2.71758 13.7839C2.73001 13.9359 2.7622 13.9938 2.88463 14.0846C2.99519 14.1666 3.49364 14.1666 4.49052 14.1666H15.5091C16.506 14.1666 17.0044 14.1666 17.115 14.0846C17.2374 13.9938 17.2696 13.9359 17.282 13.7839C17.2933 13.6467 16.9872 13.1549 16.3751 12.1711C15.6494 11.0049 14.9998 9.24178 14.9998 6.66663Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
