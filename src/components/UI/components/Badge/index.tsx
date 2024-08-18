import {
  BadgeProps as BadgeFieldProps,
  Badge as BadgeField,
} from "@mantine/core";

type BadgeProps = BadgeFieldProps & {
  label: string;
};

const Badge = ({ variant = "outline", label, color, ...rest }: BadgeProps) => {
  return (
    <BadgeField color={color} variant={variant} {...rest}>
      {label}
    </BadgeField>
  );
};

export default Badge;

// TODO: Will remove (Example)
// <Badge
//     size="lg"
//     color="#0A52D6"
//     label="Hello"
//     rightSection={<FiCheck color="#0A52D6" />}
// />
