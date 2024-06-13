export const trimAllValuesOfObject = (payload) => {
  const obj = {};
  for (const key in payload) {
    obj[key] = payload?.[key]?.trim();
  }
  return obj;
};
