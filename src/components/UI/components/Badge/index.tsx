import {
  BadgeProps as BadgeFieldProps,
  Badge as BadgeField,
} from "@mantine/core";
import styles from "./Badge.module.scss";

type BadgePropsType = BadgeFieldProps & {
  label: string;
  color: "primary" | "secondary" | "danger" | "success" | "warning";
};

const Badge = ({
  className,
  label,
  color,
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
      }}
      variant={variant}
      {...rest}
    >
      {label}
    </BadgeField>
  );
};

export default Badge;
