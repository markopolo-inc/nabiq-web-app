import { PropTypes } from '../types';

const AlertCircle = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => (
  <svg
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    width={size}
    height={size}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    fill='none'
  >
    <g clipPath='url(#clip0_354_2388)'>
      <path
        d='M7.99992 5.33334V8.00001M7.99992 10.6667H8.00659M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_354_2388'>
        <rect width={size} height={size} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default AlertCircle;
