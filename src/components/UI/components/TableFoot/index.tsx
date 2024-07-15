import { HTMLAttributes } from 'react';

const TableFoot = ({ ...rest }: HTMLAttributes<HTMLTableSectionElement>) => {
  return <tfoot {...rest}>{rest.children}</tfoot>;
};

export default TableFoot;
