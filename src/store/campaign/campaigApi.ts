import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import {
  APIGetConfigsResponseType,
  APIResponseType,
} from "src/interfaces/response.interface";

export const campaignApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCampaignConfig: builder.mutation<APIResponseType, any>({
      query: (args) => ({
        url: `/cohort`,
        method: "POST",
        body: {
          ...args,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || "Created campaign successfully!");
        } catch (err) {
          toast.error(err?.error.message || "Failed to create!");
          return err;
        }
      },
    }),
    getConfigs: builder.query<APIGetConfigsResponseType, string>({
      query: (brandId) => ({
        url: `/cohort?brandId=${brandId}`,
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          return result?.data;
        } catch (err) {
          return err;
        }
      },
      async onCacheEntryAdded() {},
    }),
  }),
});

export const { useCreateCampaignConfigMutation, useGetConfigsQuery } = campaignApi;
