import toast from 'react-hot-toast';
import { APIResponseType } from 'src/interfaces/response.interface';

import { apiSlice } from '../api/apiSlice';

interface RequestQueryParams {
  type: 'queued' | 'published';
  limit: number;
  page: number;
}

interface ConfigResponseType {
  data: {
    count: number;
    configs: any[];
  };
}

interface MarkContentRequestType {
  configId: string;
  payload: {
    id: string; // content id
    status: 'relevant' | 'irrelevant';
  };
}

const controlRoomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfigs: builder.query<ConfigResponseType, RequestQueryParams>({
      query: (args) => ({
        url: `/control-room/config`,
        method: 'GET',
        params: { ...args },
      }),
    }),
    getConfigCohort: builder.query<any, string>({
      query: (configId) => ({
        url: `/control-room/config/${configId}/cohort`,
        method: 'GET',
      }),
    }),
    getConfigContent: builder.query<any, string>({
      query: (configId) => ({
        url: `/control-room/config/${configId}/content`,
        method: 'GET',
      }),
      providesTags: (_result, _error, configId) => [
        { type: 'ControlRoomConfigContent', id: configId },
      ],
    }),
    markConfig: builder.mutation<APIResponseType, MarkContentRequestType>({
      invalidatesTags: (_result, _error, args) => [
        { type: 'ControlRoomConfigContent', id: args.configId },
      ],
      query: (args) => ({
        url: `/control-room/config/${args.configId}/content`,
        method: 'POST',
        body: {
          operations: [{ ...args.payload }],
        },
      }),

      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Successfully updated feedback!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to give feedback!');
          return err;
        }
      },
    }),
  }),
});

export const {
  useGetConfigsQuery,
  useGetConfigCohortQuery,
  useGetConfigContentQuery,
  useMarkConfigMutation,
} = controlRoomApi;
