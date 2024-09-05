import { PropTypes } from "../types";

const Dot = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 1.7,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="3" fill={color} strokeWidth={strokeWidth} />
  </svg>
);

export default Dot;
