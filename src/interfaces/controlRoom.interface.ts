import { GatewayType } from './brand.interface';

export interface IControlRoomConfig {
  id: string;
  step: number;
  name: string;
  detail: string;
  timeLeft: string;
  progress: number;
  status: 'processing' | 'published' | 'queued';
  startDate: string;
  hasFeedBack: boolean;
  queuedAt: string;
  scheduledFor: string;
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
