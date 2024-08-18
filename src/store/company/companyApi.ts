import type { BrandInterface } from "interfaces/brand.interface";
import type { UserInterface } from "interfaces/user.interface";
import type { CompanyInterface } from "interfaces/company.interface";

import { apiSlice } from "../api/apiSlice";
import { setBrand } from "../brand/brandSlice";
import { setUser } from "../user/userSlice";
import { setCompany } from "./comapnySlice";

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
      providesTags: ["Company"],
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCompany(result?.data?.company));
          dispatch(setUser(result?.data?.user));
          dispatch(setBrand(result?.data?.brand));
        } catch (err) {
          return err;
        }
      },
      async onCacheEntryAdded() {},
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
