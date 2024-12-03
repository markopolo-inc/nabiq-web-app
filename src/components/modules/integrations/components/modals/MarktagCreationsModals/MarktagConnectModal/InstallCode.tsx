import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import { FileQuestion02 } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { getCodes } from 'src/lib/marktag/getCodes';
import { useConnectMarktagMutation } from 'src/store/marktag/marktagApi';

import CodeInstructionModal from '../CodeInstructionModal';
import ShopifyMarktagInstallButton from './utils/ShopifyInstallButton';
import WoocommerceMarktagInstallButton from './utils/WoocommerceInstallButton';

const InstallCode = ({ setOpened }) => {
  const { marktagType, domainData, setDomainData, setStep } =
    useContext<MarktagContextType>(MarkTagContext);
  const [connect, { isLoading }] = useConnectMarktagMutation();

  const ViewDocumentationButton = () => (
    <Button
      variant='secondary-black'
      leadingIcon={<FileQuestion02 size={18} />}
      onClick={() =>
        window.open('https://markopolo-inc.github.io/marktag-docs/web-sdk/installation', '_blank')
      }
    >
      View documentation
    </Button>
  );

  const handleFinishSetup = async () => {
    const res = await connect(domainData);
    if (res?.data?.success) {
      setOpened(false);
    }
  };

  return (
    <Stack gap={32}>
      <Group justify='space-between'>
        <Stack className='-mt-1' gap={8}>
          <p className='text-gray-900 text-[24px] font-semibold'>Install code manually</p>
          <p className='text-gray-600 text-base font-normal'>Setup everything by yourself.</p>
        </Stack>
        <CodeInstructionModal />
      </Group>
      <Stack>
        <Group className='flex-col' gap={32}>
          <CodeHighlight
            className='w-full'
            language='js'
            code={getCodes({
              platform: 'facebook',
              link:
                marktagType === 'client-side'
                  ? domainData?.hostname
                  : domainData?.records?.[0]?.name,
              isShopify: domainData?.isShopify,
              clientId: marktagType === 'client-side' ? domainData?.clientId : undefined,
            })}
          />

          <Stack
            className={
              !(domainData?.isWoocommerce || domainData?.isShopify) ? 'ml-auto' : 'mr-auto'
            }
          >
            <Group gap={16}>
              {(domainData?.isShopify || domainData?.isWoocommerce) && (
                <>
                  {domainData?.isShopify && (
                    <ShopifyMarktagInstallButton
                      markTagId={domainData?.markTagId}
                      domainData={domainData}
                      setDomainData={setDomainData}
                    />
                  )}
                  {domainData?.isWoocommerce && (
                    <WoocommerceMarktagInstallButton
                      markTagId={domainData?.markTagId}
                      domainData={domainData}
                      setDomainData={setDomainData}
                    />
                  )}
                  <ViewDocumentationButton />
                  <Button variant='tertiary-gray' onClick={() => setOpened(false)}>
                    Skip for now
                  </Button>
                </>
              )}
              {!(domainData?.isWoocommerce || domainData?.isShopify) && (
                <>
                  <Button variant='secondary' onClick={() => setStep('choose')}>
                    Go back
                  </Button>
                  <ViewDocumentationButton />
                  <Button variant='primary' loading={isLoading} onClick={handleFinishSetup}>
                    Finish setup
                  </Button>
                </>
              )}
            </Group>
          </Stack>
        </Group>
      </Stack>
    </Stack>
  );
};

export default InstallCode;
