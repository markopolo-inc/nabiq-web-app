import { GatewayType } from './brand.interface';

export interface IControlRoomConfig {
  id: string;
  step: number;
  name: string;
  detail: string;
  timeLeft: string;
  progress: number;
  status: 'ACTIVE' | 'IN_REVIEW' | 'processing';
  startDate: string;
  hasFeedBack: boolean;
  queuedAt?: string;
  scheduledFor: string;
  identifiedIndividuals?: number; // @TODO: just for UI matching
}

export interface IControlRoomConfigCohort {
  name: string;
  size: number;
  conversionChance: number;
}

export interface ICohortContent {
  id: string;
  subject: string;
  content: string;
  status: 'relevant' | 'irrelevant' | 'not_marked';

  // for published contents
  sentOn: string; // date and time field
  step: number;

  reaction: 'liked' | 'disliked';
  channel: 'email' | 'sms';
  gateway: GatewayType;
}

export interface IControlRoomConfigCohortContent {
  configName: string;
  contents: ICohortContent[];
}

export interface IContentSampleType {
  content: string;
  id: string;
  status: 'relevant' | 'irrelevant' | 'not_marked';
  subject: string;
  platform: GatewayType;
  action?: 'not_marked' | 'approved' | 'blocked';
}

export interface IMarkContentOperation {
  id: string;
  status: 'relevant' | 'irrelevant';
}

export interface IApprovedMarkContentOperation {
  contentId: string;
  action: 'approved' | 'blocked';
}
