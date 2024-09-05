import { CampaignItemInterface } from 'src/interfaces/campaign.interface.ts';

export type APIResponseType = {
  success: boolean;
  message: string;
  selectableObjects?: Record<string, any[]>;
};

export type APIGetConfigsResponseType = {
  success: boolean;
  message: string;
  data?: CampaignItemInterface[];
};
