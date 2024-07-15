import React from 'react';

const TableBody = ({
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>) => {
  return <tbody {...rest} />;
};

export default TableBody;
