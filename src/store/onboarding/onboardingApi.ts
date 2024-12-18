import toast from 'react-hot-toast';
import { CompanyCreationInterface } from 'src/interfaces/company.interface';

import { apiSlice } from '../api/apiSlice';

export const onboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    onboardUser: builder.mutation<void, CompanyCreationInterface>({
      query: (data) => ({
        url: '/onboard',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error('Failed to create user!');
          throw new Error(err);
        }
      },
    }),
    generateSampleContent: builder.mutation<void, { brandId: string }>({
      query: (data) => ({
        url: '/onboard/generate-sample-content',
        method: 'POST',
        body: { ...data },
      }),
    }),
    markSampleContentAsRead: builder.mutation<
      void,
      { brandId: string; sampleContentId: string; status: 'read' | 'unread' }
    >({
      query: (data) => ({
        url: '/onboard/mark-sample-content-as-read',
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
});

export const { useOnboardUserMutation, useGenerateSampleContentMutation } = onboardApi;
