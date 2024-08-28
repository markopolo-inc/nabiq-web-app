// import {
//   Avatar as AvatarField,
//   AvatarProps,
//   ElementProps,
// } from "@mantine/core";

// interface AvatarFieldProps
//   extends AvatarProps,
//     ElementProps<"button", keyof AvatarProps> {}

// const Avatar = ({ ...rest }: AvatarFieldProps) => {
//   return <AvatarField component="button" {...rest} />;
// };

// export default Avatar;


import {
  Avatar as AvatarField,
  AvatarProps,
  ElementProps,
} from "@mantine/core";

interface AvatarFieldProps
  extends AvatarProps,
  ElementProps<"button", keyof AvatarProps> {
  active?: boolean;
}

const Avatar = ({ active = false, style, ...rest }: AvatarFieldProps) => {
  const activeStyles = active
    ? {
      border: '0.75px solid #000000',
    }
    : {};

  return (
    <AvatarField
      component="button"
      style={{ ...style, ...activeStyles }}
      {...rest}
    />
  );
};

export default Avatar;
