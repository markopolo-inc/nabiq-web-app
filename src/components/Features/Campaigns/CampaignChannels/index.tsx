import { Group } from "@nabiq-ui";
import ChannelItem from "src/components/Features/Campaigns/CampaignChannels/ChannelItem.tsx";

const Channels = () => {
  return (
    <Group className="flex-col items-start">
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </Group>
  );
};

export default Channels;
