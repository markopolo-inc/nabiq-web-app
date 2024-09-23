import { PropTypes } from '../types';

const Circle = ({
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
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Circle;
