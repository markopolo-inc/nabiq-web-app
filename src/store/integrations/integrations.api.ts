import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";

interface SaveApiInterface {
  appName: "klaviyo" | "hubspot" | "postmark";
  brandId: string;
  apiKey: string;
}

export const integrationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveAppApiKey: builder.mutation<any, SaveApiInterface>({
      query: (args) => {
        const url = `/${args.appName}/oauth`;
        return {
          url,
          method: "POST",
          body: {
            brandId: args.brandId,
            apiKey: args.apiKey,
          },
        };
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success(`Api key saved!`);
        } catch (err) {
          toast.error(err.message || "Failed to add api key!");
          return err;
        }
      },
    }),
  }),
});

export const { useSaveAppApiKeyMutation } = integrationsApi;
