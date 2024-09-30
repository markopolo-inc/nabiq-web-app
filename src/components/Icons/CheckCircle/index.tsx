import { PropTypes } from '../types';

const CheckCircle = ({
  size = 16,
  color = 'currentColor',
  fill = 'none',
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox='0 0 16 16'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_421_21008)'>
      <path
        d='M4.99967 7.99998L6.99967 9.99998L10.9997 5.99998M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_421_21008'>
        <rect width={size} height={size} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default CheckCircle;
