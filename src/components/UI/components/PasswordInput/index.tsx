import { PasswordInput as MantinePasswordInput, PasswordInputProps } from '@mantine/core';
import { FiEye, FiEyeOff } from '@nabiq-icons';
import { useGetColors } from '@nabiq-ui';

import styles from './Input.module.scss';

const PasswordInput = ({ ...rest }: PasswordInputProps) => {
  const { gray400 } = useGetColors();

  return (
    <MantinePasswordInput
      classNames={{
        input: styles.input,
        innerInput: styles.innerInput,
        description: styles.description,
        error: styles.error_description,
        label: styles.label,
      }}
      visibilityToggleIcon={({ reveal }) => {
        return reveal ? (
          <FiEyeOff size={20} color={gray400} />
        ) : (
          <FiEye size={20} color={gray400} />
        );
      }}
      {...rest}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  );
};

export default PasswordInput;
