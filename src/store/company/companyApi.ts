import { apiSlice } from "../api/apiSlice";
import { setUser } from "../user/userSlice";
import { setCompany } from "./comapnySlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<any, void>({
      query: () => ({
        url: "/company",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCompany(result?.data?.company));
          dispatch(setUser(result?.data?.user));
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
