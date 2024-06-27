import { apiSlice } from "../api/apiSlice";
import { onboardUser } from "./onboardingSlice";

export const onboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOnboardUser: builder.mutation({
      query: (data) => ({
        url: "/onboard-user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            onboardUser({
              user: result.data?.user,
            })
          );
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  }),
});

export const { useAddOnboardUserMutation } = onboardApi;
