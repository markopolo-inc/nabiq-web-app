import { combineReducers } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";
import onboardingReducer from "./onboarding/onboardingSlice";
import companyReducer from "./company/comapnySlice";
import userReducer from "./user/userSlice";
import brandReducer from "./brand/brandSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  onboarding: onboardingReducer,
  company: companyReducer,
  user: userReducer,
  brand: brandReducer,
});

export default rootReducer;
