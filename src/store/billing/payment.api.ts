import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

interface IPaymentMethod {
  card_number: string;
  month: string;
  year: string;
  cvv: string;
  first_name: string;
  last_name: string;
}

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPaymentMethod: builder.mutation<IPaymentMethod, IResponseInterface>({
      query: (args) => ({
        url: `/payment/method`,
        method: 'POST',
        body: { ...args },
      }),
    }),
  }),
});

export const { useAddPaymentMethodMutation } = paymentApi;
