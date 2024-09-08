import React from 'react';

import styles from './index.module.css';

const TableRow = ({
  className,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>) => {
  return <tr className={`${styles.tr} ${className}`} {...rest} />;
};

export default TableRow;
