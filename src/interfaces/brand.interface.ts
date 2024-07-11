export type GatewayType =
  | "hubspot"
  | "klaviyo"
  | "postmark"
  | "twilio"
  | "sinch"
  | "clicksend"
  | "flowroute"
  | "onesignal"
  | "sendgrid"
  | "resend"
  | "mailgun";

export interface IntegrationInterface {
  // email
  klaviyo?: {
    apiKey: string;
  };
  postmark?: {
    apiKey?: string;
    accountToken?: string;
  };
  oneSignal?: {
    appId: string;
    authToken: string;
  };
  mailgun?: {
    domainName: string;
    password: string;
  };
  hubspot?: {
    domain: string;
    email: string;
    hubId: string;
    refreshToken: string;
    scope: string;
    userId: string;
  };
  sendgrid?: {
    apiKey: string;
  };
  resend?: {
    apiKey: string;
  };
  onesignal?: {
    appId: string;
  };

  // sms
  twilio?: {
    accountSid: string;
    authToken: string;
  };
  clicksend?: {
    apiKey: string;
    userName?: string;
  };
  flowroute?: {
    accessKey: string;
    secretKey: string;
  };
  sinch?: {
    servicePlanId: string;
    apiToken: string;
  };
}

export interface GatewayInterface {
  category: "sms" | "email";
  name: string;
  headline: string;
  gateway: GatewayType;
  learnMoreLink: string;
  isKeyIntegration: boolean;
  isOauthIntegration: boolean;
}

export interface BrandInterface {
  brandName?: string;
  companyId?: string;
  connectedMarktag?: unknown;
  isAmazonAccountConnected?: boolean;
  isLinkedInAccountAdded?: boolean;
  isTiktokAccountAdded?: boolean;
  resourceId?: string;
  resourceType?: "Brand";
  emailIntegrations?: IntegrationInterface;
  smsIntegrations?: IntegrationInterface;
}
