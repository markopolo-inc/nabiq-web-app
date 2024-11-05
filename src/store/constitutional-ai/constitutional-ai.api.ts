import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';

interface ICreateConstitutionalAIConfig {
  brandId: string;
  rules: string[];
}

const constitutionalAiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createConstitutionalAIConfig: builder.mutation<any, ICreateConstitutionalAIConfig>({
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
          toast.error(err?.error.message);
          throw new Error(err);
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
  }),
});

export const { useCreateConstitutionalAIConfigMutation } = constitutionalAiApi;
