import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
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
          toast.success('Successfully logged in.');
          onSuccess && onSuccess();
        } catch (error) {
          if (error?.code === UserNotConfirmedException) {
            dispatch(setUserEmail(email));
            onUnverified && onUnverified();
          } else {
            toast.error(error?.message || 'Something went wrong!');
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
          // Add user to cognito
          await Auth.signUp({
            username: email,
            password,
            attributes: {
              'custom:fullName': name,
            },
          });
          dispatch(setUserEmail(email));
          onSuccess && onSuccess();
          toast.success('Successfully sign up.');
          // window.location.href = `/verify`;
        } catch (error) {
          toast.error(error?.message || 'Something went wrong');
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
        const loading = toast.loading('Signing in with Google...');

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
          toast.success('Successfully signed in with Google.');

          setTimeout(() => {
            window.location.href = '/';
          }, 100);
        } catch (error) {
          toast.dismiss(loading);
          if (error?.trim() !== 'The user is not authenticated') {
            toast.error('Error signing in with Google!');
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
          toast.success('Verification successful!');
          onSuccess && onSuccess();
        } catch (error) {
          toast.error(error?.message || 'Something went wrong!');
        } finally {
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
        const loading = toast.loading('Resending code...');
        try {
          await Auth.resendSignUp(email);
          toast.success('Code has been sent to your email!');
        } catch (error) {
          toast.error(error?.message || 'Something went wrong!');
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, _fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        Auth.signOut();
        dispatch(logout());
        const loading = toast.loading('Logging out...');
        toast.dismiss(loading);
        dispatch({ type: 'store/reset' });
        dispatch(apiSlice.util.resetApiState());
        persistor.purge().then((_) => {
          // resolved
        });
        window.localStorage.clear();
        window.location.href = '/login';
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
} = authApi;
