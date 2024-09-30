import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';

interface BrandsListResponseInterface {
  resourceId: string;
  brandName: string;
  companyId?: string;
  brandWebsite?: string;
  brandInfo?: any;
  connectedAccounts?: any;
}

export interface MarktagsResponseInterface {
  hostname: string;
  resourceId: string;
}

const marktagApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrandsList: builder.query<BrandsListResponseInterface[], void>({
      query: () => ({
        url: '/marktag/brands',
        method: 'GET',
      }),
    }),
    getMarktagUnderBrand: builder.query<MarktagsResponseInterface[], string>({
      query: (brandId) => ({
        url: `/marktag/${brandId} `,
        method: 'GET',
      }),
    }),
    connectMarktag: builder.mutation<any, any>({
      query: (data) => ({
        url: '/marktag/connect',
        method: 'POST',
        body: data,
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Connected marktag successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to connect!');
          return err;
        }
      },
      invalidatesTags: ['Company'],
    }),
  }),
});

export const {
  useGetBrandsListQuery,
  useLazyGetMarktagUnderBrandQuery,
  useConnectMarktagMutation,
} = marktagApi;
