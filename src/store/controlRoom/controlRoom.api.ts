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
    getConfigContent: builder.query<any, string>({
      query: (configId) => ({
        url: `/control-room/config/${configId}/content`,
        method: 'GET',
      }),
    }),
    getConfigCohort: builder.query<any, string>({
      query: (configId) => ({
        url: `/control-room/config/${configId}/cohort`,
        method: 'GET',
      }),
    }),
    markConfig: builder.mutation<any, MarkContentRequestType>({
      query: (args) => ({
        url: `/control-room/config/${args.configId}/content`,
        method: 'POST',
        body: {
          ...args.payload,
        },
      }),
    }),
  }),
});

export const {
  useGetConfigsQuery,
  useGetConfigCohortQuery,
  useGetConfigContentQuery,
  useMarkConfigMutation,
} = controlRoomApi;
