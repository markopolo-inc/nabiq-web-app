import toast from 'react-hot-toast';
import { DomainDataType } from 'src/context/MarkTagContext';

import { tagApiSlice } from '../tagApi/tagApiSlice';

const markopoloMarktagApi = tagApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkopoloMarkTags: builder.query<any[], string>({
      query: (brandId) => ({
        url: '/get-tags',
        method: 'GET',
        params: {
          brandId,
        },
      }),
    }),
    getMarkTagById: builder.query<DomainDataType | null, string>({
      query: (markTagId) => ({
        url: '/get-tag',
        method: 'GET',
        params: {
          markTagId,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to get mark tag details!');
        }
      },
    }),
    registerTag: builder.mutation<
      any,
      {
        brandId: string;
        domain: string;
        isClient?: boolean;
        isMobile?: boolean;
        isShopify?: boolean;
        isWoocommerce?: boolean;
      }
    >({
      query: ({
        brandId,
        domain,
        isClient = false,
        isMobile = false,
        isShopify = false,
        isWoocommerce = false,
      }) => ({
        url: '/register',
        method: 'POST',
        body: {
          brandId,
          domain,
          isClient,
          isMobile,
          isShopify,
          isWoocommerce,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Domain registered successfully!');
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Could not register domain!');
        }
      },
    }),
    verifyTagSetup: builder.mutation<any, { markTagId: string }>({
      query: ({ markTagId }) => ({
        url: '/verify-setup',
        method: 'POST',
        body: {
          markTagId,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.serverCreated) {
            toast.success('Setup verified successfully!');
          } else {
            toast.error(result?.data?.message || 'Setup verification failed!');
          }
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Could not verify setup!');
        }
      },
    }),
    getShopifyCustomDomain: builder.query<string | null, string>({
      query: (brandId) => ({
        url: '/get-shopify-custom-domain',
        method: 'GET',
        params: {
          brandId,
        },
      }),
      transformResponse: (data: { domainName: string }[]) => {
        return data?.[0]?.domainName || null;
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to get shopify custom domain!');
        }
      },
    }),
    getWoocommerceCustomDomain: builder.query<string | null, string>({
      query: (brandId) => ({
        url: '/get-woocommerce-custom-domain',
        method: 'GET',
        params: {
          brandId,
        },
      }),
      transformResponse: (data: { domainName: string }[]) => {
        return data?.[0]?.domainName || null;
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to get woocommerce custom domain!');
        }
      },
    }),
    installShopifyCode: builder.mutation<
      any,
      { brandId: string; markTagId: string; action: string }
    >({
      query: ({ brandId, markTagId, action }) => ({
        url: '/install-code-shopify',
        method: 'POST',
        body: {
          brandId,
          markTagId,
          action,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error(err?.error?.data?.message || 'Failed to install Shopify code');
        }
      },
    }),
    installWooCommerceCode: builder.mutation<
      any,
      { brandId: string; markTagId: string; action: string }
    >({
      query: ({ brandId, markTagId, action }) => ({
        url: '/install-code-woocommerce',
        method: 'POST',
        body: {
          brandId,
          markTagId,
          action,
        },
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error?.error?.data?.message || 'Failed to install WooCommerce code');
        }
      },
    }),
  }),
});

export const {
  useLazyGetMarkopoloMarkTagsQuery,
  useLazyGetMarkTagByIdQuery,
  useRegisterTagMutation,
  useVerifyTagSetupMutation,
  useLazyGetShopifyCustomDomainQuery,
  useLazyGetWoocommerceCustomDomainQuery,
  useInstallShopifyCodeMutation,
  useInstallWooCommerceCodeMutation,
} = markopoloMarktagApi;
