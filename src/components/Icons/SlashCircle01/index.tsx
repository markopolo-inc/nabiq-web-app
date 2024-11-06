import { PropTypes } from '../types';

const SlashCircle01 = ({
  color = '#F04438',
  size = 10,
  strokeWidth = 1.67,
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
      <g clipPath='url(#clip0_612_1522)'>
        <path
          d='M4.10833 4.10829L15.8917 15.8916M18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 10 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z'
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_612_1522'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SlashCircle01;
