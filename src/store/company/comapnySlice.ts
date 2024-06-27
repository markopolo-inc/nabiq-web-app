import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompanyInterface {}
const initialState: CompanyInterface = {};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<CompanyInterface>) => {
      state = {
        ...action.payload,
      };
    },
  },
});

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
