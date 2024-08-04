import { Button, useGetColors } from "@nabiq-ui";
import { FiCommand } from "@nabiq-icons";
import { useNavigate } from "react-router-dom";

const ConnectMarktag = () => {
  const navigate = useNavigate();
  const { primary500 } = useGetColors();
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex gap-3 flex-nowrap">
        <div>
          <FiCommand size={32} color={primary500} fill={primary500} />
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-lg font-semibold">
              Connect 'Marktag'
            </p>
            <p className="text-gray-600 text-sm font-normal">
              Track first party customer data with cutting-edge precision.
              Capture and track all your marketing data.
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => navigate("/connect-marktag")}>
              Connect
            </Button>
            {/* <Button variant="link">Learn more</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMarktag;
