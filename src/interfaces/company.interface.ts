import { IPayment } from 'src/interfaces/modules/billing';

export interface CompanyInterface {
  id?: string;
  _id?: string;
  resourceId?: string;
  companyName?: string;
  isOnboardingComplete?: boolean;
  meta?: {
    cognitoId: string;
    userName: string;
    userEmail: string;
    businessName: string;
    industry: string;
    businessSize: string;
    profilePhoto: string;
  };
  payment?: IPayment;
}

export interface CompanyCreationInterface {
  businessName: string;
  industry: string;
  businessSize: string;
  website: string;
  cognitoId?: string;
  userName?: string;
  userEmail?: string;
}
