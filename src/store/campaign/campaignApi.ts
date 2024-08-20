import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import {
  APIGetConfigsResponseType,
  APIResponseType,
} from "src/interfaces/response.interface";
import { setCampaign } from "src/store/campaign/campaignSlice.ts";

export const campaignApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCampaignConfig: builder.mutation<APIResponseType, any>({
      query: (args) => {
        const { list, ...rest } = args;

        return {
          url: `/cohort`,
          method: "POST",
          body: {
            ...rest,
          },
        };
      },
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
    getCampaignConfigs: builder.query<APIGetConfigsResponseType, string>({
      query: (brandId) => ({
        url: `/cohort?brandId=${brandId}`,
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCampaign({ list: result?.data?.data || [] }));
          return result?.data;
        } catch (err) {
          return err;
        }
      },
      async onCacheEntryAdded() {},
    }),
  }),
});

export const { useCreateCampaignConfigMutation, useGetCampaignConfigsQuery } =
  campaignApi;
