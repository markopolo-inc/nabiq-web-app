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
  }),
});

export const { useOnboardUserMutation } = onboardApi;
