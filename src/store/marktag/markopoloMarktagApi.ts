import { tagApiSlice } from '../tagApi/tagApiSlice';

const markopoloMarktagApi = tagApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkopoloMarkTags: builder.query<any[], string>({
      query: (brandId) => ({
        url: `/get-tags?brandId=${brandId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetMarkopoloMarkTagsQuery } = markopoloMarktagApi;
