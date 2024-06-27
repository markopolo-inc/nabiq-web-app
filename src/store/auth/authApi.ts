import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import { setIsAuthenticated, setUsername, logout } from "./authSlice";
const UserNotConfirmedException = "UserNotConfirmedException";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(arg, { dispatch }) {
        const { email, password } = arg;
        const loading = toast.loading("Logging in...");
        try {
          await Auth.signIn(email, password);
          dispatch(setIsAuthenticated(true));
          dispatch(setUsername(email));
          toast.success("Successfully logged in.");
          window.location.href = "/";
        } catch (error) {
          if (error?.code === UserNotConfirmedException) {
            window.location.href = "/verify";
          } else {
            toast.error(error?.message || "Something went wrong!");
          }
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    signup: builder.mutation({
      queryFn: async (arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(arg, { dispatch }) {
        const { name, email, password } = arg;
        const loading = toast.loading("Signin in...");
        try {
          // Add user to cognito
          await Auth.signUp({
            username: email,
            password,
            attributes: {
              "custom:fullName": name,
            },
          });
          // dispatch(setIsAuthenticated(true));
          dispatch(setUsername(email));

          toast.success("Successfully sign up.");
          window.location.href = `/verify`;
        } catch (error) {
          toast.error(error?.message || "Something went wrong");
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    googleSignIn: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch, getState }) {
        const loading = toast.loading("Signing in with Google...");
        try {
          await Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          });
          const user = await Auth.currentAuthenticatedUser();
          const email = user.attributes.email;

          dispatch(setIsAuthenticated(true));
          dispatch(setUsername(email));

          toast.dismiss(loading);
          toast.success("Successfully signed in with Google.");
          window.location.href = "/";
        } catch (error) {
          toast.dismiss(loading);
          toast.error("Error signing in with Google.");
        }
      },
    }),
    verify: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch, getState }) {
        const { email, confirmationPin } = _arg;
        const loading = toast.loading("Verifying...");
        try {
          await Auth.confirmSignUp(email, confirmationPin);
          toast.success("Verification successful!");
          window.location.href = "/login";
        } catch (error) {
          toast.error(error?.message || "Something went wrong!");
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    resendVerificationCode: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg) {
        const { email } = _arg;
        const loading = toast.loading("Resending code...");
        try {
          await Auth.resendSignUp(email);
          toast.success("Code has been sent to your email!");
        } catch (error) {
          toast.error(error?.message || "Something went wrong!");
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        return { data: null }; // Return a no-op response
      },
      async onQueryStarted(_arg, { dispatch }) {
        Auth.signOut();
        dispatch(logout());
        const loading = toast.loading("Logging out...");
        toast.dismiss(loading);
        dispatch(apiSlice.util.resetApiState());
        window.localStorage.clear();
        window.location.href = "/login";
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
