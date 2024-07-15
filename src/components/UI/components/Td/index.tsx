import React from 'react';

import { useGetColors } from '../../hooks';

import styles from './index.module.css';

const Td = ({
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>) => <td className={`${className} ${styles.td}`} {...rest} />;

export default Td;
