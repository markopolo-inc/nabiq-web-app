import { CSSProperties, MouseEventHandler } from 'react';

const PrimitiveDot = ({
  color = 'currentColor',
  size = 6,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 6 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
  >
    <circle cx='3' cy='3' r='3' fill={color} />
  </svg>
);

export default PrimitiveDot;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
