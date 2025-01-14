import queryString from 'query-string';

import { apiSlice } from '../api/apiSlice';

interface IPerformanceTrendParams {
  metric: string; // Impressions | Conversion Rate | Revenue
  timeRange: '12_months' | '30_days' | '7_days' | '24_hours';
}

interface IPerformanceComparisonParams {
  metric: string; // Impression ...
  campaign1: string;
  campaign2: string;
}

const monitoringApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<any, any>({
      query: (params) => ({
        url: '/monitoring/metrics',
        method: 'GET',
        params: { ...params },
      }),
    }),
    getTopPerformingCampaigns: builder.query<any, void>({
      query: () => ({
        url: '/monitoring/campaign/top',
        method: 'GET',
      }),
    }),
    getPerformanceTrend: builder.query<any, IPerformanceTrendParams>({
      query: (args) => ({
        url: '/monitoring/performance/trend',
        method: 'GET',
        params: { ...args },
      }),
    }),
    getCampaigns: builder.query<any, void>({
      query: () => ({
        url: '/monitoring/campaign',
        method: 'GET',
      }),
    }),
    getCampaignDetails: builder.query<any, string>({
      query: (campaignId) => ({
        url: `/monitoring/campaign/${campaignId}/detail`,
        method: 'GET',
      }),
    }),
    getPerformanceComparison: builder.query<any, IPerformanceComparisonParams>({
      query: (args) => ({
        url: '/monitoring/performance/comparison',
        method: 'GET',
        params: { ...args },
      }),
    }),
    getCohortForCampaigns: builder.query<any, string>({
      query: (campaignId) => ({
        url: `/monitoring/campaign/${campaignId}/cohort`,
        method: 'GET',
      }),
    }),
    getLowMonitoringCampaign: builder.query<any, void>({
      query: () => ({
        url: `/monitoring/campaign/low`,
        method: 'GET',
      }),
    }),
    getAudienceForCampaign: builder.query<
      any,
      {
        campaignId: string;
        page: number;
        limit: number;
        filter: {
          dateRange?: string;
          search?: string;
        };
      }
    >({
      query: ({ campaignId, page = 1, limit = 50, filter }) => ({
        url: `monitoring/campaign/audience`,
        method: 'POST',
        body: { campaignId, page, limit, filter },
      }),
    }),
    getAudienceBreakdown: builder.query<any, { userId: string; campaignId: string }>({
      query: ({ userId, campaignId }) => ({
        url: `monitoring/campaign/audience/breakdown`,
        method: 'GET',
        params: { userId, campaignId },
      }),
    }),
    getMetricCards: builder.query<any, { timeRange: string; campaignIds: string[] }>({
      query: ({ timeRange, campaignIds }) => ({
        url: 'cohort/metrics?' + queryString.stringify({ campaignIds }, { arrayFormat: 'bracket' }),
        method: 'GET',
        params: { timeRange },
      }),
    }),
    getMonitoringPerformanceTrend: builder.query<
      any,
      { timeRange: string; campaignIds: string[]; metrics: string[]; valueType: string }
    >({
      query: ({ timeRange, campaignIds, metrics, valueType }) => ({
        url:
          'cohort/performance/trend?' +
          queryString.stringify({ campaignIds, metrics }, { arrayFormat: 'bracket' }),
        method: 'GET',
        params: { timeRange, valueType },
      }),
    }),
  }),
});

export const {
  useGetMetricsQuery,
  useGetTopPerformingCampaignsQuery,
  useGetPerformanceTrendQuery,
  useGetCampaignsQuery,
  useGetCampaignDetailsQuery,
  useGetPerformanceComparisonQuery,
  useGetCohortForCampaignsQuery,
  useGetLowMonitoringCampaignQuery,
  useGetAudienceForCampaignQuery,
  useGetAudienceBreakdownQuery,
  useGetMetricCardsQuery,
  useGetMonitoringPerformanceTrendQuery,
} = monitoringApi;
