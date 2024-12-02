import { IResponseInterface } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

interface IWhatsappNumber {
  id: string;
  verified_name: string;
}

interface IWhatsappBusinessAccount {
  name: string;
  id: string;
  phone_numbers: {
    data: IWhatsappNumber[];
    paging: {
      cursors: {
        before: string;
        after: string;
      };
    };
  };
}

interface IFacebookBusinessAccount {
  name: string;
  id: string;
  picture: string;
}

const socialIntegrationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFbBusinessAccounts: builder.query<
      IResponseInterface<{
        data: IFacebookBusinessAccount[];
        type: string;
      }>,
      string
    >({
      query: (brandId) => ({
        url: '/auth/fb/business-accounts',
        method: 'GET',
        params: { brandId },
      }),
    }),
    getWABusinessAccounts: builder.query<
      IResponseInterface<IWhatsappBusinessAccount[]>,
      { brandId: string; accountId?: string }
    >({
      query: (args) => ({
        url: '/auth/fb/wa-business-accounts',
        method: 'GET',
        params: { ...args },
      }),
    }),
  }),
});

export const { useGetFbBusinessAccountsQuery, useLazyGetWABusinessAccountsQuery } =
  socialIntegrationsApi;
