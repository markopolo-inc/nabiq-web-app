import toast from 'react-hot-toast';
import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

const eCommercesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connectShopify: builder.mutation<IResponseInterface, any>({
      query: (args) => ({
        url: '/shopify/direct/connect',
        method: 'POST',
        body: args,
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Shopify connected successfully!', {
            id: 'shopify-connect',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to connect Shopify!', {
            id: 'shopify-connect',
          });
          return err;
        }
      },
    }),
  }),
});

export const { useConnectShopifyMutation } = eCommercesApi;
