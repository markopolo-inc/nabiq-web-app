import { toast } from 'react-hot-toast';
import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

interface IFirebaseIntegration {
  brandId: string;
  projectId: string;
  privateKey: string;
  clientEmail: string;
}

const pushNotificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    integrateFirebase: builder.mutation<IResponseInterface, IFirebaseIntegration>({
      query: (args) => ({
        url: `/brand/${args.brandId}/integrate-firebase`,
        method: 'POST',
        body: {
          projectId: args.projectId,
          privateKey: args.privateKey,
          clientEmail: args.clientEmail,
        },
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Saved successfully!');
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to save information!');
          return err;
        }
      },
    }),
  }),
});

export const { useIntegrateFirebaseMutation } = pushNotificationApi;
