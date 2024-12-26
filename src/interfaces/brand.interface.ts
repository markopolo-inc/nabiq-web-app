export type GatewayType =
  | 'hubspot'
  | 'klaviyo'
  | 'postmark'
  | 'twilio'
  | 'sinch'
  | 'clicksend'
  | 'flowroute'
  | 'onesignal'
  | 'sendgrid'
  | 'resend'
  | 'mailgun'
  | 'whatsapp'
  | 'facebook'
  | 'google'
  | 'shopify'
  | 'salla'
  | 'salesforce';

export type TDataSourcePlatform = 'hubspot' | 'salesforce' | 'shopify' | 'salla';

export type TECommercePlatform = 'shopify' | 'salla';

export type TSocialPlatform = 'facebook' | 'google';

export interface IMappedField {
  group?: string;
  name: string;
  label: string;
  nabiqPropertyName?: string;
  nabiqPropertyLabel?: string;
}

interface SallaStore {
  id: number;
  name: string;
  email: string;
  avatar: string;
  domain: string;
}

export interface IConnectedAccountFields {
  scope?: string;
  shop?: string;
  store?: SallaStore;
  domain?: string;
}

export interface IDataSourceIntegrationInterface {
  connectedAccounts: Record<TDataSourcePlatform, IConnectedAccountFields>;
  mappedFields: Record<TDataSourcePlatform, IMappedField[]>;
  tokens: Record<TDataSourcePlatform, boolean>;
}

export interface IEmailSMSIntegrationInterface {
  // email
  klaviyo?: {
    apiKey: string;
  };
  postmark?: {
    apiKey?: string;
    accountToken?: string;
  };
  oneSignal?: {
    appId?: string;
    authToken?: string;
    authKey?: string;
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

export interface ISocialIntegrationInterface {
  socialTokens: Record<TSocialPlatform, boolean>;
  whatsApp?: {
    name: string;
    number: string;
  };
}

export interface IGateway {
  category: 'sms' | 'email' | 'push' | 'ads';
  name: string;
  headline: string;
  gateway: GatewayType;
  learnMoreLink: string;
  isKeyIntegration: boolean;
  isOauthIntegration: boolean;
  oauthUrl?: string;
}

export interface ConnectedAccounts {
  facebookAd: {
    id: string;
    name: string;
  };
  googleAd: {
    id: string;
    name: string;
  };
}

export interface ConnectedBrand {
  resourceId: string;
  companyId: string;
  brandName: string;
  brandWebsite: string;
  brandLogo: string;
  connectedAccounts: ConnectedAccounts;
}

export interface BrandInterface {
  brandName?: string;
  companyId?: string;
  connectedMarktag?: unknown;
  isAmazonAccountConnected?: boolean;
  isLinkedInAccountAdded?: boolean;
  isTiktokAccountAdded?: boolean;
  resourceId?: string;
  resourceType?: 'Brand';
  emailIntegrations?: IEmailSMSIntegrationInterface;
  smsIntegrations?: IEmailSMSIntegrationInterface;
  datasourceIntegrations?: IDataSourceIntegrationInterface;
  socialIntegrations?: ISocialIntegrationInterface;
  markTag?: {
    resourceId?: string;
    domain: string;
    hostname: string;
  };
  connectedBrand?: ConnectedBrand;
}

export interface IPlatform {
  id: number;
  gateway: 'facebook' | 'google';
  name: string;
  isConnected: boolean;
}
