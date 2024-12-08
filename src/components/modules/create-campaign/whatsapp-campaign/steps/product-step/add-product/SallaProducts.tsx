import { Loader, MultiSelect } from '@mantine/core';
import { FiSalla } from '@nabiq-icons';
import { Avatar, Group, Stack } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
import { ISallaProduct } from 'src/interfaces/modules/campaign';
import { useCampaignDispatch } from 'src/store/hooks';
import { useGetSallaProductsQuery } from 'src/store/integrations/e-commerce.api';

type TOption = ISallaProduct & {
  value: string;
  label: string;
  avatar: string;
};

export const SallaProducts = () => {
  const { data, isLoading } = useGetSallaProductsQuery();
  const [value, setValue] = useState<string[]>([]);
  const dispatchCampaign = useCampaignDispatch();
  const products = useMemo(
    () =>
      data?.data?.map((p) => ({
        ...p,
        value: String(p.productId),
        label: p.title,
        avatar: p.images?.[0]?.src,
      })) || [],
    [data],
  );

  useEffect(() => {
    dispatchCampaign({ product: products.filter((p) => value.includes(p.value)) });
  }, [value]);

  return (
    <Stack className='p-4 bg-[#F5FBEE] rounded-xl' gap={32}>
      <Group gap={12}>
        <FiSalla size={22} />
        <p className='text-gray-900 font-semibold'>Salla Products</p>
      </Group>
      <MultiSelect
        disabled={isLoading}
        searchable
        autoComplete='on'
        label='Products'
        data={products}
        value={value}
        rightSection={isLoading ? <Loader size={16} /> : null}
        onChange={setValue}
        placeholder='Select products'
        renderOption={(option: { option: TOption }) => (
          <Group gap={12} wrap='nowrap'>
            <div>
              <Avatar src={option.option.avatar} size={32} />
            </div>

            <Stack gap={0}>
              <p className='text-gray-900 font-semibold'>{option.option.label}</p>
              <p className='text-gray-600 text-sm truncate'>{option.option.description}</p>
            </Stack>
          </Group>
        )}
      />
    </Stack>
  );
};
