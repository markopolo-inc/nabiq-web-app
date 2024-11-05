import { markopoloApiSlice } from '../markopoloApi/markopoloApiSlice';

const platformsApi = markopoloApiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
  useGetLongLivedAccessTokenMutation,
  useGetFbAdAccountsQuery,
  useGetGoogleClientsQuery,
} = platformsApi;
