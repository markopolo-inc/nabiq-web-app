import { Image } from '@nabiq-ui';
import React from 'react';
import captainNabiq3 from 'src/assets/logo/Captain_Nabiq_3.png';

type ChatMessageProps = {
  message: string;
  isNabiq?: boolean;
  isDeliver?: boolean;
  isBotTexting?: boolean;
  tappedMessage?: boolean;
  isStartAgain?: boolean;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  isNabiq = false,
  message,
  isDeliver = false,
  isBotTexting = false,
  tappedMessage = false,
  isStartAgain = false,
}) => {
  if (isNabiq) {
    return (
      <div className='flex gap-3'>
        <div className='flex-none w-10 h-10 rounded-full bg-[#383C3B] overflow-hidden'>
          <Image src={captainNabiq3} height={40} width={40} />
        </div>
        <div className='flex flex-col gap-1.5'>
          <p className='font-normal text-xs leading-[18px] text-gray-600'>Nabiq Live Chat Bot</p>
          {!isBotTexting ? (
            <div className='bg-primary-500 border border-primary-200 py-2.5 px-3.5 rounded-2xl rounded-ss-none'>
              <p className='font-normal text-sm text-white'>{message}</p>
            </div>
          ) : (
            <div className='w-max bg-primary-500 border border-primary-200 p-2.5 rounded-2xl rounded-ss-none'>
              <svg
                width='12'
                height='4'
                viewBox='0 0 12 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='2' cy='2' r='2' fill='#85ADF9' />
                <circle cx='6' cy='2' r='2' fill='#E0EBFE' />
                <circle cx='10' cy='2' r='2' fill='#85ADF9' />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  } else if (tappedMessage) {
    return (
      <div className='w-max ml-auto flex flex-col flex-end gap-1.5 hover:cursor-pointer'>
        <div className=' bg-white border border-gray-200 shadow-sm py-2.5 px-3.5 rounded-2xl rounded-ee-none'>
          <p className='font-normal text-sm text-gray-900'>{message}</p>
        </div>
        {isDeliver && (
          <p className='font-normal text-xs leading-[18px] text-gray-600 text-end'>
            Delivered just now
          </p>
        )}
      </div>
    );
  } else if (isStartAgain) {
    return (
      <div className='w-max ml-auto flex flex-col flex-end gap-1.5 hover:cursor-pointer'>
        <div className=' bg-white border border-gray-200 shadow-sm py-2.5 px-3.5 rounded-2xl rounded-se-none'>
          <p className='font-normal text-sm text-gray-900'>{message}</p>
        </div>
        {isDeliver && (
          <p className='font-normal text-xs leading-[18px] text-gray-600 text-end'>
            Delivered just now
          </p>
        )}
      </div>
    );
  } else {
    return (
      <div className='w-max ml-auto flex flex-col flex-end gap-1.5 hover:cursor-pointer'>
        <div className=' bg-primary-50 border border-gray-200 shadow-sm py-2.5 px-3.5 rounded-2xl'>
          <p className='font-normal text-sm text-primary-600'>{message}</p>
        </div>
        {isDeliver && (
          <p className='font-normal text-xs leading-[18px] text-gray-600 text-end'>
            Delivered just now
          </p>
        )}
      </div>
    );
  }
};
