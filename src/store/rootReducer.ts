import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';
import appReducer from './app/app.slice';
import authReducer from './auth/authSlice';
import brandReducer from './brand/brandSlice';
import campaignReducer from './campaign/campaignSlice';
import companyReducer from './company/comapnySlice';
import { markopoloApiSlice } from './markopoloApi/markopoloApiSlice';
import onboardingReducer from './onboarding/onboardingSlice';
import { tagApiSlice } from './tagApi/tagApiSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [markopoloApiSlice.reducerPath]: markopoloApiSlice.reducer,
  [tagApiSlice.reducerPath]: tagApiSlice.reducer,
  auth: authReducer,
  onboarding: onboardingReducer,
  company: companyReducer,
  user: userReducer,
  brand: brandReducer,
  campaign: campaignReducer,
  app: appReducer,
});

export default rootReducer;
