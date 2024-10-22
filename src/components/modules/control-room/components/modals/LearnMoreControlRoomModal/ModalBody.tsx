import { FiChevronRight } from '@nabiq-icons';
import { Button, Image, useGetColors } from '@nabiq-ui';
import ControlRoomAvatar from 'assets/control-room/control-room-modal-avatar.svg';
import React, { SetStateAction } from 'react';

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setOpened }) => {
  const { primary600 } = useGetColors();
  return (
    <div className='p-8 flex flex-col gap-6'>
      <div className='bg-primary-50 rounded-xl'>
        <Image className='w-[244px] h-[244px] mx-auto' src={ControlRoomAvatar} alt='' />
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-2xl font-semibold text-gray-900'>What is control room?</p>
        <p className='text-base font-normal leading-6 text-gray-600'>
          Keep track of all your campaigns and their status in one place. Provide feedback to
          content samples and get even better personalized content. You can also view the final
          published content for each campaign’s respective steps.
        </p>
      </div>

      <Button variant='link' trailingIcon={<FiChevronRight color={primary600} />}>
        Learn more about control room
      </Button>
      <Button onClick={() => setOpened(false)} fullWidth variant='primary' size='md'>
        Got it
      </Button>
    </div>
  );
};

export default ModalBody;
