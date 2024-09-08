import { CSSProperties, MouseEventHandler } from 'react';

const ArrowNarrowUpRight = ({
  color = '#12B76A',
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5 15L15 5M15 5H8.33333M15 5V11.6667' stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default ArrowNarrowUpRight;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
