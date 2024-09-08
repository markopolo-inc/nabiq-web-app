import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';
import authReducer from './auth/authSlice';
import brandReducer from './brand/brandSlice';
import campaignReducer from './campaign/campaignSlice';
import companyReducer from './company/comapnySlice';
import onboardingReducer from './onboarding/onboardingSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  onboarding: onboardingReducer,
  company: companyReducer,
  user: userReducer,
  brand: brandReducer,
  campaign: campaignReducer,
});

export default rootReducer;
