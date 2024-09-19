import { PropTypes } from '../types';

const LifeBuoy01 = ({
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
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1816 12.1815L6.57187 6.57178M6.57187 25.428L12.2239 19.7759M19.8147 19.8182L25.4245 25.428M25.4245 6.57178L19.7716 12.2247M29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332C8.63616 29.3332 2.66663 23.3636 2.66663 15.9998C2.66663 8.63604 8.63616 2.6665 16 2.6665C23.3638 2.6665 29.3333 8.63604 29.3333 15.9998ZM21.3333 15.9998C21.3333 18.9454 18.9455 21.3332 16 21.3332C13.0544 21.3332 10.6666 18.9454 10.6666 15.9998C10.6666 13.0543 13.0544 10.6665 16 10.6665C18.9455 10.6665 21.3333 13.0543 21.3333 15.9998Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LifeBuoy01;
