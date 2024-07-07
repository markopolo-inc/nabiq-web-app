import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import { getAuthToken } from "src/utils/auth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: async (headers) => {
      // Set a default header
      headers.set("Authorization", `Bearer ${await getAuthToken()}`);
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
  tagTypes: ["Company"],
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
});
