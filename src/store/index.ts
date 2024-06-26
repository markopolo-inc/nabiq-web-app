import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";
import onboardingReducer from "./onboarding/onboardingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  onboarding: onboardingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  //   auth: authReducer,
  //   onboarding: onboardingReducer,
  // },
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    // @ts-ignore
    getDefaultMiddlewares({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { persistor };
