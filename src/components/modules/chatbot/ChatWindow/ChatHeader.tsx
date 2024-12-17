import { FiMascot, FiMinus } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import React from 'react';

type ChatHeaderProps = {
  onClick: () => void;
};

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClick }) => {
  return (
    <div className='w-full bg-primary-600 flex justify-between items-center gap-4 px-6 py-5'>
      <div className='flex gap-4'>
        <FiMascot size={32} color='#fff' />

        <div className='flex flex-col'>
          <p className='font-semibold text-lg text-white'>Captain Nabiq</p>
          <span className='font-normal text-sm text-gray-200'>Let’s chat!</span>
        </div>
      </div>
      <div>
        <Button variant='tertiary-gray' className='hover:!bg-transparent' onClick={onClick}>
          <FiMinus size={20} color='#fff' />
        </Button>
      </div>
    </div>
  );
};
