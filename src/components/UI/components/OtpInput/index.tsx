import React from 'react';
import OtpInput from 'react18-input-otp';

import styles from './OtpInput.module.scss';

const Input = ({ value, onChange }: PropTypes) => {
  return (
    <div className={styles.container}>
      <OtpInput value={value} onChange={onChange} numInputs={6} />
    </div>
  );
};

export default Input;

interface PropTypes {
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
}
