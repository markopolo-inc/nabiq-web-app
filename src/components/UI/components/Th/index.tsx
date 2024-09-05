import React from 'react';

import styles from './index.module.css';

const Th = ({
  ...rest
}: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <th className={styles.th} {...rest} />
);

export default Th;
