import React from 'react';

import styles from './index.module.css';

const Td = ({
  className,
  ...rest
}: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <td className={`${className} ${styles.td}`} {...rest} />
);

export default Td;
