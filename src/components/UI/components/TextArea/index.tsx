import { Textarea, TextareaProps } from '@mantine/core';

import styles from './TextArea.module.scss';

const TextArea = ({ ...rest }: TextareaProps) => {
  return (
    <Textarea
      classNames={{
        input: styles.input,
      }}
      {...rest}
    />
  );
};

export default TextArea;
