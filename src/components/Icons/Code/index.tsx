import { PropTypes } from '../types';

const Code = ({ color = '#12B76A', size = 10, strokeWidth = 1.5, onClick, style }: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      viewBox='0 0 30 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.6666 19.6667L28.3333 13L21.6666 6.33333M8.33329 6.33333L1.66663 13L8.33329 19.6667M17.6666 1L12.3333 25'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Code;
