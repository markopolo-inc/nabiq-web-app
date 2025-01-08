import { PropTypes } from '../types';

export const CreditCardPlus = ({
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
    >
      <path
        d='M25.3333 27.9998V19.9998M21.3333 23.9998H29.3333M29.3333 13.3332H2.66663M29.3333 15.9998V10.9332C29.3333 9.4397 29.3333 8.69296 29.0426 8.12253C28.787 7.62077 28.379 7.21282 27.8773 6.95716C27.3068 6.6665 26.5601 6.6665 25.0666 6.6665H6.93329C5.43982 6.6665 4.69308 6.6665 4.12265 6.95715C3.62089 7.21282 3.21294 7.62076 2.95728 8.12253C2.66663 8.69296 2.66663 9.4397 2.66663 10.9332V21.0665C2.66663 22.56 2.66663 23.3067 2.95728 23.8771C3.21294 24.3789 3.62089 24.7869 4.12265 25.0425C4.69308 25.3332 5.43982 25.3332 6.93329 25.3332H16'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
