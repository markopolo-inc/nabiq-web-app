import { toast } from 'react-hot-toast';
import { IMappedField, TDataSourcePlatform } from 'src/interfaces/brand.interface';

import { apiSlice } from '../api/apiSlice';

type TGetDataSourcePropertiesArgs = {
  platform: TDataSourcePlatform;
  brandId: string;
};

type TResponseDataSourceProperties = {
  message: string;
  success: boolean;
  data: IMappedField[];
};

interface ISaveDataSourcePropertiesArgs {
  platform: TDataSourcePlatform;
  brandId: string;
  data: IMappedField[];
}

const dataSourcesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDataSourceProperties: builder.query<
      TResponseDataSourceProperties,
      TGetDataSourcePropertiesArgs
    >({
      query: (args) => ({
        url: '/datasource/properties',
        method: 'GET',
        params: { ...args },
      }),
    }),
    saveDataSourceProperties: builder.mutation<
      TResponseDataSourceProperties,
      ISaveDataSourcePropertiesArgs
    >({
      query: (args) => ({
        url: '/brand/save-datasouce-mapped-fields',
        method: 'POST',
        body: args,
      }),
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Saved successfully!');
        } catch (err) {
          toast.error(err?.error.message || 'Failed to save information!');
          return err;
        }
      },
    }),
  }),
});

export const { useGetDataSourcePropertiesQuery, useSaveDataSourcePropertiesMutation } =
  dataSourcesApi;
