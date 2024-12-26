import { GatewayType } from 'src/interfaces/brand.interface';

export type TCampaignGoal = 'acquisition' | 'retention' | 'activation';

export type TCampaignMedium = 'whatsapp' | 'email-sms';

export interface IChannel {
  channel: 'sms' | 'email' | 'push-notification';
  platform: GatewayType | 'none';
}

export interface ICampaignItem {
  resourceId: string;
  resourceType: string;
  brandId: string;
  tagId: string;
  status: 'active' | 'processing' | 'finished';
  goal: TCampaignGoal;
  name: string;
  details: string;
  funnels: any[];
  job: any;
  createdAt: string;
  updatedAt: string;
}

export interface ICampaign {
  resourceId?: string;
  brandId: string;
  tagId: string;
  goal: TCampaignGoal;
  name: string;
  details: string;
  link: string;
  language: 'en' | 'ar';
  instruction: string;
  tone: 'formal' | 'informal';
  startDate: string;
  endDate: string;
  time: string; // MUST USE 24 HOUR FORMAT
  stepCount: number;
  stepDelay: number;
  content: any[];
  channels: IChannel[];
  product: IShopifyProduct[] | ISallaProduct[] | null;
  productSource: TProductSource | null;
}

interface Metrics {
  cpc: number | undefined;
  ctr: number | undefined;
  impressions: number | undefined;
  clicks: number | undefined;
}

export interface ICampaignAdsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  type: string;
  metrics: Metrics;
}

export type TProductSource = 'shopify' | 'salla';

export interface IShopifyProduct {
  url: string;
  title: string;
  images: string[];
  productId: string;
  resourceId: string;
}

export interface ISallaProduct {
  productId: string;
  title: string;
  description: string;
  images: Array<{ src: string }>;
  categories: string[];
}
