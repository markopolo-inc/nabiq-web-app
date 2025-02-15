import { PropTypes } from '../types';

const NotificationIcon = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.7,
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
    <path
      d='M11.6667 17.5H8.33339M15.0001 6.66669C15.0001 5.3406 14.4733 4.06883 13.5356 3.13115C12.5979 2.19347 11.3261 1.66669 10.0001 1.66669C8.67397 1.66669 7.4022 2.19347 6.46452 3.13115C5.52684 4.06883 5.00006 5.3406 5.00006 6.66669C5.00006 9.24184 4.35045 11.005 3.62478 12.1712C3.01266 13.1549 2.7066 13.6468 2.71783 13.784C2.73025 13.9359 2.76244 13.9939 2.88487 14.0847C2.99544 14.1667 3.49388 14.1667 4.49077 14.1667H15.5093C16.5062 14.1667 17.0047 14.1667 17.1152 14.0847C17.2377 13.9939 17.2699 13.9359 17.2823 13.784C17.2935 13.6468 16.9875 13.1549 16.3753 12.1712C15.6497 11.005 15.0001 9.24184 15.0001 6.66669Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default NotificationIcon;
