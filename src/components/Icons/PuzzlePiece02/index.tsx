import { PropTypes } from '../types';

const PuzzlePiece02 = ({
  size = 28,
  color = 'currentColor',
  strokeWidth = 1.7,
  onClick,
  fill = 'none',
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox='0 0 24 24'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2L15.6 5.6C18 -0.7 24.7 6 18.4 8.4L22 12L18.4 15.6C16 9.3 9.3 16 15.6 18.4L12 22L8.4 18.4C6 24.7 -0.7 18 5.6 15.6L2 12L5.6 8.4C8 14.7 14.7 8 8.4 5.6L12 2Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default PuzzlePiece02;
