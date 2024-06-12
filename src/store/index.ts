import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import onboardingReducer from './onboarding/onboardingSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    onboarding: onboardingReducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
