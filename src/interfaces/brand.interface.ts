export type GatewayType =
  | "hubspot"
  | "klaviyo"
  | "postmark"
  | "twilio"
  | "sinch"
  | "clicksend"
  | "flowroute";

export interface SMSIntegrationInterface {
  twilio?: {
    accountSid: string;
    authToken: string;
  };
  clicksend?: {
    apiKey: string;
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

export interface EmailIntegrationInterface {
  klaviyo?: {
    apiKey: string;
  };
  postmark?: {
    apiKey?: string;
    accountToken?: string;
  };
}

export interface AppInterface {
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
  integrations?: EmailIntegrationInterface;
  smsIntegrations?: SMSIntegrationInterface;
}
