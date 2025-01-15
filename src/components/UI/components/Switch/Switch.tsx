import { Switch as SwitchField, SwitchProps } from '@mantine/core';
import React from 'react';

import styles from './index.module.scss';

const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  return (
    <SwitchField
      style={{
        cursor: 'pointer',
      }}
      classNames={{
        input: styles.input,
        track: styles.track,
        thumb: styles.thumb,
      }}
      {...rest}
    />
  );
};

export default Switch;
