import { formatNumber } from './number';

/**
 * Trims all values of a given object and returns the resulting object.
 *
 * @param {Object} payload - The object to trim values from.
 * @return {Object} A new object with all values trimmed.
 */
export const trimAllValuesOfObject = (payload) => {
  const obj = {};
  for (const key in payload) {
    obj[key] = payload?.[key]?.trim();
  }
  return obj;
};

export function buildQueryString(params) {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

/**
 * Returns capitalized name from camelcase
 * @param str String that needs to be converted from camelCase to capitalized string
 */
export function camelCaseToCapitalized(str) {
  // Replace each uppercase letter with a space followed by the same letter in lowercase
  const result = str.replace(/([A-Z])/g, ' $1').toLowerCase();

  // Capitalize the first letter of each word
  return result.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Formats a metric value with a unit based on the provided type.
 *
 * @param {string | number} value - The value to be formatted.
 * @param {'count' | 'percentage' | 'amount'} type - The type of unit to be applied.
 * @return {string} The formatted metric value with the unit.
 */
export const formatMetricUnit = (
  value: string | number,
  type: 'count' | 'percentage' | 'amount',
) => {
  const TypeMap = {
    count: '',
    percentage: '%',
    amount: '$',
  };

  return `${type !== 'percentage' ? TypeMap[type] : ''} ${formatNumber(value)}${type === 'percentage' ? TypeMap[type] : ''}`;
};
