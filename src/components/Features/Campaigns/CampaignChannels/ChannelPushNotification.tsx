import { ArrowNarrowUpRight, FiNotificationMessage } from '@nabiq-icons';
import { Text } from '@nabiq-ui';

const ChannelPushNotification = () => {
  return (
    <div className='w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 '>
      <div className='flex gap-4'>
        <FiNotificationMessage size={24} color='#9AA4B2' />
        <Text size='18px' color='#121926' weight={900} className='leading-7'>
          Push Notification
        </Text>
      </div>
      <div className='flex items-center justify-between gap-1.5'>
        <Text size='16px' color='#2972F5' weight={600} className='leading-6'>
          Connect
        </Text>
        <ArrowNarrowUpRight size={20} color='#2972F5' />
      </div>
    </div>
  );
};

export default ChannelPushNotification;
