import { Stack } from '@nabiq-ui';
import { WhatsAppConnect } from 'src/components/modules/campaigns/components/WhatsappCampaigns/ProductStep/WhatsAppConnect';

export const ProductStep = () => {
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={24} align='center' className='max-w-[552px]'>
        <WhatsAppConnect />
      </Stack>
    </Stack>
  );
};
