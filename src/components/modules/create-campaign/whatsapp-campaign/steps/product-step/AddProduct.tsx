import { Badge, Card, Group, Stack } from '@nabiq-ui';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AddProductModal,
  SallaProducts,
  ShopifyProducts,
} from 'src/components/modules/create-campaign/whatsapp-campaign/steps/product-step/add-product';
import { useCampaignDispatch, useCampaignSelector } from 'src/store/hooks';

export const AddProduct = () => {
  const { t } = useTranslation();
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
          <p className='text-gray-900 text-lg font-semibold'>
            2. {t('create_campaign.add_product')}
          </p>
          <Badge color='gray'>{t('create_campaign.recommended')}</Badge>
        </Group>

        {!campaign?.productSource ? (
          <p className='text-gray-600 text-sm'>{t('create_campaign.upload_products')}</p>
        ) : (
          <p className='text-gray-600 text-sm'>{t('create_campaign.choose_inventory')}</p>
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
