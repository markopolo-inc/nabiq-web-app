export const trimAllValuesOfObject = (payload) => {
  const obj = {};
  for (const key in payload) {
    obj[key] = payload?.[key]?.trim();
  }
  return obj;
};

export function buildQueryString(params) {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
}

/**
 * Returns capitalized name from camelcase
 * @param str String that needs to be converted from camelCase to capitalized string
 */
export function camelCaseToCapitalized(str) {
  // Replace each uppercase letter with a space followed by the same letter in lowercase
  const result = str.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter of each word
  return result.replace(/\b\w/g, (char) => char.toUpperCase());
}
