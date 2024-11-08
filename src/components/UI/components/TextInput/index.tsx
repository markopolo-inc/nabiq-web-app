import { TextInput as Input, TextInputProps } from '@mantine/core';
import { useGetColors } from '@nabiq-ui';

import Text from '../Text';
import styles from './Input.module.scss';

const TextInput = ({ label, required = false, ...rest }: TextInputProps) => {
  const { gray700 } = useGetColors();

  return (
    <Input
      classNames={{
        input: styles.input,
        description: styles.description,
      }}
      label={
        label && (
          <Text
            size='14px'
            color={gray700}
            weight={500}
            style={{
              display: label ? 'inline-block' : 'none',
              marginBottom: label ? 8 : 0,
            }}
          >
            {label} {required && <span>&#42;</span>}
          </Text>
        )
      }
      {...rest}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  );
};

export default TextInput;
