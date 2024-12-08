import { Badge, Card, Group, Stack } from '@nabiq-ui';
import { useEffect } from 'react';
import {
  AddProductModal,
  SallaProducts,
  ShopifyProducts,
} from 'src/components/modules/create-campaign/whatsapp-campaign/steps/product-step/add-product';
import { useCampaignDispatch, useCampaignSelector } from 'src/store/hooks';

export const AddProduct = () => {
  const campaign = useCampaignSelector();
  const dispatchCampaign = useCampaignDispatch();
  useEffect(() => {
    dispatchCampaign({
      product: [],
    });
  }, [campaign.productSource]);
  return (
    <Card className='!w-full !min-h-fit !p-6 !justify-start !gap-6'>
      <Stack gap={24}>
        <Group justify='space-between'>
          <p className='text-gray-900 text-lg font-semibold'>2. Add your product</p>
          <Badge color='gray'>Recommended</Badge>
        </Group>

        {!campaign?.productSource ? (
          <p className='text-gray-600 text-sm'>
            Upload products from your website, Shopify, or Salla stores so Nabiq can promote them
            while chatting with customers.
          </p>
        ) : (
          <p className='text-gray-600 text-sm'>
            Choose from any of the inventories or you can opt for Nabiq to get answer from your
            website.
          </p>
        )}
      </Stack>
      {(() => {
        switch (campaign?.productSource) {
          case 'shopify':
            return <ShopifyProducts />;
          case 'salla':
            return <SallaProducts />;
          default:
            return null;
        }
      })()}
      <AddProductModal />
    </Card>
  );
};
