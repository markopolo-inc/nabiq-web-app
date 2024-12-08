import { PropTypes } from '../types';

const BarChart04 = ({
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.66,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.5 8.16667L1.5 16.5M11.5 8.16667L11.5 16.5M6.5 1.5L6.5 16.5M16.5 1.5V16.5'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default BarChart04;
