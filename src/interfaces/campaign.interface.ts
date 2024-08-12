import { GatewayInterface } from "./brand.interface";

export interface ChannelInterface {
  channel: "sms" | "email" | "notification";
  platform: GatewayInterface | "none";
}

export interface CampaignInterface {
  brandId: string;
  tagId: string;
  goal: "acquisition" | "retention" | "activation";
  name: string;
  details: string;
  link: string;
  tone: "formal" | "informal";
  content: [];
  startDate: string;
  endDate: string;
  time: string; // MUST USE 24 HOUR FORMAT
  stepCount: number;
  stepDelay: number;
  channels: ChannelInterface[];
}
