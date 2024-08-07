import { apiSlice } from "../api/apiSlice";

interface BrandsListResponseInterface {
  resourceId: string;
  brandName: string;
}

export interface MarktagsResponseInterface {
  hostname: string;
  resourceId: string;
}

const marktagApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrandsList: builder.query<BrandsListResponseInterface[], void>({
      query: () => ({
        url: "/marktag/brands",
        method: "GET",
      }),
    }),
    getMarktagUnderBrand: builder.query<MarktagsResponseInterface[], string>({
      query: (brandId) => ({
        url: `/marktag/${brandId} `,
        method: "GET",
      }),
    }),
    connectMarktag: builder.mutation<any, any>({
      query: (data) => ({
        url: "/marktag/connect",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const {
  useGetBrandsListQuery,
  useLazyGetMarktagUnderBrandQuery,
  useConnectMarktagMutation,
} = marktagApi;
