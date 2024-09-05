import { CSSProperties, MouseEventHandler } from "react";

const ArrowUp = ({
  color = "#12B76A",
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      strokeWidth={strokeWidth}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 8.5V1.5M5 1.5L1.5 5M5 1.5L8.5 5" stroke={color} />
    </svg>
  );
};

export default ArrowUp;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
