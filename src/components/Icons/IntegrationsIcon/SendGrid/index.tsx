import { CSSProperties, MouseEventHandler } from 'react';

const SendGrid = ({ size = 32, onClick, style }: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      fill='none'
    >
      <g clipPath='url(#clip0_538_4173)'>
        <path
          d='M32 0V21.3334H21.3334V31.9996H0.00025V21.3333H0V10.6665H10.6666V0H32Z'
          fill='#9DD6E3'
        />
        <path d='M0 31.9995H10.6666V21.3329H0V31.9995Z' fill='#3F72AB' />
        <path
          d='M21.3337 21.3334H32.0004V10.6664H21.3337V21.3334ZM10.667 10.6666H21.3337V0H10.667V10.6666Z'
          fill='#00A9D1'
        />
        <path d='M10.667 21.3331H21.3337V10.6664H10.667V21.3331Z' fill='#2191C4' />
        <path d='M21.333 10.6666H31.9996V0H21.333V10.6666Z' fill='#3F72AB' />
      </g>
      <defs>
        <clipPath id='clip0_538_4173'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SendGrid;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
