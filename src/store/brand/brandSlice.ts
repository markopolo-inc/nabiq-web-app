import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { AppNameType } from "src/components/UI/AppLogo";

export interface BrandInterface {
  brandName?: string;
  companyId?: string;
  connectedMarktag?: any;
  isAmazonAccountConnected?: boolean;
  isLinkedInAccountAdded?: boolean;
  isTiktokAccountAdded?: boolean;
  resourceId?: string;
  resourceType?: "Brand";
  integrations?: Record<AppNameType, { apiKey: string }>;
}

const initialState: BrandInterface = {
  resourceType: "Brand",
  resourceId: "",
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<BrandInterface>) => action.payload,
  },
});

export const { setBrand } = brandSlice.actions;
export default brandSlice.reducer;
