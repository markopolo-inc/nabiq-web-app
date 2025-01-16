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

export const whatsAppUnitList = [
  { label: '1000', value: '1' },
  { label: '2000', value: '2' },
  { label: '3000', value: '3' },
  { label: '4000', value: '4' },
  { label: '5000', value: '5' },
  { label: '6000', value: '6' },
  { label: '7000', value: '7' },
  { label: '8000', value: '8' },
  { label: '9000', value: '9' },
  { label: '10000', value: '10' },
];

export const countryData = [
  { label: 'Argentina', value: 'AR', price: 61.8 },
  { label: 'Brazil', value: 'BR', price: 62.5 },
  { label: 'Chile', value: 'CL', price: 88.9 },
  { label: 'Colombia', value: 'CO', price: 12.5 },
  { label: 'Egypt', value: 'EG', price: 107.3 },
  { label: 'France', value: 'FR', price: 143.2 },
  { label: 'Germany', value: 'DE', price: 136.5 },
  { label: 'India', value: 'IN', price: 10.7 },
  { label: 'Indonesia', value: 'ID', price: 41.1 },
  { label: 'Israel', value: 'IL', price: 35.3 },
  { label: 'Italy', value: 'IT', price: 69.1 },
  { label: 'Malaysia', value: 'MY', price: 86.0 },
  { label: 'Mexico', value: 'MX', price: 43.6 },
  { label: 'Netherlands', value: 'NL', price: 159.7 },
  { label: 'Nigeria', value: 'NG', price: 51.6 },
  { label: 'Pakistan', value: 'PK', price: 47.3 },
  { label: 'Peru', value: 'PE', price: 70.3 },
  { label: 'Russia', value: 'RU', price: 80.2 },
  { label: 'Saudi Arabia', value: 'SA', price: 45.5 },
  { label: 'South Africa', value: 'ZA', price: 37.9 },
  { label: 'Spain', value: 'ES', price: 61.5 },
  { label: 'Turkey', value: 'TR', price: 10.9 },
  { label: 'United Arab Emirates', value: 'AE', price: 38.4 },
  { label: 'United Kingdom', value: 'GB', price: 52.9 },
  { label: 'North America', value: 'NA', price: 25.0 },
  { label: 'Rest of Africa', value: 'AF', price: 22.5 },
  { label: 'Rest of Asia Pacific', value: 'AP', price: 73.2 },
  { label: 'Rest of Central & Eastern Europe', value: 'CEE', price: 86.0 },
  { label: 'Rest of Latin America', value: 'LATAM', price: 74.0 },
  { label: 'Rest of Middle East', value: 'ME', price: 34.1 },
  { label: 'Rest of Western Europe', value: 'WE', price: 59.2 },
  { label: 'Other', value: 'OTHER', price: 60.4 },
];
