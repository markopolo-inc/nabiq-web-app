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
    label: 'integrations.data_sources',
    icon: FiData,
  },
  {
    value: 'email',
    label: 'integrations.email_apps',
    icon: FiMail01,
  },
  {
    value: 'sms',
    label: 'integrations.sms_apps',
    icon: FiMessageSmileCircle,
  },
  {
    value: 'whatsapp',
    label: 'integrations.whatsapp',
    icon: FiWhatsApp,
  },
  {
    value: 'push-notification',
    label: 'integrations.push_notification_apps',
    icon: FiNotificationMessage,
  },
];

export const appOptions: IGateway[] = [
  {
    category: 'email',
    name: 'integrations.klaviyo',
    headline: 'integrations.klaviyo_desc',
    gateway: 'klaviyo',
    learnMoreLink: '',
    isKeyIntegration: false,
    isOauthIntegration: true,
    oauthUrl: '/email/klaviyo/oauth',
  },
  {
    category: 'email',
    name: 'integrations.hubspot',
    headline: 'integrations.hubspot_desc',
    gateway: 'hubspot',
    learnMoreLink: '',
    isKeyIntegration: false,
    isOauthIntegration: true,
    oauthUrl: '/email/hubspot/oauth',
  },
  {
    category: 'email',
    name: 'integrations.postmark',
    headline: 'integrations.postmark_desc',
    gateway: 'postmark',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'integrations.onesignal',
    headline: 'integrations.onesignal_desc',
    gateway: 'onesignal',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'integrations.sendgrid',
    headline: 'integrations.sendgrid_desc',
    gateway: 'sendgrid',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'integrations.resend',
    headline: 'integrations.resend_desc',
    gateway: 'resend',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'integrations.mailgun',
    headline: 'integrations.mailgun_desc',
    gateway: 'mailgun',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'email',
    name: 'integrations.click_send',
    headline: 'integrations.clicksend_desc',
    gateway: 'clicksend',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'integrations.twilio',
    headline: 'integrations.twilio_desc',
    gateway: 'twilio',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'integrations.sinch',
    headline: 'integrations.sinch_desc',
    gateway: 'sinch',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'integrations.flow_route',
    headline: 'integrations.flowroute_desc',
    gateway: 'flowroute',
    learnMoreLink: '',
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: 'sms',
    name: 'integrations.click_send',
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
