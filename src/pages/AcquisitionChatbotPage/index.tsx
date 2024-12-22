import { FiHelpCircle } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import { IntegrateChatbot } from 'src/components/modules/acquisition-chatbot';
import { useGetAcquisitionApiKeyQuery } from 'src/store/acquisition/acquisition.ts';
import { useAppSelector } from 'src/store/hooks.ts';

const AcquisitionChatbotPage = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);

  const { data } = useGetAcquisitionApiKeyQuery(brandId);
  return (
    <>
      <Stack gap={64} align='center'>
        <Stack className='w-full items-start flex-row' justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Acquisition chatbot</p>
            <p className='text-gray-600 text-base font-normal'>
              Convert visitors into leads with the acquisition chatbot.
            </p>
          </Stack>
          <Button variant='link' leadingIcon={<FiHelpCircle size={20} />}>
            Need help integrating chatbot?
          </Button>
        </Stack>

        <IntegrateChatbot apiKey={data?.apiKey ?? 'N/A'} />
      </Stack>
    </>
  );
};

export default AcquisitionChatbotPage;
