import { PropTypes } from '../types';

const Command2 = ({
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
    viewBox='0 0 32 32'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.5 8V12H20.5V8C20.5 5.79086 22.2909 4 24.5 4C26.7091 4 28.5 5.79086 28.5 8C28.5 10.2091 26.7091 12 24.5 12H20.5V20H24.5C26.7091 20 28.5 21.7909 28.5 24C28.5 26.2091 26.7091 28 24.5 28C22.2909 28 20.5 26.2091 20.5 24V20H12.5V24C12.5 26.2091 10.7091 28 8.5 28C6.29086 28 4.5 26.2091 4.5 24C4.5 21.7909 6.29086 20 8.5 20H12.5V12H8.5C6.29086 12 4.5 10.2091 4.5 8C4.5 5.79086 6.29086 4 8.5 4C10.7091 4 12.5 5.79086 12.5 8Z'
      fill={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default Command2;
