import { Textarea, TextareaProps } from '@mantine/core';

import styles from './TextArea.module.scss';

const TextArea = ({ ...rest }: TextareaProps) => {
  return (
    <Textarea
      classNames={{
        input: styles.input,
        description: styles.description,
        error: styles.error_description,
      }}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...rest}
    />
  );
};

export default TextArea;
