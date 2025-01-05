import { Image } from '@nabiq-ui';
import ClickSend from 'assets/integraions/ClickSend.svg';
import Firebase from 'assets/integraions/FirebaseLogo.svg';
import FlowRoute from 'assets/integraions/FlowRoute.svg';
import Hubspot from 'assets/integraions/HubspotLogo.svg';
import MailGun from 'assets/integraions/MailGunLogo.svg';
import OneSignal from 'assets/integraions/OneSignalLogo.svg';
import Postmark from 'assets/integraions/PostmarkLogo.svg';
import Resend from 'assets/integraions/Resend.svg';
import SalesForce from 'assets/integraions/SalesforceLogo.svg';
import SallaLight from 'assets/integraions/SallaLightLogo.png';
import Salla from 'assets/integraions/SallaLogo.svg';
import SendGrid from 'assets/integraions/SendGridLogo.svg';
import Shopify from 'assets/integraions/ShopifyLogo.svg';
import Sinch from 'assets/integraions/SinchLogo.svg';
import Twillio from 'assets/integraions/TwillioLogo.svg';
import WhatsApp from 'assets/integraions/WhatsappLogo.svg';
import Zoho from 'assets/integraions/ZohoLogo.svg';
import Klaviyo from 'assets/integraions/klavioLogo.svg';
import React from 'react';
import type { GatewayType } from 'src/interfaces/brand.interface';

const GatewayLogo: React.FC<{
  app: GatewayType;
  width?: number | string;
  variant?: 'light' | 'dark';
}> = ({ app, width = 50, variant = 'dark' }) => {
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
    whatsapp: WhatsApp,
    shopify: Shopify,
    salla: variant === 'light' ? SallaLight : Salla,
    salesforce: SalesForce,
    firebase: Firebase,
    zoho: Zoho,
  };

  return <Image src={logo?.[app]} style={{ width }} />;
};

export default GatewayLogo;
