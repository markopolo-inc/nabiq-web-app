import { ChatMessage } from 'components/modules/chatbot/ChatWindow/ChatMessage.tsx';
import React from 'react';

export const MessageSection: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};
