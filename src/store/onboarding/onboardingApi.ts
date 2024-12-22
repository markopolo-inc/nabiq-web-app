import toast from 'react-hot-toast';
import { CompanyCreationInterface } from 'src/interfaces/company.interface';
import { IResponseInterface } from 'src/interfaces/response.interface';

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
    generateSampleContent: builder.mutation<void, { brandId: string; prompt: string }>({
      query: (data) => ({
        url: '/onboard/generate-sample-content',
        method: 'POST',
        body: { ...data },
      }),
    }),
    markSampleContentAsRead: builder.mutation<
      void,
      { brandId: string; sampleContentId: string; status: 'relevant' | 'irrelevant' }
    >({
      query: (data) => ({
        url: '/onboard/mark-sample-content-as-read',
        method: 'POST',
        body: { ...data },
      }),
    }),
    updateOnboardingStatus: builder.mutation<
      IResponseInterface,
      { companyId: string; isOnboardingComplete: boolean }
    >({
      invalidatesTags: ['Company'],
      query: (data) => ({
        url: '/onboard',
        method: 'PUT',
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useOnboardUserMutation,
  useGenerateSampleContentMutation,
  useMarkSampleContentAsReadMutation,
  useUpdateOnboardingStatusMutation,
} = onboardApi;
