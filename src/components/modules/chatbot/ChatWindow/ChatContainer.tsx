import { ContentDivider } from 'components/modules/chatbot/ChatWindow/ContentDivider.tsx';
import { MessageInput } from 'components/modules/chatbot/ChatWindow/MessageInput.tsx';
import { MessageSection } from 'components/modules/chatbot/ChatWindow/MessageSection.tsx';
import React from 'react';

export const ChatContainer: React.FC = () => {
  return (
    <>
      <div className='w-full p-6 bg-white flex flex-col gap-8 overflow-y-scroll h-[564px]'>
        <ContentDivider />
        <MessageSection />
      </div>
      <MessageInput />
    </>
  );
};
