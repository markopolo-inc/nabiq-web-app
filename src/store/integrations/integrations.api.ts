import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import type {
  GatewayType,
  SMSIntegrationInterface,
} from "src/interfaces/brand.interface";

interface SaveApiPayload {
  gateway: GatewayType;
  brandId: string;
  apiKey: string;
}
interface IntgrateSMSPayload extends SMSIntegrationInterface {
  brandId: string;
  gateway: GatewayType;
}

type ResponseType = {
  success: boolean;
  message: string;
};

export const integrationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    integrateEmail: builder.mutation<ResponseType, SaveApiPayload>({
      invalidatesTags: ["Company"],
      query: (args) => {
        const url = `/${args.gateway}/oauth`;
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
    integrateSMS: builder.mutation<ResponseType, IntgrateSMSPayload>({
      invalidatesTags: ["Company"],
      query: (args) => {
        const url = "/sms/auth";
        return {
          url,
          method: "POST",
          body: {
            ...args,
          },
        };
      },
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success(`Information saved!`);
        } catch (err) {
          toast.error(err?.error.message || "Failed to save information!");
          return err;
        }
      },
    }),
  }),
});

export const { useIntegrateEmailMutation, useIntegrateSMSMutation } =
  integrationsApi;
