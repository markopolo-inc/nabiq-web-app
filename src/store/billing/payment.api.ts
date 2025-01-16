import { toast } from 'react-hot-toast';
import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

export interface IPaymentMethod {
  companyId: string;
  userId: string;
  first_name: string;
  last_name: string;
  email: string;
  card_number: string;
  month: string;
  year: string;
  cvv: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
}

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPaymentMethod: builder.mutation<IResponseInterface, IPaymentMethod>({
      query: (args) => ({
        url: `/payment/method`,
        method: 'POST',
        body: { ...args },
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          if (!res.data.success) {
            toast.error(res.data.message || 'Failed to add payment method!', {
              id: 'add-payment-method-error',
            });
          }
          return res;
        } catch (err) {
          toast.error(err?.error.message || 'Failed to add payment method!', {
            id: 'add-payment-method-error',
          });
          return err;
        }
      },
    }),
    startSubscription: builder.mutation<IResponseInterface, { planId: string; companyId: string }>({
      query: (args) => ({
        url: `/payment/start-sub`,
        method: 'POST',
        body: { ...args },
      }),
    }),
  }),
});

export const { useAddPaymentMethodMutation, useStartSubscriptionMutation } = paymentApi;
