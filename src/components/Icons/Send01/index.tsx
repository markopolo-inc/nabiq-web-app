import { PropTypes } from '../types';

const Send01 = ({
  size = 28,
  color = 'currentColor',
  strokeWidth = 1.665,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='send-01'>
      <path
        id='Icon'
        d='M8.74976 11.25L17.4998 2.50004M8.85608 11.5234L11.0462 17.1551C11.2391 17.6512 11.3356 17.8993 11.4746 17.9717C11.5951 18.0345 11.7386 18.0346 11.8592 17.9719C11.9983 17.8997 12.095 17.6517 12.2886 17.1558L17.7805 3.0827C17.9552 2.63505 18.0426 2.41123 17.9948 2.2682C17.9533 2.144 17.8558 2.04652 17.7316 2.00503C17.5886 1.95725 17.3647 2.0446 16.9171 2.21929L2.84398 7.71124C2.34808 7.90476 2.10013 8.00152 2.02788 8.14061C1.96524 8.26118 1.96532 8.40472 2.0281 8.52522C2.10052 8.66422 2.34859 8.76069 2.84471 8.95363L8.47638 11.1437C8.57708 11.1829 8.62744 11.2025 8.66984 11.2327C8.70742 11.2595 8.74028 11.2924 8.76709 11.33C8.79734 11.3724 8.81692 11.4227 8.85608 11.5234Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

export default Send01;
