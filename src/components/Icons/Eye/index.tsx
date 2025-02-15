import { PropTypes } from '../types';

const Eye = ({
  strokeWidth = '1.6',
  size = 20,
  color = 'currentColor',
  onClick,
  style,
}: PropTypes) => (
  <svg
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91791 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16666 10.0003 4.16666C14.2545 4.16666 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91791 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Eye;
