import { PropTypes } from '../types';

const Plus02 = ({
  color = 'currentColor',
  size = 20,
  strokeWidth = 1.66667,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M10.0003 4.16669V15.8334M4.16699 10H15.8337'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Plus02;
