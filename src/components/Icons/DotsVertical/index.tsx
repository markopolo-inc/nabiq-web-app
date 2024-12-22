// <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M2.00008 8.8335C2.46032 8.8335 2.83341 8.4604 2.83341 8.00016C2.83341 7.53993 2.46032 7.16683 2.00008 7.16683C1.53984 7.16683 1.16675 7.53993 1.16675 8.00016C1.16675 8.4604 1.53984 8.8335 2.00008 8.8335Z" stroke={color" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M2.00008 3.00016C2.46032 3.00016 2.83341 2.62707 2.83341 2.16683C2.83341 1.70659 2.46032 1.3335 2.00008 1.3335C1.53984 1.3335 1.16675 1.70659 1.16675 2.16683C1.16675 2.62707 1.53984 3.00016 2.00008 3.00016Z" stroke={color" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M2.00008 14.6668C2.46032 14.6668 2.83341 14.2937 2.83341 13.8335C2.83341 13.3733 2.46032 13.0002 2.00008 13.0002C1.53984 13.0002 1.16675 13.3733 1.16675 13.8335C1.16675 14.2937 1.53984 14.6668 2.00008 14.6668Z" stroke={color" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
import { PropTypes } from '../types';

const DotsVertical = ({
  size = 20,
  color = '@9AA4B2',
  strokeWidth = 1.6,
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
      d='M10.0001 10.8335C10.4603 10.8335 10.8334 10.4604 10.8334 10.0002C10.8334 9.53993 10.4603 9.16683 10.0001 9.16683C9.53984 9.16683 9.16675 9.53993 9.16675 10.0002C9.16675 10.4604 9.53984 10.8335 10.0001 10.8335Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.0001 5.00016C10.4603 5.00016 10.8334 4.62707 10.8334 4.16683C10.8334 3.70659 10.4603 3.3335 10.0001 3.3335C9.53984 3.3335 9.16675 3.70659 9.16675 4.16683C9.16675 4.62707 9.53984 5.00016 10.0001 5.00016Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.0001 16.6668C10.4603 16.6668 10.8334 16.2937 10.8334 15.8335C10.8334 15.3733 10.4603 15.0002 10.0001 15.0002C9.53984 15.0002 9.16675 15.3733 9.16675 15.8335C9.16675 16.2937 9.53984 16.6668 10.0001 16.6668Z'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DotsVertical;
