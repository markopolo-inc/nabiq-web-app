/**
 * Formats a given number into a human-readable string.
 *
 * @param {number} num - The number to be formatted.
 * @return {string} The formatted number as a string.
 */
export function formatNumber(num) {
  // Check if the number is greater than or equal to 1 million
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  } else {
    // Format with commas for numbers less than 1 million
    return num.toLocaleString();
  }
}
