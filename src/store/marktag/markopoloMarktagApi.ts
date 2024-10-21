import toast from 'react-hot-toast';

import { tagApiSlice } from '../tagApi/tagApiSlice';

interface MarkTagResponse {
  status: number;
  data: any;
}

const markopoloMarktagApi = tagApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkopoloMarkTags: builder.query<any[], string>({
      query: (brandId) => ({
        url: '/get-tags',
        method: 'GET',
        params: {
          brandId,
        },
      }),
    }),
    getMarkTagById: builder.query<MarkTagResponse | null, string>({
      query: (markTagId) => ({
        url: '/get-tag',
        method: 'GET',
        params: {
          markTagId,
        },
      }),
      transformResponse: (response: { status: number; data: any }) => {
        if (response.status === 200) {
          return { ...response.data, markTagId: response.data.resourceId };
        }
        return null;
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Failed to get mark tag details!');
        }
      },
    }),
    registerTag: builder.mutation<
      any,
      {
        brandId: string;
        domain: string;
        isMobile?: boolean;
        isShopify?: boolean;
        isWoocommerce?: boolean;
      }
    >({
      query: ({ brandId, domain, isMobile = false, isShopify = false, isWoocommerce = false }) => ({
        url: '/register',
        method: 'POST',
        body: {
          brandId,
          domain,
          isMobile,
          isShopify,
          isWoocommerce,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Domain registered successfully!');
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Could not register domain!');
        }
      },
    }),
  }),
});

export const { useLazyGetMarkopoloMarkTagsQuery, useGetMarkTagByIdQuery, useRegisterTagMutation } =
  markopoloMarktagApi;
