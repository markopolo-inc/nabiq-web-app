export interface IMetrics {
  name: string;
  value: number;
  type: 'number' | 'percentage' | 'currency' | 'count' | 'amount';
  change: number;
}

export interface IMetricDetail {
  type: 'number' | 'percentage' | 'currency';
  value: number;
  change: number;
}

export interface IMetricData {
  isWASpecific: boolean;
  names: string[];
  details: {
    [key: string]: IMetricDetail;
  };
}
