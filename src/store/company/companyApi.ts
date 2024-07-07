import { apiSlice } from "../api/apiSlice";
import { BrandInterface, setBrand } from "../brand/brandSlice";
import { UserInterface, setUser } from "../user/userSlice";
import { CompanyInterface, setCompany } from "./comapnySlice";

interface ResponseInterface {
  company: CompanyInterface;
  user: UserInterface;
  brand: BrandInterface;
}

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<ResponseInterface, void>({
      query: () => ({
        url: "/company",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response;
      },
      transformErrorResponse: (response) => {
        return null;
      },
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCompany(result?.data?.company));
          dispatch(setUser(result?.data?.user));
          dispatch(setBrand(result?.data?.brand));
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      onCacheEntryAdded: async () => {},
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
