import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Auth } from "aws-amplify";
import { REHYDRATE } from "redux-persist";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: async (headers) => {
      const res = await Auth.currentSession();
      // Set a default header
      headers.set("Authorization", `Bearer ${res.getIdToken().getJwtToken()}`);
      headers.set("Content-Type", "application/json");
      // Add more headers as needed
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE && reducerPath) {
      return action.payload?.[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
});
