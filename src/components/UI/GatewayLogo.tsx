import React from "react";
import { Image } from "@nabiq-ui";

import Hubspot from "assets/integraions/HubspotLogo.svg";
import Klaviyo from "assets/integraions/klavioLogo.svg";
import Postmark from "assets/integraions/PostmarkLogo.png";
import Sinch from "assets/integraions/SinchLogo.svg";
import Twillio from "assets/integraions/TwillioLogo.svg";
import ClickSend from "assets/integraions/ClickSend.svg";
import FlowRoute from "assets/integraions/FlowRoute.svg";
import type { GatewayType } from "src/interfaces/brand.interface";

const GatewayLogo: React.FC<{
  app: GatewayType;
  width?: number | string;
}> = ({ app, width = 50 }) => {
  const logo: Record<GatewayType, string> = {
    hubspot: Hubspot,
    klaviyo: Klaviyo,
    postmark: Postmark,
    twilio: Twillio,
    sinch: Sinch,
    clicksend: ClickSend,
    flowroute: FlowRoute,
  };

  return <Image src={logo?.[app]} style={{ width }} />;
};

export default GatewayLogo;
