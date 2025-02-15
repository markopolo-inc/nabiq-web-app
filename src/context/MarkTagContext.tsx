import { Dispatch, SetStateAction, createContext } from 'react';

export type StepType =
  | 'connect'
  | 'create'
  | 'register'
  | 'verify'
  | 'choose'
  | 'code'
  | 'email'
  | 'support'
  | 'calendly';

export type DomainDataRecordType = {
  name: string;
  ttl: number;
  type: string;
  value: string;
};

export type DomainDataType = {
  markTagId: string;
  records: DomainDataRecordType[];
  isClient?: boolean;
  isShopify?: boolean;
  isWoocommerce?: boolean;
  hostname?: string;
  clientId?: string;
  resourceId?: string;
  brandId?: string;
  companyId?: string;
  setupStatus?: 'pending' | 'complete';
  platforms?: string[];
  shopifyScriptTag?: any[];
  woocommerceScriptTag?: any[];
  isVerified?: boolean;
  isAutoEventSet?: boolean;
  shopId?: boolean;
  isCodeAdded?: boolean;
};

export interface MarktagContextType {
  marktagType: string;
  setMarktagType: Dispatch<SetStateAction<string>>;
  domain: string;
  setDomain: Dispatch<SetStateAction<string>>;
  domainData: DomainDataType;
  setDomainData: Dispatch<SetStateAction<DomainDataType>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  toggle?: boolean;
  setToggle?: Dispatch<SetStateAction<boolean>>;
  step?: StepType;
  setStep?: Dispatch<SetStateAction<StepType>>;
}

export const MarkTagContext = createContext<any>({});
