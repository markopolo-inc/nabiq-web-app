import { ContentDivider } from 'components/modules/chatbot/ChatWindow/ContentDivider.tsx';
import { MessageSection } from 'components/modules/chatbot/ChatWindow/MessageSection.tsx';
import React from 'react';

export const ChatContainer: React.FC = () => {
  return (
    <div className='w-full p-6 bg-white flex flex-col gap-8'>
      <ContentDivider />
      <MessageSection />
    </div>
  );
};
