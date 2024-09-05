import toast from "react-hot-toast";

import { apiSlice } from "../api/apiSlice";

export const onboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    onboardUser: builder.mutation({
      query: (data) => ({
        url: "/onboard",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        const loading = toast.loading("Onboarding user...");
        try {
          await queryFulfilled;
          toast.success("Onboarding successful!");
          window.location.href = "/";
        } catch (err) {
          toast.error("Failed to onboard user!");
          throw new Error(err);
        } finally {
          toast.dismiss(loading);
        }
      },
    }),
  }),
});

export const { useOnboardUserMutation } = onboardApi;
