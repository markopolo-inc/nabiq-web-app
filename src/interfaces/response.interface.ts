import {
  CampaignAdsItemInterface,
  CampaignItemInterface,
} from 'src/interfaces/campaign.interface.ts';

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

export type APIGetAdsResponseType = {
  success: boolean;
  message: string;
  list?: CampaignAdsItemInterface[];
};

export type IResponseInterface<T> = {
  success: boolean;
  message: string;
  data?: T;
};
