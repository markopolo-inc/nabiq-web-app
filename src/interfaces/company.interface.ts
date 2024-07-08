export interface CompanyInterface {
  id?: string;
  _id?: string;
  resourceId?: string;
  companyName?: string;
  meta?: {
    cognitoId: string;
    userName: string;
    userEmail: string;
    businessName: string;
    industry: string;
    businessSize: string;
  };
}
