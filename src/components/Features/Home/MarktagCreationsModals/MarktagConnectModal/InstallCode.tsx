import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import { Button, Group, Stack } from '@nabiq-ui';
import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { getCodes } from 'src/lib/marktag/getCodes';

import CodeInstructionModal from '../CodeInstructionModal';

const InstallCode = ({ setOpened }) => {
  const { domainData, setStep } = useContext<MarktagContextType>(MarkTagContext);

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
              link: domainData?.records?.[0]?.name, // TODO: set a default code for client-side
              isShopify: domainData?.isShopify,
            })}
          />

          <Stack
            className={
              !(domainData?.isWoocommerce || domainData?.isShopify) ? 'ml-auto' : 'mr-auto'
            }
          >
            <Group gap={16}>
              {(domainData?.isShopify || domainData.isWoocommerce) && (
                <>
                  {/* {domainData?.isShopify && (
                    <ShopifyMarktagInstallButton
                      fullWidth
                      setLoading={setLoading}
                      markTagId={domainData.markTagId}
                      domainData={domainData}
                      setDomainData={setDomainData}
                      loading={loading}
                    />
                  )}
                  {domainData?.isWoocommerce && (
                    <WoocommerceMarktagInstallButton
                      fullWidth
                      setLoading={setLoading}
                      markTagId={domainData.markTagId}
                      domainData={domainData}
                      setDomainData={setDomainData}
                      loading={loading}
                    />
                  )} */}
                  <Button size='sm' fullWidth variant='primary' onClick={() => setOpened(false)}>
                    Skip for now
                  </Button>
                </>
              )}
              {!(domainData?.isWoocommerce || domainData?.isShopify) && (
                <>
                  <Button variant='secondary' onClick={() => setStep('choose')}>
                    Go back
                  </Button>
                  <Button variant='primary' onClick={() => setOpened(false)}>
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
