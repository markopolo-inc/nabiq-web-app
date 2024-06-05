import { useGetColors } from '@nabiq-ui';
import { TextInput as Input, TextInputProps } from '@mantine/core';

import Text from '../Text';

import styles from './Input.module.scss';

const TextInput = ({ label, required = false, ...rest }: TextInputProps) => {
  const { gray700 } = useGetColors();

  return (
    <Input
      classNames={{
        input: styles.primary,
      }}
      label={
        label && (
          <Text
            size='14px'
            color={gray700}
            weight={500}
            style={{
              display: label ? 'inline-block' : 'none',
              marginBottom: label ? 4 : 0,
            }}
          >
            {label} {required && <span>&#42;</span>}
          </Text>
        )
      }
      {...rest}
    />
  );
};

export default TextInput;
