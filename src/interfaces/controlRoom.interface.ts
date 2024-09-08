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
}

export interface IControlRoomConfigCohortContent {
  configName: string;
  contents: ICohortContent[];
}
