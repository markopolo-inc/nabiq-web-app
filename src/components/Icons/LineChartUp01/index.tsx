import { PropTypes } from '../types';

const LineChartUp01 = ({
  size = 24,
  color = '#364152',
  strokeWidth = 2,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M21.5 21H5.1C4.53995 21 4.25992 21 4.04601 20.891C3.85785 20.7951 3.70487 20.6422 3.60899 20.454C3.5 20.2401 3.5 19.9601 3.5 19.4V3M20.5 8L16.5811 12.1827C16.4326 12.3412 16.3584 12.4204 16.2688 12.4614C16.1897 12.4976 16.1026 12.5125 16.016 12.5047C15.9179 12.4958 15.8215 12.4458 15.6287 12.3457L12.3713 10.6543C12.1785 10.5542 12.0821 10.5042 11.984 10.4953C11.8974 10.4875 11.8103 10.5024 11.7312 10.5386C11.6416 10.5796 11.5674 10.6588 11.4189 10.8173L7.5 15'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default LineChartUp01;
