import { PropTypes } from '../types';

const ChevronRight = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => (
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
      d='M9 18L15 12L9 6'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ChevronRight;
