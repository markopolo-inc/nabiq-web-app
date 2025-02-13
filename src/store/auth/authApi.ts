import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import posthog from 'posthog-js';
import toast from 'react-hot-toast';
import { persistor } from 'src/store';

import { apiSlice } from '../api/apiSlice';
import { logout, setIsAuthenticated, setUserEmail } from './authSlice';

const UserNotConfirmedException = 'UserNotConfirmedException';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(arg, { dispatch }) {
        const { email, password, onLoading, onUnverified, onSuccess } = arg;
        try {
          onLoading && onLoading(true);
          await Auth.signIn(email, password);
          dispatch(setIsAuthenticated(true));
          dispatch(setUserEmail(email));
          posthog?.capture('User_Signed_In', {
            user_id: email,
            email,
            signin_method: 'email',
            timestamp: new Date().toISOString(),
          });
          // toast.success('Successfully logged in.', { id: 'login-success' });
          onSuccess && onSuccess();
        } catch (error) {
          if (error?.code === UserNotConfirmedException) {
            dispatch(setUserEmail(email));
            onUnverified && onUnverified();
          } else {
            toast.error(error?.message || 'Something went wrong!', { id: 'login-error' });
          }
        } finally {
          onLoading && onLoading(false);
        }
      },
    }),
    signup: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(arg, { dispatch }) {
        const { name, email, password, onLoading, onSuccess } = arg;
        try {
          onLoading && onLoading(true);
          await Auth.signUp({
            username: email,
            password,
            attributes: {
              'custom:fullName': name,
            },
            autoSignIn: {
              enabled: true,
            },
          });
          dispatch(setUserEmail(email));
          onSuccess && onSuccess();
          posthog?.capture('User_Signed_Up', {
            user_id: email,
            email,
            signup_method: 'email',
            timestamp: new Date().toISOString(),
          });
          toast.success('Successfully signed up.', { id: 'signup-success' });
        } catch (error) {
          toast.error(error?.message || 'Something went wrong', { id: 'signup-error' });
        } finally {
          onLoading && onLoading(false);
        }
      },
    }),
    googleSignIn: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // No-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        const loading = toast.loading('Signing in with Google...', {
          id: 'google-signin-loading',
        });
        try {
          let user: any = null;
          try {
            user = await Auth.currentAuthenticatedUser();
          } catch (error) {
            if (error?.trim() !== 'The user is not authenticated') {
              throw error;
            }
          }
          if (!user) {
            await Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            });
            user = await Auth.currentAuthenticatedUser();
          }
          const email = user.attributes.email;
          dispatch(setIsAuthenticated(true));
          dispatch(setUserEmail(email));
          toast.dismiss(loading);
          posthog?.capture('User_Signed_In', {
            user_id: email,
            email,
            signin_method: 'google',
            timestamp: new Date().toISOString(),
          });
          toast.success('Successfully signed in with Google.', { id: 'google-signin-success' });
          setTimeout(() => {
            window.location.href = '/';
          }, 100);
        } catch (error) {
          toast.dismiss(loading);
          if (error?.trim() !== 'The user is not authenticated') {
            toast.error('Error signing in with Google!', { id: 'google-signin-error' });
          }
        }
      },
    }),
    verify: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg) {
        const { email, confirmationPin, onLoading, onSuccess } = _arg;
        try {
          onLoading && onLoading(true);
          await Auth.confirmSignUp(email, confirmationPin);
          toast.success('Verification successful!', { id: 'verify-success' });
          onSuccess && onSuccess();
          posthog?.capture('User_Verified', {
            user_id: email,
            email,
            verification_method: 'email',
            timestamp: new Date().toISOString(),
          });
        } catch (error) {
          toast.error(error?.message || 'Something went wrong!', { id: 'verify-error' });
          onLoading && onLoading(false);
        }
      },
    }),
    resendVerificationCode: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg) {
        const { email } = _arg;
        const loading = toast.loading('Resending code...', {
          id: 'resend-code-loading',
        });
        try {
          await Auth.resendSignUp(email);
          toast.success('Code has been sent to your email!', { id: 'resend-code-success' });
        } catch (error) {
          toast.error(error?.message || 'Something went wrong!', { id: 'resend-code-error' });
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    requestPasswordReset: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // No-op response
      },
      async onQueryStarted(arg) {
        const { email, onLoading, onSuccess } = arg;
        try {
          onLoading && onLoading(true);
          await Auth.forgotPassword(email);

          onSuccess && onSuccess();
        } catch (error) {
          void error;
        } finally {
          onLoading && onLoading(false);
        }
      },
    }),
    submitNewPassword: builder.mutation({
      queryFn: async (arg, _api, _extraOptions, _baseQuery) => {
        const { email, code, newPassword } = arg;
        try {
          await Auth.forgotPasswordSubmit(email, code, newPassword);
          return { data: { success: true } };
        } catch (error: any) {
          return {
            error: {
              status: 400,
              data: {
                success: false,
                message: error.message || 'Failed to reset password',
              },
            },
          };
        }
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        const { onLoading } = arg;
        try {
          onLoading?.(true);
          await queryFulfilled;
        } catch (error) {
          void error;
        } finally {
          onLoading?.(false);
        }
      },
    }),
    resendCode: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // No-op response
      },
      async onQueryStarted(arg) {
        const { email, onLoading, onSuccess } = arg;
        try {
          onLoading && onLoading(true);
          await Auth.forgotPassword(email);

          onSuccess && onSuccess();
        } catch (error) {
          void error;
        } finally {
          onLoading && onLoading(false);
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        Auth.signOut();
        const loading = toast.loading('Logging out...', {
          id: 'logout-loading',
        });
        setTimeout(() => {
          dispatch(logout());
          dispatch({ type: 'store/reset' });
          dispatch(apiSlice.util.resetApiState());
          persistor.purge().then((_result) => void _result);
          toast.dismiss(loading);
          window.localStorage.clear();
        }, 2000);
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGoogleSignInMutation,
  useLogoutMutation,
  useVerifyMutation,
  useResendVerificationCodeMutation,
  useRequestPasswordResetMutation,
  useSubmitNewPasswordMutation,
  useResendCodeMutation,
} = authApi;
