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

const getOAuthUrl = async (
  url: string,
  params: Record<string, string>,
  option: {
    sendToken?: boolean;
  } = {
    sendToken: true,
  },
) => {
  const token = await getAuthToken();
  return `${import.meta.env.VITE_BASE_API_URL}${url}?${buildQueryString({
    ...params,
    ...(option?.sendToken ? { token } : {}),
  })}`;
};

export { getAuthToken, getOAuthUrl };
