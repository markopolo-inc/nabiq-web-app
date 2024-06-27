import { combineReducers } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";
import onboardingReducer from "./onboarding/onboardingSlice";
import companyReducer from "./company/comapnySlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  onboarding: onboardingReducer,
  company: companyReducer,
});

export default rootReducer;
