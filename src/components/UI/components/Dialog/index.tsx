import { Dialog as DialogField, DialogProps } from "@mantine/core";

type DialogFieldProps = DialogProps;

const Dialog = ({ ...rest }: DialogFieldProps) => {
  return <DialogField {...rest} />;
};

export default Dialog;
