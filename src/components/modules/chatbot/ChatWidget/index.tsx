import { FiChevronDown, FiMascot } from '@nabiq-icons';
import React from 'react';

type ChatWidgetProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onClick, isOpen }) => {
  return (
    <div
      className='absolute bottom-10 right-10 w-[60px] h-[60px] bg-primary-600 rounded-full flex items-center justify-center hover:cursor-pointer z-[999]'
      onClick={onClick}
    >
      {isOpen ? <FiChevronDown size={32} color='#fff' /> : <FiMascot size={44} color='#fff' />}
    </div>
  );
};
