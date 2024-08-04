import { Text as MantineText } from "@mantine/core";
import React, { MouseEventHandler } from "react";

const sizeMap = {
  "72px": "4.5rem",
  "60px": "3.75rem",
  "48px": "3rem",
  "36px": "2.25rem",
  "30px": "1.875rem",
  "24px": "1.5rem",
  "20px": "1.25rem",
  "18px": "1.125rem",
  "16px": "1rem",
  "14px": "0.875rem",
  "12px": "0.75rem",
  "10px": "0.625rem",
};

const Text = ({
  onClick,
  size,
  weight,
  style,
  className,
  children,
  color,
  ...rest
}: PropsType) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <MantineText
      style={{
        ...style,
      }}
      {...rest}
      fw={weight}
      size={sizeMap[size]}
      c={color}
      className={className}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </MantineText>
  );
};

export default Text;

interface PropsType {
  onClick?: MouseEventHandler<HTMLParagraphElement>;
  size?:
    | "72px"
    | "60px"
    | "48px"
    | "36px"
    | "30px"
    | "24px"
    | "20px"
    | "18px"
    | "16px"
    | "14px"
    | "12px"
    | "10px";
  weight?: 900 | 700 | 600 | 500 | 400 | 300;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  color?: string;
}
