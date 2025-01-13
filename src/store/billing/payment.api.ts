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
