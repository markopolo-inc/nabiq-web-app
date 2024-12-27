import { JsonInputProps, JsonInput as MantineJsonInput } from '@mantine/core';

import styles from './index.module.scss';

export const JsonInput = ({ ...props }: JsonInputProps) => {
  return (
    <MantineJsonInput
      classNames={{
        input: styles.input,
        description: styles.description,
        error: styles.error_description,
        label: styles.label,
      }}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...props}
    />
  );
};
