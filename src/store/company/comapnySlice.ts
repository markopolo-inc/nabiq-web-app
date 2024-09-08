import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CompanyInterface } from 'interfaces/company.interface';

const initialState: CompanyInterface = {
  resourceId: '',
  companyName: '',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<CompanyInterface>) => action.payload,
  },
});

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
