import React from "react";
import { Image } from "@nabiq-ui";

import Hubspot from "assets/integraions/HubspotLogo.svg";
import Klaviyo from "assets/integraions/klavioLogo.svg";
import Postmark from "assets/integraions/PostmarkLogo.png";
import Sinch from "assets/integraions/SinchLogo.svg";
import Twillio from "assets/integraions/TwillioLogo.svg";
import ClickSend from "assets/integraions/ClickSend.svg";
import FlowRoute from "assets/integraions/FlowRoute.svg";
import Resend from "assets/integraions/Resend.svg";
import SendGrid from "assets/integraions/SendGridLogo.svg";
import OneSignal from "assets/integraions/OneSignalLogo.svg";
import MailGun from "assets/integraions/MailGunLogo.svg";
import type { GatewayType } from "src/interfaces/brand.interface";

const GatewayLogo: React.FC<{
  app: GatewayType;
  width?: number | string;
}> = ({ app, width = 50 }) => {
  const logo: Partial<Record<GatewayType, string>> = {
    hubspot: Hubspot,
    klaviyo: Klaviyo,
    postmark: Postmark,
    twilio: Twillio,
    sinch: Sinch,
    clicksend: ClickSend,
    flowroute: FlowRoute,
    resend: Resend,
    sendgrid: SendGrid,
    onesignal: OneSignal,
    mailgun: MailGun,
  };

  return <Image src={logo?.[app]} style={{ width }} />;
};

export default GatewayLogo;
