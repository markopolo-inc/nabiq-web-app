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
    verifyTagSetup: builder.mutation<any, { markTagId: string }>({
      query: ({ markTagId }) => ({
        url: '/verify-setup',
        method: 'POST',
        body: {
          markTagId,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.serverCreated) {
            toast.success('Setup verified successfully!');
          } else {
            toast.error('Setup verification failed!');
          }
        } catch (error) {
          toast.error('Could not verify setup!');
        }
      },
    }),
  }),
});

export const {
  useLazyGetMarkopoloMarkTagsQuery,
  useLazyGetMarkTagByIdQuery,
  useRegisterTagMutation,
  useVerifyTagSetupMutation,
} = markopoloMarktagApi;
