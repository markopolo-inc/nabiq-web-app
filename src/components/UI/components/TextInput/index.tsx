import { TextInput as Input, TextInputProps } from '@mantine/core';
import cn from 'classnames';

import styles from './Input.module.scss';

const TextInput = ({ leftSection, rightSection, ...rest }: TextInputProps) => {
  return (
    <Input
      classNames={{
        input: cn(styles.input, leftSection ? '!pl-[33px]' : '', rightSection ? '!pr-[33px]' : ''),
        description: styles.description,
        error: styles.error_description,
        label: styles.label,
      }}
      leftSection={leftSection}
      rightSection={rightSection}
      {...rest}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  );
};

export default TextInput;
