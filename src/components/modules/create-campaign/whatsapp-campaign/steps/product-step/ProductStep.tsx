import { Stack } from '@nabiq-ui';
import {
  AddProduct,
  WhatsAppConnect,
} from 'src/components/modules/create-campaign/whatsapp-campaign/steps/product-step';

export const ProductStep = () => {
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={24} align='center' className='max-w-[552px]'>
        <WhatsAppConnect />
        <AddProduct />
      </Stack>
    </Stack>
  );
};
