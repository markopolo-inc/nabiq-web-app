interface Feature {
  name: string;
  description?: string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export const features: Feature[] = [
  {
    name: 'pricing_plan.data_source_integration',
    pro: 'pricing_plan.integration_limit',
    enterprise: 'pricing_plan.unlimited_integration',
  },
  {
    name: 'pricing_plan.premium_engagement_channels',
    description: 'pricing_plan.engagement_channels',
    pro: true,
    enterprise: true,
  },
  {
    name: 'pricing_plan.automated_segmentation',
    pro: true,
    enterprise: true,
  },
  {
    name: 'pricing_plan.sales_bot',
    description: 'pricing_plan.messenger',
    pro: true,
    enterprise: true,
  },
  {
    name: 'pricing_plan.campaign_performance_insights',
    pro: true,
    enterprise: true,
  },
  {
    name: 'pricing_plan.monitoring',
    pro: true,
    enterprise: true,
  },
  {
    name: 'pricing_plan.lead_booking_system',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.advanced_personalization',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.ai_constitutions',
    description: 'pricing_plan.customizable_ai_rules',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.predictive_segmentation',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.real_time_recommendations',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.personalized_assistance',
    description: 'pricing_plan.account_manager_support',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.detailed_reports',
    description: 'pricing_plan.real_time_tracking',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.enterprise_security',
    description: 'pricing_plan.enhanced_security',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.priority_support',
    description: 'pricing_plan.support_24_7',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.onboarding_training',
    description: 'pricing_plan.comprehensive_training',
    pro: false,
    enterprise: true,
  },
  {
    name: 'pricing_plan.whatsapp_addon_cost',
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
