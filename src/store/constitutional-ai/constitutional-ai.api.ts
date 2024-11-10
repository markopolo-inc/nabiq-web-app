import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';

interface ICreateConstitutionalAIConfig {
  brandId: string;
  rules: string[];
}

interface IConstitutionalAIConfigResponse {
  success: boolean;
  message: string;
  data: {
    rules: string[];
    brandId: string;
    createdAt: string;
    updatedAt: string;
  };
}

const constitutionalAiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConstitutionalAIConfig: builder.query<IConstitutionalAIConfigResponse, { brandId: string }>({
      query: ({ brandId }) => `/constitutional-ai/${brandId}`,
      providesTags: ['ConstitutionalAIConfig'],
    }),
    createConstitutionalAIConfig: builder.mutation<
      IConstitutionalAIConfigResponse,
      ICreateConstitutionalAIConfig
    >({
      query: (args) => ({
        url: '/constitutional-ai',
        method: 'POST',
        body: args,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        const loading = toast.loading('Creating constitutional AI config...');
        try {
          await queryFulfilled;
          toast.success('Constitutional AI config created successfully!');
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to create config');
          throw new Error(err);
        } finally {
          toast.dismiss(loading);
        }
      },
      invalidatesTags: ['ConstitutionalAIConfig'],
    }),
    updateConstitutionalAIConfig: builder.mutation<
      IConstitutionalAIConfigResponse,
      ICreateConstitutionalAIConfig
    >({
      query: (args) => ({
        url: '/constitutional-ai',
        method: 'PATCH',
        body: args,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        const loading = toast.loading('Creating constitutional AI config...');
        try {
          const res = await queryFulfilled;
          toast.success(res?.data?.message || 'Constitutional AI config updated successfully!');
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to update config');
          throw new Error(err);
        } finally {
          toast.dismiss(loading);
        }
      },
      invalidatesTags: ['ConstitutionalAIConfig'],
    }),
  }),
});

export const {
  useCreateConstitutionalAIConfigMutation,
  useGetConstitutionalAIConfigQuery,
  useUpdateConstitutionalAIConfigMutation,
} = constitutionalAiApi;
