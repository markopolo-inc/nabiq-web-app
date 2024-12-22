import { apiSlice } from '../api/apiSlice';

export const acquisitionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAcquisitionApiKey: builder.query<any, any>({
      query: (brandId: string) => ({
        url: `/acquisition/apiKey/${brandId}`,
        method: 'get',
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          return await queryFulfilled;
        } catch (err) {
          return err;
        }
      },
    }),
  }),
});

export const { useGetAcquisitionApiKeyQuery } = acquisitionApi;
