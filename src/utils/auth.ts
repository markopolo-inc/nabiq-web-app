import { Auth } from 'aws-amplify';

import { buildQueryString } from './string.utils';

const getAuthToken = async () => {
  try {
    const res = await Auth.currentSession();
    return res.getIdToken().getJwtToken();
  } catch {
    localStorage.clear();
  }
};

const getRedirectUri = async (url: string, params: Record<string, string>) => {
  const token = await getAuthToken();
  return `${import.meta.env.VITE_BASE_API_URL}${url}?${buildQueryString({
    ...params,
    token,
  })}`;
};

export { getAuthToken, getRedirectUri };
