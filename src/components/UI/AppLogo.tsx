import React from "react";
import { Image } from "@nabiq-ui";

import Hubspot from "assets/integraions/HubspotLogo.svg";
import Klaviyo from "assets/integraions/klavioLogo.svg";
import Postmark from "assets/integraions/PostmarkLogo.png";

export type AppNameType = "hubspot" | "klaviyo" | "postmark";

const PlatformImage: React.FC<{
  app: AppNameType;
  width?: number | string;
}> = ({ app, width = 50 }) => {
  const logo: Record<AppNameType, string> = {
    hubspot: Hubspot,
    klaviyo: Klaviyo,
    postmark: Postmark,
  };

  return <Image src={logo?.[app]} style={{ width }} />;
};

export default PlatformImage;
