import { apiSlice } from "../api/apiSlice";
import { setCompany } from "./comapnySlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<any, void>({
      query: () => ({
        url: "/company",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response?.company;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCompany(result?.data));
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
