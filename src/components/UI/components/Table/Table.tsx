import React, { ReactNode } from 'react';

import styles from './index.module.scss';

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  maxHeight?: string | number;
  striped?: boolean;
  borderTopRightRadius?: string | number;
  borderTopLeftRadius?: string | number;
  withBanner?: boolean;
  banner?: ReactNode;
  pagination?: ReactNode;
}

const Table = ({
  striped = true,
  maxHeight = 550,
  borderTopRightRadius,
  borderTopLeftRadius,
  className,
  style,
  withBanner = false,
  banner,
  pagination,
  ...rest
}: TableProps) => {
  return (
    <div>
      {withBanner && Boolean(banner) && (
        <div
          style={{
            border: '1px solid #dcdcdc',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
            background: 'white',
          }}
        >
          {banner}
        </div>
      )}
      <div
        className={styles.container}
        style={{
          maxHeight,
          borderTopRightRadius: withBanner ? 0 : borderTopRightRadius,
          borderTopLeftRadius: withBanner ? 0 : borderTopLeftRadius,
          borderBottomRightRadius: pagination ? 0 : undefined,
          borderBottomLeftRadius: pagination ? 0 : undefined,
          // borderTop: withBanner ? 'none' : '',
          ...style,
        }}
      >
        <table
          className={`${styles.table} ${striped ? styles.striped : undefined} ${className}`}
          {...rest}
        />
      </div>
      {Boolean(pagination) && (
        <div
          style={{
            padding: '20px 24px',
            border: '1px solid #dcdcdc',
            borderBottom: '1px solid #dcdcdc',
            borderTop: 'none',
            borderRadius: ' 0 0 12px 12px',
            background: 'white',
          }}
        >
          {pagination}
        </div>
      )}
    </div>
  );
};

export default Table;
