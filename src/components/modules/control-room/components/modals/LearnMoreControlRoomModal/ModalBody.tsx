import { FiChevronRight } from '@nabiq-icons';
import { Button, Image, useGetColors } from '@nabiq-ui';
import ControlRoomAvatar from 'assets/control-room/control-room-modal-avatar.svg';
import React, { SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setOpened }) => {
  const { t } = useTranslation();
  const { primary600 } = useGetColors();
  return (
    <div className='p-8 flex flex-col gap-6'>
      <div className='bg-primary-50 rounded-xl'>
        <Image className='w-[244px] h-[244px] mx-auto' src={ControlRoomAvatar} alt='' />
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-2xl font-semibold text-gray-900'>{t('control_room.what_is')}</p>
        <p className='text-base font-normal leading-6 text-gray-600'>
          {t('control_room.description')}
        </p>
      </div>

      <div className='bg-gray-50 rounded-xl px-6'>
        <Button
          onClick={() => window.open('https://www.markopolo.ai/products/nabiq', '_blank')}
          variant='link'
          trailingIcon={<FiChevronRight color={primary600} />}
        >
          {t('content_samples.learn_more_control_room')}
        </Button>
      </div>

      <Button onClick={() => setOpened(false)} fullWidth variant='primary' size='md'>
        {t('content_samples.got_it')}
      </Button>
    </div>
  );
};

export default ModalBody;
