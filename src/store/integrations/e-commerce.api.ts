import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';

const eCommercesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connectShopify: builder.mutation<any, any>({
      query: (args) => ({
        url: '/shopify/direct/connect',
        method: 'POST',
        body: args,
        credentials: 'include',
        mode: 'cors',
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Shopify connected successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to connect Shopify!');
          return err;
        }
      },
    }),
  }),
});

export const { useConnectShopifyMutation } = eCommercesApi;
