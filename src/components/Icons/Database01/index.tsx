import { PropTypes } from '../types';

const Database01 = ({
  color = '#12B76A',
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
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.5 4.1665C17.5 5.54722 14.1421 6.6665 10 6.6665C5.85786 6.6665 2.5 5.54722 2.5 4.1665M17.5 4.1665C17.5 2.78579 14.1421 1.6665 10 1.6665C5.85786 1.6665 2.5 2.78579 2.5 4.1665M17.5 4.1665V15.8332C17.5 17.2165 14.1667 18.3332 10 18.3332C5.83333 18.3332 2.5 17.2165 2.5 15.8332V4.1665M17.5 9.99984C17.5 11.3832 14.1667 12.4998 10 12.4998C5.83333 12.4998 2.5 11.3832 2.5 9.99984'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Database01;
