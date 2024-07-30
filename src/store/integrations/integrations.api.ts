import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import type {
  GatewayType,
  IntegrationInterface,
} from "src/interfaces/brand.interface";

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
  selectableObjects?: Record<string, any[]>;
};

export const integrationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    addAccounts: builder.mutation<ResponseType, any>({
      invalidatesTags: ["Company"],
      query: (args) => ({
        url: `/${args.category}/integrate-account`,
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

export const { useIntegrateGatewayMutation, useAddAccountsMutation } =
  integrationsApi;
