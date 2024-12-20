import React from 'react';

export default function Table() {
  const [expandedRows, setExpandedRows] = React.useState<number[]>([]);

  const rows = [
    {
      id: 1,
      parentId: null,
      level: 0,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
      status: 'Active',
    },
    {
      id: 2,
      parentId: 1,
      level: 1,
      name: 'Project A',
      email: 'projecta@example.com',
      role: 'Sub-task',
      status: 'Active',
    },
    {
      id: 3,
      parentId: 1,
      level: 1,
      name: 'Project B',
      email: 'projectb@example.com',
      role: 'Sub-task',
      status: 'Active',
    },
    {
      id: 4,
      parentId: null,
      level: 0,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Designer',
      status: 'Inactive',
    },
  ];

  const toggleRow = (rowId: number) => {
    setExpandedRows((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId],
    );
  };

  // Helper function to check if a row should be visible
  const isRowVisible = (row: (typeof rows)[0]): boolean => {
    if (row.level === 0) return true;
    if (row.parentId === null) return true;
    return expandedRows.includes(row.parentId);
  };

  // Helper function to check if a row has children
  const hasChildren = (rowId: number): boolean => {
    return rows.some((row) => row.parentId === rowId);
  };

  return (
    <div className='overflow-x-auto p-10'>
      <table className='min-w-full bg-white border border-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Email
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Role
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Status
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {rows.filter(isRowVisible).map((row) => (
            <tr
              key={row.id}
              className={`
                cursor-pointer hover:bg-gray-50
                ${row.level > 0 ? 'bg-gray-50' : ''}
              `}
              onClick={() => (hasChildren(row.id) ? toggleRow(row.id) : null)}
            >
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                <div style={{ paddingLeft: `${row.level * 20}px` }}>
                  {hasChildren(row.id) && (
                    <span className='mr-2'>{expandedRows.includes(row.id) ? '▼' : '▶'}</span>
                  )}
                  {row.name}
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.email}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.role}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
