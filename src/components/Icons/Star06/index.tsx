import { PropTypes } from '../types';

const Star06 = ({
  color = 'currentColor',
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
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_161_1825)'>
        <path
          d='M3.74935 18.3332V14.1665M3.74935 5.83317V1.6665M1.66602 3.74984H5.83268M1.66602 16.2498H5.83268M10.8327 2.49984L9.38753 6.25722C9.15252 6.86825 9.03502 7.17376 8.85229 7.43074C8.69034 7.6585 8.49135 7.8575 8.26359 8.01945C8.0066 8.20218 7.70109 8.31968 7.09007 8.55469L3.33268 9.99984L7.09007 11.445C7.70109 11.68 8.00661 11.7975 8.26359 11.9802C8.49135 12.1422 8.69034 12.3412 8.85229 12.5689C9.03502 12.8259 9.15252 13.1314 9.38753 13.7425L10.8327 17.4998L12.2778 13.7425C12.5128 13.1314 12.6303 12.8259 12.8131 12.5689C12.975 12.3412 13.174 12.1422 13.4018 11.9802C13.6588 11.7975 13.9643 11.68 14.5753 11.445L18.3327 9.99984L14.5753 8.55469C13.9643 8.31968 13.6588 8.20217 13.4018 8.01945C13.174 7.8575 12.975 7.6585 12.8131 7.43074C12.6303 7.17376 12.5128 6.86825 12.2778 6.25722L10.8327 2.49984Z'
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_161_1825'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star06;
