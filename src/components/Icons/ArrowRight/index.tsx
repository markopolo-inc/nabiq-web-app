import { CSSProperties, MouseEventHandler } from 'react';

const ArrowRight = ({
  color = '#12B76A',
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      strokeWidth={strokeWidth}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5' stroke={color} />
    </svg>
  );
};

export default ArrowRight;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
