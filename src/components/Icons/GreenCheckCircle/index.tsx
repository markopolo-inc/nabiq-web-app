import { PropTypes } from '../types';

export const GreenCheckCircle = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2.66667,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
      onClick={(e) => onClick && onClick(e)}
    >
      <rect width='32' height='32' rx='16' fill={color} />
      <path
        d='M10 16L14 20L22 12'
        stroke='white'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GreenCheckCircle;
