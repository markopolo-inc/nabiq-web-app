import toast from 'react-hot-toast';

import { markopoloApiSlice } from '../markopoloApi/markopoloApiSlice';

const markopoloMarktagApi = markopoloApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendEmailInstruction: builder.mutation<any, { email: string; username: string }>({
      query: ({ email, username }) => ({
        url: '/v4/marktag/send-instruction',
        method: 'POST',
        body: {
          email,
          username,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.status === 200 || result?.data?.status === 201) {
            toast.success('Instructions of Marktag Setup sent to developer successfully', {
              id: 'send-email-instruction-success',
            });
          }
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Failed to send instructions!', {
            id: 'send-email-instruction-error',
          });
        }
      },
    }),
  }),
});

export const { useSendEmailInstructionMutation } = markopoloMarktagApi;
