import { toast } from 'react-hot-toast';
import { IMappedField, TDataSourcePlatform } from 'src/interfaces/brand.interface';
import { IResponseInterface } from 'src/interfaces/response.interface';

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
      invalidatesTags: ['Company'],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || 'Saved successfully!', {
            id: 'save-data-source-properties-success',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to save information!', {
            id: 'save-data-source-properties-error',
          });
          return err;
        }
      },
    }),
    disconnectDataSource: builder.mutation<
      IResponseInterface,
      { brandId: string; platform: TDataSourcePlatform }
    >({
      query: (args) => ({
        url: '/brand/disconnect-datasource-platform',
        method: 'DELETE',
        body: { ...args },
      }),
      invalidatesTags: ['Company'],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          toast.success(res.data?.message || `Disconnected successfully!`, {
            id: 'disconnect-data-source-success',
          });
        } catch (err) {
          toast.error(err?.error.message || 'Failed to disconnect!', {
            id: 'disconnect-data-source-error',
          });
          return err;
        }
      },
    }),
    getZohoRegions: builder.query<IResponseInterface, void>({
      query: () => ({
        url: '/zoho/region',
        method: 'GET',
      }),
    }),
    saveZohoRegion: builder.query<
      IResponseInterface,
      {
        brandId: string;
        region: string;
      }
    >({
      query: (args) => ({
        url: '/zoho/region',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const {
  useGetDataSourcePropertiesQuery,
  useSaveDataSourcePropertiesMutation,
  useDisconnectDataSourceMutation,
  useGetZohoRegionsQuery,
} = dataSourcesApi;
