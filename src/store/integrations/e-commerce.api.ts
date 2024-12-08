import toast from 'react-hot-toast';
import { ISallaProduct } from 'src/interfaces/modules/campaign';
import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

const eCommercesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connectShopify: builder.mutation<
      IResponseInterface,
      {
        installationId: string;
        shopifyShop: string;
        email: string;
      }
    >({
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
    getShopifyProducts: builder.query<IResponseInterface, string>({
      query: (brandId) => ({
        url: `/shopify/products/${brandId}`,
        method: 'GET',
      }),
    }),
    getSallaProducts: builder.query<IResponseInterface<ISallaProduct[]>, void>({
      query: () => ({
        url: `/salla/products`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useConnectShopifyMutation, useGetShopifyProductsQuery, useGetSallaProductsQuery } =
  eCommercesApi;
