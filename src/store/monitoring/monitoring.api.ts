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
    getAudienceForCampaign: builder.query<any, string>({
      query: (campaignId) => ({
        url: `monitoring/campaign/audience`,
        method: 'GET',
        params: { campaignId },
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
} = monitoringApi;
