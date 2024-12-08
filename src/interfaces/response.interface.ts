import { ICampaignAdsItem, ICampaignItem, IShopifyProduct } from 'src/interfaces/modules/campaign';

export type APIResponseType = {
  success: boolean;
  message: string;
  selectableObjects?: Record<string, any[]>;
};

export type APIGetConfigsResponseType = {
  success: boolean;
  message: string;
  data?: ICampaignItem[];
};

export type APIGetAdsResponseType = {
  success: boolean;
  message: string;
  list?: ICampaignAdsItem[];
};

export type IResponseInterface<T = null> = {
  success: boolean;
  message: string;
  data?: T;
  products?: IShopifyProduct[];
};
