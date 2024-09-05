import { PropTypes } from "../types";

const CrossX = ({
  color = "#12B76A",
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 1L1 11M1 1L11 11" stroke={color} />
    </svg>
  );
};

export default CrossX;
