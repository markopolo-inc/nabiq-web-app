interface Feature {
  name: string;
  description?: string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export const features: Feature[] = [
  {
    name: 'Data source integration',
    pro: 'Up to 5',
    enterprise: 'Unlimited',
  },
  {
    name: 'Premium engagement channels',
    description: 'Email, SMS, Push Notifications and Messenger',
    pro: true,
    enterprise: true,
  },
  {
    name: 'Automated segmentation',
    pro: true,
    enterprise: true,
  },
  {
    name: 'Sales conversational bot',
    description: 'Messenger',
    pro: true,
    enterprise: true,
  },
  {
    name: 'Basic campaign performance insights',
    pro: true,
    enterprise: true,
  },
  {
    name: 'Monitoring',
    pro: true,
    enterprise: true,
  },
  {
    name: 'Lead booking system',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Advanced personalization',
    pro: false,
    enterprise: true,
  },
  {
    name: 'AI Constitutions',
    description: 'Customizable AI rules for messaging, content moderation, and compliance',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Predictive segmentation and Campaign intelligence',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Real-time product recommendations',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Personalized assistance',
    description: 'Support from a dedicated account manager',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Detailed reports and insights',
    description: 'Including real-time tracking of customer behaviors and preferences',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Enterprise-Grade security and compliance',
    description: 'Enhanced security features, including data encryption and compliance with GDPR',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Priority Support',
    description: '24/7 support with a dedicated support team available',
    pro: false,
    enterprise: true,
  },
  {
    name: 'Onboarding and Training',
    description: 'Comprehensive onboarding and training sessions for teams',
    pro: false,
    enterprise: true,
  },
  {
    name: 'WhatsApp add-on cost',
    pro: true,
    enterprise: false,
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string | 'Custom';
  userLimit: string;
  features: {
    whatsapp: {
      unlimited: boolean;
    };
  };
  range: string;
}

export const monthlyActiveUser = [
  { value: 10000, label: '<10K', monthly: '62.33', yearly: '673.20', plan: 'pro_1' },
  { value: 50000, label: '<50K', monthly: '311.67', yearly: '3366.04', plan: 'pro_2' },
  { value: 100000, label: '<100K', monthly: '623.33', yearly: '6731.96', plan: 'pro_3' },
  { value: 500000, label: '<500K', monthly: '3116.67', yearly: '33660.04', plan: 'pro_4' },
];
