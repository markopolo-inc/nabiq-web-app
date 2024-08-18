import { apiSlice } from "../api/apiSlice";

interface RequestQueryParams {
  type: "queued" | "published";
  limit: number;
  page: number;
}

const controlRoomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfigs: builder.query<void, RequestQueryParams>({
      query: (args) => ({
        url: `/control-room/config`,
        method: "GET",
        params: { ...args },
      }),
    }),
  }),
});

export const { useGetConfigsQuery } = controlRoomApi;
