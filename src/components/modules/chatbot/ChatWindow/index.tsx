import { ChatContainer } from 'components/modules/chatbot/ChatWindow/ChatContainer';
import { ChatHeader } from 'components/modules/chatbot/ChatWindow/ChatHeader.tsx';
import React from 'react';

type ChatWindowProps = {
  onClick: () => void;
};

export const ChatWindow: React.FC<ChatWindowProps> = ({ onClick }) => {
  return (
    <div className='absolute bottom-28 right-10 max-w-[400px] w-full bg-primary-600 flex flex-col items-center justify-center z-[999] rounded-3xl overflow-hidden shadow-2xl'>
      <ChatHeader onClick={onClick} />
      <ChatContainer />
    </div>
  );
};
