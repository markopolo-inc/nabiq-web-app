import toast from 'react-hot-toast';
import {
  APIGetAdsResponseType,
  APIGetConfigsResponseType,
  APIResponseType,
} from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

export const campaignApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCampaignConfig: builder.mutation<APIResponseType, any>({
      query: (args) => {
        return {
          url: `/cohort`,
          method: 'POST',
          body: {
            ...args,
          },
        };
      },
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Created campaign successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to create!');
          return err;
        }
      },
    }),
    editCampaignConfig: builder.mutation<APIResponseType, any>({
      query: (args) => {
        return {
          url: `/cohort`,
          method: 'PATCH',
          body: {
            ...args,
          },
        };
      },
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Campaign update campaign successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to update!');
          return err;
        }
      },
    }),
    deleteCampaignConfig: builder.mutation<APIResponseType, any>({
      query: (configId) => {
        return {
          url: `/cohort`,
          method: 'DELETE',
          params: {
            configId,
          },
        };
      },
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Campaign update campaign successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to update!');
          return err;
        }
      },
    }),
    getCampaignConfigs: builder.query<APIGetConfigsResponseType, string>({
      query: (brandId) => ({
        url: `/cohort`,
        method: 'GET',
        params: {
          brandId,
        },
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          return result?.data;
        } catch (err) {
          return err;
        }
      },
    }),
    getCampaignAdsResult: builder.query<APIGetAdsResponseType, any>({
      query: (args) => ({
        url: `/brand/integration/content`,
        method: 'POST',
        body: {
          ...args,
        },
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          return result?.data?.list || [];
        } catch (err) {
          return err;
        }
      },
    }),
  }),
});

export const {
  useCreateCampaignConfigMutation,
  useEditCampaignConfigMutation,
  useDeleteCampaignConfigMutation,
  useGetCampaignConfigsQuery,
  useGetCampaignAdsResultQuery,
} = campaignApi;
