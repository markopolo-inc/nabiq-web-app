import { CSSProperties, MouseEventHandler } from "react";

const ArrowNarrowDown = ({
  color = "#12B76A",
  size = 10,
  strokeWidth = 1.5,
  onClick,
  style,
}: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99967 3.33331V12.6666M7.99967 12.6666L12.6663 7.99998M7.99967 12.6666L3.33301 7.99998"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default ArrowNarrowDown;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
