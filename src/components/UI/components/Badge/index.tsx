import {
  BadgeProps as BadgeFieldProps,
  Badge as BadgeField,
} from "@mantine/core";
import styles from "./Badge.module.scss";

type BadgePropsType = BadgeFieldProps & {
  label: string;
  color: "primary" | "secondary" | "danger" | "success" | "warning";
  size: "sm" | "md" | "lg";
};

const Badge = ({
  className,
  label,
  color,
  size = "sm",
  variant = "outline",
  ...rest
}: BadgePropsType) => {
  const getColor = () => {
    switch (color) {
      case "primary":
        return {
          color: "#0A52D6",
          bg_color: "#fff",
          border_color: "#0A52D6",
        };
      case "secondary":
        return {
          color: "#364152",
          bg_color: "#fff",
          border_color: "#364152",
        };
      case "danger":
        return {
          color: "#B42318",
          bg_color: "#fff",
          border_color: "#B42318",
        };
      case "success":
        return {
          color: "#067647",
          bg_color: "#fff",
          border_color: "#067647",
        };
      case "warning":
        return {
          color: "#dc6803",
          bg_color: "#fff",
          border_color: "#dc6803",
        };
      default:
        return {
          color: "text-black",
          bg_color: "bg-white",
          border_color: "border-black",
        };
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return {
          font_size: "12px",
          line_height: "18px",
          padding: "1px 8px",
        };
      case "md":
        return {
          font_size: "14px",
          line_height: "20px",
          padding: "2px 10px",
        };
      case "lg":
        return {
          font_size: "14px",
          line_height: "20px",
          padding: "4px 10px",
        };
      default:
        return {
          font_size: "12px",
          line_height: "18px",
          padding: "2px 8px",
        };
    }
  };

  return (
    <BadgeField
      className={className}
      classNames={{
        root: styles.badge_wrapper,
        label: styles.badge_label,
      }}
      style={{
        "--badge-color": getColor().color,
        "--badge-bg-color": getColor().bg_color,
        "--badge-bd-color": getColor().border_color,
        "--badge-fz": getSize().font_size,
        "--badge-lh": getSize().line_height,
        "--badge-pd": getSize().padding,
      }}
      variant={variant}
      {...rest}
    >
      {label}
    </BadgeField>
  );
};

export default Badge;
