import { PropTypes } from '../types';

const DataFlow02 = ({
  size = 28,
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
    viewBox='0 0 20 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10 3V14.2C10 15.8802 10 16.7202 10.327 17.362C10.6146 17.9265 11.0735 18.3854 11.638 18.673C12.2798 19 13.1198 19 14.8 19H15M15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19ZM5 3L15 3M5 3C5 4.10457 4.10457 5 3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1C4.10457 1 5 1.89543 5 3ZM15 3C15 4.10457 15.8954 5 17 5C18.1046 5 19 4.10457 19 3C19 1.89543 18.1046 1 17 1C15.8954 1 15 1.89543 15 3ZM10 11H15M15 11C15 12.1046 15.8954 13 17 13C18.1046 13 19 12.1046 19 11C19 9.89543 18.1046 9 17 9C15.8954 9 15 9.89543 15 11Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DataFlow02;
