import { Skeleton } from '@mantine/core';

const TableLoader = ({ rows = 2 }: { rows?: number }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 20,
        //  marginTop: 15,
      }}
    >
      <div>
        <div
          style={{
            // padding: '15px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {Array.from(Array(rows).keys())?.map((_, idx) => (
            <div key={idx}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  gap: 10,
                }}
              >
                <Skeleton height={25} radius='md' />
                <Skeleton height={25} radius='md' />
              </div>

              <div style={{ height: 10 }} />

              <Skeleton height={25} radius='md' width='70%' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableLoader;
