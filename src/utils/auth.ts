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

export const requestPasswordReset = async (email: string) => {
  try {
    await Auth.forgotPassword(email);
    return { success: true, message: 'reset_pass.code_sent' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const submitNewPassword = async (email: string, code: string, newPassword: string) => {
  try {
    await Auth.forgotPasswordSubmit(email, code, newPassword);
    return { success: true, message: 'reset_pass.password_reset_success' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const resendVerificationCode = async (email: string) => {
  try {
    await Auth.forgotPassword(email);
    return { success: true, message: 'reset_pass.code_resent' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export { getAuthToken, getOAuthUrl };
