import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { BrandInterface } from 'src/interfaces/brand.interface';

const initialState: BrandInterface = {
  resourceType: 'Brand',
  resourceId: '',
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<BrandInterface>) => action.payload,
  },
});

export const { setBrand } = brandSlice.actions;
export default brandSlice.reducer;
