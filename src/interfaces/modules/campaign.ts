import { GatewayType } from 'src/interfaces/brand.interface';

export type TCampaignGoal = 'acquisition' | 'retention' | 'activation';

export type TCampaignMedium = 'whatsapp' | 'email-sms';

export interface ChannelInterface {
  channel: 'sms' | 'email' | 'notification';
  platform: GatewayType | 'none';
}

export interface CampaignItemInterface {
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

export interface CampaignInterface {
  resourceId?: string;
  brandId: string;
  tagId: string;
  goal: TCampaignGoal;
  name: string;
  details: string;
  link: string;
  tone: 'formal' | 'informal';
  startDate: string;
  endDate: string;
  time: string; // MUST USE 24 HOUR FORMAT
  stepCount: number;
  stepDelay: number;
  content: any[];
  channels: ChannelInterface[];
}

interface Metrics {
  cpc: number | undefined;
  ctr: number | undefined;
  impressions: number | undefined;
  clicks: number | undefined;
}

export interface CampaignAdsItemInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  type: string;
  metrics: Metrics;
}
