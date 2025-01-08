import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import toast from 'react-hot-toast';
import { REHYDRATE } from 'redux-persist';
import { getAuthToken } from 'src/utils/auth';

import { logout } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  prepareHeaders: async (headers) => {
    // Set a default header
    headers.set('Authorization', `Bearer ${await getAuthToken()}`);
    headers.set('Content-Type', 'application/json');
    // Add more headers as needed
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const id = toast.loading('Logging out...');

    setTimeout(() => {
      api.dispatch(logout());
      toast.dismiss(id);
    }, 1000);
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_BASE_API_URL,
  //   prepareHeaders: async (headers) => {
  //     // Set a default header
  //     headers.set('Authorization', `Bearer ${await getAuthToken()}`);
  //     headers.set('Content-Type', 'application/json');
  //     // Add more headers as needed
  //     return headers;
  //   },
  // }),
  baseQuery: baseQueryWithReauth,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE && reducerPath) {
      return action.payload?.[reducerPath];
    }
  },
  tagTypes: [
    'Company',
    'ControlRoomConfigContent',
    'ControlRoomConfigContentPublished',
    'ConstitutionalAIConfig',
  ],
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
});
