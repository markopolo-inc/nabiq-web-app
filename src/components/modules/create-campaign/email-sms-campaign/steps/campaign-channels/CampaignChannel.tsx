import { Stack } from '@nabiq-ui';
import {
  ChannelEmail,
  ChannelPushNotification,
  ChannelSMS,
} from 'src/components/modules/create-campaign/email-sms-campaign/steps/campaign-channels';

export const CampaignChannels = () => {
  return (
    <Stack w={920} className='mx-auto flex-col items-start flex-grow'>
      <ChannelEmail />
      <ChannelSMS />
      <ChannelPushNotification />
    </Stack>
  );
};
