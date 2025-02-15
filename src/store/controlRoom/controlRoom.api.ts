import toast from 'react-hot-toast';
import {
  IApprovedMarkContentOperation,
  IContentSampleType,
  IMarkContentOperation,
} from 'src/interfaces/controlRoom.interface.ts';

import { apiSlice } from '../api/apiSlice';

interface RequestQueryParams {
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
  payload: IMarkContentOperation[];
}

interface ApprovedMarkContentRequestType {
  configId: string;
  payload: IApprovedMarkContentOperation;
}

interface ContentSamplesResponseType {
  data: {
    configDetail: string;
    configName: string;
    contents: IContentSampleType[];
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
    getContentSamples: builder.query<
      ContentSamplesResponseType,
      { configId: string; category: 'content' | 'blocked-content' }
    >({
      query: ({ configId, category }) => ({
        url: `/control-room/config/${configId}/${category}`,
        method: 'GET',
      }),
      providesTags: (_result, _error, { category, configId }) => [
        { type: 'ControlRoomConfigContent', id: configId, category },
      ],
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
    markConfigContent: builder.mutation<any, MarkContentRequestType>({
      query: (args) => ({
        url: `/control-room/config/${args.configId}/content`,
        method: 'POST',
        body: {
          operations: args.payload,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Successfully updated feedback!', {
            id: 'mark-config-content-success',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to give feedback!', {
            id: 'mark-config-content-error',
          });
          return err;
        }
      },
    }),
    markApprovedConfigContent: builder.mutation<any, ApprovedMarkContentRequestType>({
      invalidatesTags: (_result, _error, { configId }) => [
        { type: 'ControlRoomConfigContent', id: configId },
      ],
      query: (args) => ({
        url: `/control-room/config/${args.configId}/blocked-content`,
        method: 'POST',
        body: args.payload,
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Successfully updated feedback!', {
            id: 'mark-approved-config-content-success',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to give feedback!', {
            id: 'mark-approved-config-content-error',
          });
          return err;
        }
      },
    }),
    getConfigContentPublished: builder.query<any, string>({
      query: (configId) => ({
        url: `/control-room/config/${configId}/content/published`,
        method: 'GET',
      }),
      providesTags: (_result, _error, configId) => [
        { type: 'ControlRoomConfigContentPublished', id: configId },
      ],
    }),
    reactConfigContent: builder.mutation<any, MarkContentRequestType>({
      invalidatesTags: (_result, _error, args) => [
        { type: 'ControlRoomConfigContentPublished', id: args.configId },
      ],
      query: (args) => ({
        url: `/control-room/config/${args.configId}/content/reaction`,
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
          toast.success(res.data?.message || 'Successfully updated feedback!', {
            id: 'react-config-content-success',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to give feedback!', {
            id: 'react-config-content-error',
          });
          return err;
        }
      },
    }),
  }),
});

export const {
  useGetConfigsQuery,
  useGetContentSamplesQuery,
  useGetConfigCohortQuery,
  useGetConfigContentQuery,
  useMarkConfigContentMutation,
  useMarkApprovedConfigContentMutation,
  useReactConfigContentMutation,
  useGetConfigContentPublishedQuery,
} = controlRoomApi;
