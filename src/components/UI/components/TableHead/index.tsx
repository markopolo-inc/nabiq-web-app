import React from 'react';

import styles from './index.module.scss';

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const TableHead = ({ className, ...rest }: HeaderProps) => {
  return <thead className={`${styles.thead} ${className}`} {...rest} />;
};

export default TableHead;
