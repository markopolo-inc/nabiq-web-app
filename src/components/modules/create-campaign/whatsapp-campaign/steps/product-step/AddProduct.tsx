import { Badge, Card, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { AddProductModal } from 'src/components/modules/create-campaign/whatsapp-campaign/steps/product-step/add-product';
import { TProductSource } from 'src/interfaces/modules/campaign';

export const AddProduct = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<TProductSource | null>(null);
  return (
    <Card className='!w-full !min-h-fit !p-6'>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-gray-900 text-lg font-semibold'>2. Add your product</p>
          <Badge color='gray'>Recommended</Badge>
        </Group>

        <p className='text-gray-600 text-sm'>
          Upload products from your website, Shopify, or Salla stores so Nabiq can promote them
          while chatting with customers.
        </p>
      </Stack>
      <AddProductModal
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
    </Card>
  );
};
