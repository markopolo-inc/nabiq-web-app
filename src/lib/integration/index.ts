import {
  FiData,
  FiMail01,
  FiMessageSmileCircle,
  FiNotificationMessage,
  FiWhatsApp,
} from '@nabiq-icons';
import type { GatewayType, IGateway } from 'src/interfaces/brand.interface';
import { TOptionTab } from 'src/interfaces/modules/integrations';

export const appCategories: Array<{
  value: TOptionTab;
  label: string;
  icon: React.ElementType;
}> = [
  {
    value: 'data-sources',
    label: 'Data sources',
    icon: FiData,
  },
  {
    value: 'email',
    label: 'Email apps',
    icon: FiMail01,
  },
  {
    value: 'sms',
    label: 'SMS apps',
    icon: FiMessageSmileCircle,
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    icon: FiWhatsApp,
  },
  {
    value: 'push-notification',
    label: 'Push notification apps',
    icon: FiNotificationMessage,
  },
];

export const appOptions: IGateway[] = [
  {
    category: 'email',
    name: 'Klaviyo',
    headline: 'integrations.klaviyo_desc',
    gateway: 'klaviyo',
    learnMoreLink: '',
    isKeyIntegration: false,
    isOauthIntegration: true,
    oauthUrl: '/email/klaviyo/oauth',
  },
  {
    category: 'email',
    name: 'Hubspot',
    headline: 'integrations.hubspot_descc',
    gateway: 'hubspot',
    learnMoreLink: '',
    isKeyIntegration: false,
    isOauthIntegration: true,
    oauthUrl: '/email/hubspot/oauth',
  },
  {
    category: 'email',
    name: 'Postmark',
    headline: 'integrations.postmark_desc',
    gateway: 'postmark',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'OneSignal',
    headline: 'integrations.onesignal_desc',
    gateway: 'onesignal',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'SendGrid',
    headline: 'integrations.sendgrid_desc',
    gateway: 'sendgrid',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'Resend',
    headline: 'integrations.resend_desc',
    gateway: 'resend',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'MailGun',
    headline: 'integrations.mailgun_desc',
    gateway: 'mailgun',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'Click Send',
    headline: 'integrations.clicksend_desc',
    gateway: 'clicksend',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'Twilio',
    headline: 'integrations.twilio_desc',
    gateway: 'twilio',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'Sinch',
    headline: 'integrations.sinch_desc',
    gateway: 'sinch',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'Flow Route',
    headline: 'integrations.flowroute_desc',
    gateway: 'flowroute',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'Click Send',
    headline: 'integrations.clicksend_desc',
    gateway: 'clicksend',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
];

export const gatewayFields: Record<'email' | 'sms', Partial<Record<GatewayType, string[]>>> = {
  email: {
    klaviyo: ['apiKey'],
    postmark: ['apiKey'],
    mailgun: ['username', 'password'],
    onesignal: ['authKey', 'appId'],
    resend: ['apiKey'],
    sendgrid: ['apiKey'],
    hubspot: [],
    clicksend: ['userName', 'apiKey'],
  },
  sms: {
    clicksend: ['userName', 'apiKey'],
    flowroute: ['accessKey', 'secretKey'],
    sinch: ['servicePlanId', 'apiToken'],
    twilio: ['accountSid', 'authToken'],
    whatsapp: ['businessId', 'phoneNumberId', 'accessToken'],
  },
};

export const APPS = {
  SHOPIFY: 'shopify',
  SALLA: 'salla',
};
