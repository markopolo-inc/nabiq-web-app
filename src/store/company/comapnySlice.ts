import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
const initialState: CompanyInterface = {
  resourceId: "",
  companyName: "",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<CompanyInterface>) =>
      action.payload,
  },
});

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
