import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import type {
  GatewayType,
  IntegrationInterface,
} from "src/interfaces/brand.interface";

interface SaveApiPayload {
  gateway: GatewayType;
  brandId: string;
  apiKey: string;
}
interface IntegrationPayload extends IntegrationInterface {
  brandId: string;
  gateway: GatewayType;
}

interface IntegrationArgType {
  category: "email" | "sms" | "push";
  payload: IntegrationPayload;
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
          const res = await queryFulfilled;
          toast.success(res.data?.message || "Saved successfully!");
        } catch (err) {
          toast.error(err.message || "Failed to add api key!");
          return err;
        }
      },
    }),
    integrateGateway: builder.mutation<ResponseType, IntegrationArgType>({
      invalidatesTags: ["Company"],
      query: (args) => ({
        url: `/${args.category}/auth`,
        method: "POST",
        body: {
          ...args.payload,
        },
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || "Saved successfully!");
        } catch (err) {
          toast.error(err?.error.message || "Failed to save information!");
          return err;
        }
      },
    }),
  }),
});

export const { useIntegrateEmailMutation, useIntegrateGatewayMutation } =
  integrationsApi;
