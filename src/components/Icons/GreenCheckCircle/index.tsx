import { PropTypes } from '../types';

export const GreenCheckCircle = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      width={size}
      height={size}
      onClick={(e) => onClick && onClick(e)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <rect width={size} height={size} rx={Number(size) / 2} fill='#17B26A' />
      <path
        d='M7.5 12L10.5 15L16.5 9'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GreenCheckCircle;
