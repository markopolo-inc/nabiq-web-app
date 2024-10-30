import { FiShield02 } from '@nabiq-icons';
import { ConstitutionalAIModerationModal, HomePageCardWrapper } from 'components/modules/home';

export const ConstitutionalAIModerationCard = () => {
  return (
    <HomePageCardWrapper icon={<FiShield02 size={32} color='#7A5AF8' fill='#7A5AF8' />}>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 text-lg font-semibold'>Constitutional AI moderation</p>
          <p className='text-gray-600 text-sm font-normal'>
            Shape our AI to reduce bias, ensure transparency, and prioritize safety, ethics, and
            human rights.
          </p>
        </div>
      </div>
      <div className='flex gap-3 justify-between items-center'>
        <ConstitutionalAIModerationModal />
      </div>
    </HomePageCardWrapper>
  );
};
