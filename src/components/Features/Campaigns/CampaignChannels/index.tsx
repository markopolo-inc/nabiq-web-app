import { Stack } from "@nabiq-ui";
import ChannelEmail from "src/components/Features/Campaigns/CampaignChannels/ChannelEmail.tsx";
import ChannelSMS from "src/components/Features/Campaigns/CampaignChannels/ChannelSMS.tsx";
import ChannelPushNotification from "src/components/Features/Campaigns/CampaignChannels/ChannelPushNotification.tsx";

const Channels = () => {
  return (
    <Stack w={920} className="mx-auto flex-col items-start flex-grow">
      <ChannelEmail />
      <ChannelSMS />
      <ChannelPushNotification />
    </Stack>
  );
};

export default Channels;
