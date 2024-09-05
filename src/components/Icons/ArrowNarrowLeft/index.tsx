import { CSSProperties, MouseEventHandler } from 'react';

const ArrowNarrowLeft = ({
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
      strokeWidth={strokeWidth}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16.6666 10H3.33331M3.33331 10L8.33331 15M3.33331 10L8.33331 5' stroke={color} />
    </svg>
  );
};

export default ArrowNarrowLeft;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
