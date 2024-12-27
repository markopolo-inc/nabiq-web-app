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
        const loading = toast.loading('Creating constitutional AI config...', {
          id: 'create-constitutional-ai-config-loading',
        });
        try {
          await queryFulfilled;
          toast.success('Constitutional AI config created successfully!', {
            id: 'create-constitutional-ai-config-success',
          });
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to create config', {
            id: 'create-constitutional-ai-config-error',
          });
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
        const loading = toast.loading('Creating constitutional AI config...', {
          id: 'update-constitutional-ai-config-loading',
        });
        try {
          const res = await queryFulfilled;
          toast.success(res?.data?.message || 'Constitutional AI config updated successfully!', {
            id: 'update-constitutional-ai-config-success',
          });
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to update config', {
            id: 'update-constitutional-ai-config-error',
          });
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
