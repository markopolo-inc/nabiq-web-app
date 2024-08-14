import { Select, Text } from "@nabiq-ui";
import { Envelope } from "@nabiq-icons";
import { useAppSelector } from "src/store/hooks";
import { useDispatch } from "react-redux";
import { setCampaign } from "src/store/campaign/campaignSlice";
import { GatewayType } from "src/interfaces/brand.interface";

const ChannelEmail = () => {
  const { emailIntegrations } = useAppSelector((state) => state.brand);
  const { campaign } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 ">
      <div className="flex gap-3">
        <Envelope size={24} color="#9AA4B2" />
        <Text size="18px" color="#121926" weight={900} className="leading-7">
          Email
        </Text>
      </div>
      <Select
        value={
          (campaign?.channels || []).find((item) => item.channel === "email")
            ?.platform
        }
        placeholder="No platform selected"
        data={Object.keys(emailIntegrations || {})}
        onChange={(value) => {
          const channels =
            campaign?.channels?.filter((item) => item.channel !== "email") ||
            [];
          channels.push({
            channel: "email",
            platform: value as GatewayType,
          });
          dispatch(
            setCampaign({
              channels,
            })
          );
        }}
      />
    </div>
  );
};

export default ChannelEmail;
