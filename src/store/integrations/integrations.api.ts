import toast from 'react-hot-toast';
import type { GatewayType, IntegrationInterface } from 'src/interfaces/brand.interface';

import { apiSlice } from '../api/apiSlice';

interface IntegrationPayload extends IntegrationInterface {
  brandId: string;
  gateway: GatewayType;
}

interface IntegrationArgType {
  category: 'email' | 'sms' | 'push' | 'ads';
  payload: IntegrationPayload;
}

type ResponseType = {
  success: boolean;
  message: string;
  selectableObjects?: Record<string, any[]>;
};

const integrationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    integrateGateway: builder.mutation<ResponseType, IntegrationArgType>({
      invalidatesTags: ['Company'],
      query: (args) => ({
        url: `/${args.category}/auth`,
        method: 'POST',
        body: {
          ...args.payload,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Saved successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to save information!');
          return err;
        }
      },
    }),
    disconnectGateway: builder.mutation<ResponseType, any>({
      invalidatesTags: ['Company'],
      query: (args) => ({
        url: `/${args.category}/auth-disconnect`,
        method: 'POST',
        body: {
          ...args.payload,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || `Disconnected gateway!`);
        } catch (err) {
          toast.error(err?.error.message || 'Failed to disconnect!');
          return err;
        }
      },
    }),
    addAccounts: builder.mutation<ResponseType, any>({
      invalidatesTags: ['Company'],
      query: (args) => ({
        url: `/${args.category}/integrate-account`,
        method: 'POST',
        body: {
          ...args.payload,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Saved successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to save information!');
          return err;
        }
      },
    }),
    // todo: these endpoints will replace with nabiq dadicated new endpoints
    getLongLivedAccessToken: builder.mutation<any, { brandId: string; accessToken: string }>({
      query: ({ brandId, accessToken }) => ({
        url: '/v4/auth/fb/long-lived-token',
        method: 'GET',
        params: {
          brandId,
          accessToken,
        },
      }),
    }),
    getFbAdAccounts: builder.query<any, { brandId: string }>({
      query: ({ brandId }) => ({
        url: '/v4/auth/fb/ad-accounts',
        method: 'GET',
        params: {
          brandId,
        },
      }),
      transformResponse: (response: { data: any }) =>
        response?.data?.data?.map((item: any) => ({
          id: item?.account_id,
          name: item?.name,
          picture: item?.picture,
        })) || [],
    }),
    getGoogleClients: builder.query<any, { brandId: string }>({
      query: ({ brandId }) => ({
        url: '/google/get-google-customers',
        method: 'POST',
        body: {
          brandId,
        },
      }),
      transformResponse: (response: any) =>
        response?.customer_ids?.map((item: any) => ({
          name: item?.descriptive_name,
          id: item['client-id'],
          manager: item?.manager,
          managerCustomerId: item?.login_customer_id,
          ...item,
        })) || [],
    }),
  }),
});

export const {
  useIntegrateGatewayMutation,
  useAddAccountsMutation,
  useDisconnectGatewayMutation,
  useGetLongLivedAccessTokenMutation,
  useGetFbAdAccountsQuery,
  useGetGoogleClientsQuery,
} = integrationsApi;
