import { Image, Stack } from '@nabiq-ui';
import PushNotificationImage from 'assets/integraions/notification-image.png';

export const PushNotification = () => {
  return (
    <Stack align='center' justify='center' className='mt-16' gap={24}>
      <Image src={PushNotificationImage} alt='push-notification' className='w-[120px]' />
      <Stack gap={4} align='center'>
        <p className='font-semibold text-gray-900'>Comming soon!</p>
        <p className='text-gray-600 text-sm'>
          You will soon be able to integrate push notification apps.
        </p>
      </Stack>
    </Stack>
  );
};
