import { Stack } from '@nabiq-ui';

import { ChannelEmail } from './ChannelEmail';
import { ChannelSMS } from './ChannelSMS';

// import { ChannelPushNotification } from './ChannelPushNotification';

export const CampaignChannels = () => {
  return (
    <Stack w={920} className='mx-auto flex-col items-start flex-grow'>
      <ChannelEmail />
      <ChannelSMS />
      {/* <ChannelPushNotification /> */}
    </Stack>
  );
};
