import { Dispatch, SetStateAction, createContext } from 'react';

export type DomainDataRecordType = {
  name: string;
  ttl: number;
  type: string;
  value: string;
};

export type DomainDataType = {
  markTagId: string;
  records: DomainDataRecordType[];
  isShopify?: boolean;
  isWoocommerce?: boolean;
  hostname?: string;
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
  domain: string;
  setDomain: Dispatch<SetStateAction<string>>;
  domainData: DomainDataType;
  setDomainData: Dispatch<SetStateAction<DomainDataType>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  toggle?: boolean;
  setToggle?: Dispatch<SetStateAction<boolean>>;
  step?: 'register' | 'verify' | 'code';
  setStep?: Dispatch<SetStateAction<'register' | 'verify' | 'code'>>;
}

export const MarkTagContext = createContext<any>({});
