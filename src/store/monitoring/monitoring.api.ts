import { apiSlice } from "../api/apiSlice";

const monitoringApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<any, any>({
      query: (params) => ({
        url: "/monitoring/metrics",
        method: "GET",
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetMetricsQuery } = monitoringApi;
