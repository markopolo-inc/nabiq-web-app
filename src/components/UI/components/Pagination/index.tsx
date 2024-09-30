import { Pagination as PaginationField, PaginationProps } from '@mantine/core';

import styles from './Pagination.module.scss';

const Pagination = ({ ...rest }: PaginationProps) => {
  return (
    <PaginationField
      color='#4685F6'
      classNames={{
        root: styles.root,
        control: styles.control,
      }}
      {...rest}
    />
  );
};

export default Pagination;
