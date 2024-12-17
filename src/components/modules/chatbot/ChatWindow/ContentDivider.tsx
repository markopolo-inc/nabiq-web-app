import React from 'react';

export const ContentDivider: React.FC = () => (
  <div className='flex items-center'>
    <div className='flex-grow border-t border-gray-200'></div>
    <span className='flex-shrink mx-4 font-medium text-sm text-gray-600'>Today</span>
    <div className='flex-grow border-t border-gray-200'></div>
  </div>
);
