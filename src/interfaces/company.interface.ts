export interface CompanyInterface {
  id?: string;
  _id?: string;
  resourceId?: string;
  companyName?: string;
  isOnboardingCompleted?: boolean;
  meta?: {
    cognitoId: string;
    userName: string;
    userEmail: string;
    businessName: string;
    industry: string;
    businessSize: string;
    profilePhoto: string;
  };
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
