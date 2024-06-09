import { CSSProperties, MouseEventHandler } from 'react';

const CheckIcon = ({
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
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 3L4.5 8.5L2 6'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckIcon;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
