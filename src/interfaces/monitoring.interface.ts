export interface IMetrics {
  name: string;
  value: number;
  type: 'count' | 'percentage' | 'amount';
  change: number;
}
