import { Select, Text } from "@nabiq-ui";
import { Message } from "@nabiq-icons";

const ChannelSMS = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 ">
      <div className="flex gap-4">
        <Message size={24} color="#9AA4B2" />
        <Text size="18px" color="#121926" weight={900} className="leading-7">
          SMS
        </Text>
      </div>
      <Select
        placeholder="No platform selected"
        defaultValue="No platform selected"
        data={["No platform selected"]}
      />
    </div>
  );
};

export default ChannelSMS;
