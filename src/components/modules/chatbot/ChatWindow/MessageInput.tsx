import { FiSend01 } from '@nabiq-icons';
import { Button, TextInput } from '@nabiq-ui';
import React from 'react';

export const MessageInput: React.FC = () => {
  return (
    <div className='w-full bg-white border-t border-gray-200 px-6 pt-5 pb-6 flex items-center justify-between gap-3'>
      <TextInput className='w-full' placeholder='Type your message here...' />
      <Button variant='primary'>
        <FiSend01 color='#fff' size={20} />
      </Button>
    </div>
  );
};
