import {
  Avatar as AvatarField,
  AvatarProps,
  ElementProps,
} from "@mantine/core";

interface AvatarFieldProps
  extends AvatarProps,
    ElementProps<"button", keyof AvatarProps> {}

const Avatar = ({ ...rest }: AvatarFieldProps) => {
  return <AvatarField component="button" {...rest} />;
};

export default Avatar;
