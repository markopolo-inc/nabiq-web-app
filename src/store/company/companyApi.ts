import type { BrandInterface } from 'interfaces/brand.interface';
import type { CompanyInterface } from 'interfaces/company.interface';
import type { UserInterface } from 'interfaces/user.interface';
import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';
import { setBrand } from '../brand/brandSlice';
import { setUser } from '../user/userSlice';
import { setCompany } from './comapnySlice';

interface ResponseInterface {
  company: CompanyInterface;
  user: UserInterface;
  brand: BrandInterface;
}

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<ResponseInterface, void>({
      query: () => ({
        url: '/company',
        method: 'GET',
      }),
      providesTags: ['Company'],
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
    }),
    updateSetting: builder.mutation<any, any>({
      query: (args) => {
        const { ...rest } = args;
        return {
          url: `/company/settings`,
          method: 'POST',
          body: {
            ...rest,
          },
        };
      },
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue?.data;
      },
      invalidatesTags: ['Company'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Update successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to updated!');
          return err;
        }
      },
    }),
  }),
});

export const { useGetCompanyQuery, useUpdateSettingMutation } = companyApi;
