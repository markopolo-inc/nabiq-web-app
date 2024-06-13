import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import toast from 'react-hot-toast';
import { apiSlice } from '../api/apiSlice';
import { setIsAuthenticated, setUsername, logout } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(arg, { dispatch }) {
        const { email, password } = arg;
        const loading = toast.loading('Logging in...');
        try {
          await Auth.signIn(email, password);
          dispatch(setIsAuthenticated(true));
          dispatch(setUsername(email));

          toast.dismiss(loading);
          toast.success('Successfully logged in.');
          window.location.href = '/';
        } catch (error) {
          toast.dismiss(loading);
          toast.error('Invalid email or password.');
        }
      },
    }),
    googleSignIn: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        const loading = toast.loading('Signing in with Google...');
        try {
          await Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          });
          const user = await Auth.currentAuthenticatedUser();
          const email = user.attributes.email;

          dispatch(setIsAuthenticated(true));
          dispatch(setUsername(email));

          toast.dismiss(loading);
          toast.success('Successfully signed in with Google.');
          window.location.href = '/';
        } catch (error) {
          toast.dismiss(loading);
          console.log('error', error);
          toast.error('Error signing in with Google.');
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        const loading = toast.loading('Logging out...');
        try {
          await Auth.signOut();
          dispatch(logout());

          window.localStorage.clear();
          window.location.href = '/login';
          toast.dismiss(loading);
          toast.success('Successfully logged out.');
        } catch (error) {
          toast.dismiss(loading);
          toast.error('Error signing out.');
        }
      },
    }),
  }),
});

export const { useLoginMutation, useGoogleSignInMutation, useLogoutMutation } =
  authApi;
