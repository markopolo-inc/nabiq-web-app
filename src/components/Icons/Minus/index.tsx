import { CSSProperties, MouseEventHandler } from 'react';

const Minus = ({
  strokeWidth = '1.66666',
  size = 10,
  color = 'currentColor',
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 10 2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
  >
    <path
      d='M1.5 1H8.5'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Minus;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
