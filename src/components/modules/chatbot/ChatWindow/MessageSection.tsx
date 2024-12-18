import { ChatMessage } from 'components/modules/chatbot/ChatWindow/ChatMessage.tsx';
import React from 'react';

export const MessageSection: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ChatMessage
        isNabiq
        message='Ahoy! Thanks for your interest in John’s company. How can we help you today?'
      />
      <ChatMessage message='I’m just browsing' />
      <ChatMessage message='I’d like to learn more' />
      <ChatMessage message='I’m a customer with a question.' />
      <ChatMessage isNabiq isBotTexting message='...' />
    </div>
  );
};
