import React from "react";
import { Image } from "@nabiq-ui";

import Hubspot from "assets/integraions/HubspotLogo.svg";
import Klaviyo from "assets/integraions/klavioLogo.svg";
import Postmark from "assets/integraions/PostmarkLogo.png";
import Sinch from "assets/integraions/SinchLogo.svg";
import Twillio from "assets/integraions/TwillioLogo.svg";

export type AppNameType =
  | "hubspot"
  | "klaviyo"
  | "postmark"
  | "twilio"
  | "sinch";

const PlatformImage: React.FC<{
  app: AppNameType;
  width?: number | string;
}> = ({ app, width = 50 }) => {
  const logo: Record<AppNameType, string> = {
    hubspot: Hubspot,
    klaviyo: Klaviyo,
    postmark: Postmark,
    twilio: Twillio,
    sinch: Sinch,
  };

  return <Image src={logo?.[app]} style={{ width }} />;
};

export default PlatformImage;
