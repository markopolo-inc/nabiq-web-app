import { PropTypes } from '../types';

const AlertTriangle = ({
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
      d='M9.99979 7.50019V10.8335M9.99979 14.1669H10.0081M8.84588 3.24329L1.99181 15.0821C1.61164 15.7388 1.42156 16.0671 1.44965 16.3366C1.47416 16.5716 1.5973 16.7852 1.78843 16.9242C2.00756 17.0835 2.38695 17.0835 3.14572 17.0835H16.8539C17.6126 17.0835 17.992 17.0835 18.2111 16.9242C18.4023 16.7852 18.5254 16.5716 18.5499 16.3366C18.578 16.0671 18.3879 15.7388 18.0078 15.0821L11.1537 3.24329C10.7749 2.58899 10.5855 2.26184 10.3384 2.15196C10.1228 2.05612 9.87675 2.05612 9.6612 2.15196C9.4141 2.26184 9.22469 2.58899 8.84588 3.24329Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default AlertTriangle;
