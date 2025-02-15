import { PropTypes } from '../types';

const HelpCircle02 = ({
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
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.06004 5.99998C6.21678 5.55442 6.52614 5.17872 6.93334 4.9394C7.34055 4.70009 7.8193 4.61261 8.28483 4.69245C8.75035 4.7723 9.17259 5.01433 9.47676 5.37567C9.78093 5.737 9.94741 6.19433 9.94671 6.66665C9.94671 7.99998 7.94671 8.66665 7.94671 8.66665M8.00004 11.3333H8.00671M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HelpCircle02;
