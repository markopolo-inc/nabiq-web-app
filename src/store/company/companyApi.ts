import { apiSlice } from "../api/apiSlice";
import { CompanyInterface, setCompany } from "./comapnySlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<CompanyInterface, void>({
      query: () => ({
        url: "/company",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(setCompany(result?.data));
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
