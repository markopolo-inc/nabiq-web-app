import { FiShopify } from '@nabiq-icons';
import { Group, Loader, MultiSelect, Stack } from '@nabiq-ui';
import { useMemo } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { useGetShopifyProductsQuery } from 'src/store/integrations/e-commerce.api';

export const ShopifyProducts = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data, isLoading } = useGetShopifyProductsQuery(brandId);
  const products = useMemo(
    () => data?.products?.map((p) => ({ value: p.resourceId, label: p.title })) || [],
    [data],
  );

  return (
    <Stack className='p-4 bg-success-50 rounded-xl' gap={32}>
      <Group gap={12}>
        <FiShopify size={22} />
        <p className='text-gray-900 font-semibold'>Shopify Products</p>
      </Group>
      <MultiSelect
        rightSection={isLoading ? <Loader size={16} /> : null}
        hidePickedOptions
        data={products}
        placeholder='Select products'
        searchable
        autoComplete='on'
        label='Product'
      />
    </Stack>
  );
};
