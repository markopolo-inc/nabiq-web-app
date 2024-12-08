import {
  FiAnnouncement01,
  FiCursorClick01,
  FiInfinity,
  FiSalla,
  FiShopify,
  FiWhatsApp,
  FiZapFast,
} from '@nabiq-icons';

export const goals = [
  {
    title: 'Acquisition',
    headline: 'To acquire new customers either for paying, trial or freemium.',
    tooltip:
      'Select this goal to attract new customers. Focus on acquiring paying users, trial users, or freemium users, depending on your business model.',
    icon: FiZapFast,
    color: '#EE46BC',
    type: 'acquisition',
    isDisabled: true,
    badgeLabel: 'Coming soon',
  },
  {
    title: 'Activation',
    headline: 'To convert trail/freemium users to paying customers.',
    tooltip:
      'Choose this goal to convert trial or freemium users into paying customers. It’s all about getting existing users to take the next step.',
    icon: FiCursorClick01,
    color: '#2E90FA',
    type: 'activation',
    isDisabled: false,
    badgeLabel: '',
  },
  {
    title: 'Retention',
    headline: 'To push recurring subscription, cross-sell and upsell.',
    tooltip:
      'Use this goal to increase customer loyalty. Boost recurring subscriptions, encourage cross-sells, or promote upsells to maintain and grow your customer base.',
    icon: FiInfinity,
    color: '#17B26A',
    type: 'retention',
    isDisabled: false,
    badgeLabel: '',
  },
];

export const mediums = [
  {
    title: 'WhatsApp',
    description:
      'Enable two-way conversations between Nabiq and your leads. Requires a WhatsApp Business account and inventory in Nabiq.',
    icon: FiWhatsApp,
    isRecommended: true,
    color: '#387AF6',
    type: 'whatsapp',
  },
  {
    title: 'Email and SMS',
    description:
      'One way conversation between Nabiq and your leads. Integrate with your email/SMS/push notification channels.',
    icon: FiAnnouncement01,
    isRecommended: false,
    color: '#387AF6',
    type: 'email-sms',
  },
];

export const emailSmsCampaignSteps = [
  {
    label: 'Campaign details',
    description: 'Enter the campaign details',
  },
  {
    label: 'Timing',
    description: 'Specify the content and approval timing',
  },
  {
    label: 'Channels',
    description: 'Choose the main and additional channels',
  },
];

export const whatsappCampaignSteps = [
  {
    label: 'Connection',
    description: 'Connect WhatsApp & sync products',
  },
  {
    label: 'Creation',
    description: 'Set priorities for Captain Nabiq.',
  },
  {
    label: 'Completion',
    description: 'Captain Nabiq is on it—upload more leads if needed.',
  },
];

export const productSources = [
  {
    title: 'Shopify',
    platform: 'shopify',
    headline: 'Connect your Shopify store to upload products directly',
    icon: FiShopify,
  },
  {
    title: 'Salla',
    platform: 'salla',
    headline: 'Connect your Salla store to import products easily.',
    icon: FiSalla,
  },
];
