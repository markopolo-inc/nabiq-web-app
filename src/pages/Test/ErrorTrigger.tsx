import React, { useState } from 'react';

const ErrorTrigger: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    // Simulate an error
    throw new Error('Manually triggered error for testing.');
  }

  return (
    <div className='text-center'>
      <h1 className='text-xl font-bold'>Error Trigger Component</h1>
      <button
        className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorTrigger;
