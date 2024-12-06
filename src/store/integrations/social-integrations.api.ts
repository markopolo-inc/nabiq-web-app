import { toast } from 'react-hot-toast';
import { TDataSourcePlatform, TSocialPlatform } from 'src/interfaces/brand.interface';
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
      async onQueryStarted(args, { queryFulfilled }) {
        const res = await queryFulfilled;
        if (!res?.data?.success) {
          toast.error('No numbers found!');
        }
      },
    }),
    saveWANumber: builder.mutation<
      IResponseInterface,
      {
        brandId: string;
        number: string;
        name: string;
        whatsAppBusinessAccountId: string;
      }
    >({
      query: (args) => ({
        url: '/brand/save-wa-number',
        method: 'POST',
        body: { ...args },
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || `Saved successfully!`);
        } catch (err) {
          toast.error(err?.error.message || 'Failed to save!');
          return err;
        }
      },
    }),
    disconnectPlatform: builder.mutation<
      IResponseInterface,
      { brandId: string; platform: TSocialPlatform | TDataSourcePlatform }
    >({
      query: (args) => ({
        url: '/brand/disconnect-platform',
        method: 'DELETE',
        body: { ...args },
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || `Disconnected successfully!`);
        } catch (err) {
          toast.error(err?.error.message || 'Failed to disconnect!');
          return err;
        }
      },
    }),
  }),
});

export const {
  useGetFbBusinessAccountsQuery,
  useLazyGetWABusinessAccountsQuery,
  useSaveWANumberMutation,
  useDisconnectPlatformMutation,
} = socialIntegrationsApi;
