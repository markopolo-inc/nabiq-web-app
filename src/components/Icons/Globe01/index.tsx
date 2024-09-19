import { PropTypes } from '../types';

const Globe01 = ({
  color = 'currentColor',
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.66667 15.9998H29.3333M2.66667 15.9998C2.66667 23.3636 8.63621 29.3332 16 29.3332M2.66667 15.9998C2.66667 8.63604 8.63621 2.6665 16 2.6665M29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332M29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665M16 2.6665C19.335 6.31764 21.2303 11.0559 21.3333 15.9998C21.2303 20.9438 19.335 25.682 16 29.3332M16 2.6665C12.665 6.31764 10.7697 11.0559 10.6667 15.9998C10.7697 20.9438 12.665 25.682 16 29.3332'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Globe01;
