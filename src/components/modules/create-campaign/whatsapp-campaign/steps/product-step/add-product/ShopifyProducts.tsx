import { FiShopify } from '@nabiq-icons';
import { Group, Loader, MultiSelect, Stack } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useCampaignDispatch } from 'src/store/hooks';
import { useGetShopifyProductsQuery } from 'src/store/integrations/e-commerce.api';

export const ShopifyProducts = () => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data, isLoading } = useGetShopifyProductsQuery(brandId);
  const products = useMemo(
    () => data?.products?.map((p) => ({ ...p, value: p.resourceId, label: p.title })) || [],
    [data],
  );
  const [value, setValue] = useState<string[]>([]);

  const dispatchCampaign = useCampaignDispatch();

  useEffect(() => {
    dispatchCampaign({ product: products.filter((p) => value.includes(p.value)) });
  }, [value]);

  return (
    <Stack className='p-4 bg-success-50 rounded-xl' gap={32}>
      <Group gap={12}>
        <FiShopify size={22} />
        <p className='text-gray-900 font-semibold'>{t('create_campaign.shopify_products')}</p>
      </Group>
      <MultiSelect
        rightSection={isLoading ? <Loader size={16} /> : null}
        value={value}
        onChange={setValue}
        hidePickedOptions
        data={products}
        placeholder={t('create_campaign.select_products')}
        searchable
        autoComplete='on'
        label={t('create_campaign.product')}
      />
    </Stack>
  );
};
