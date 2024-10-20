import { Button, Grid, Group, Stack, Text, useGetColors } from '@nabiq-ui';
import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

// import { getCodes } from 'src/lib/marktag/getCodes';
import CodeInstructionModal from '../CodeInstructionModal';
import MarktagCodeSnippetAlert from './utils/MarktagCodeSnippetAlert';
import ShopifyMarktagInstallButton from './utils/ShopifyInstallButton';
import WoocommerceMarktagInstallButton from './utils/WoocommerceInstallButton';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Code = ({ setOpened }) => {
  const { gray500, gray900 } = useGetColors();
  const { domainData, setLoading, setDomainData, loading } =
    useContext<MarktagContextType>(MarkTagContext);

  return (
    <Stack>
      <Group justify='space-between'>
        <Stack gap={2}>
          <Text color={gray900} size='18px' weight={600}>
            Code snippet
          </Text>
          <Text color={gray500} size='16px'>
            Add this code snippet to your website's head section
          </Text>
        </Stack>
        <CodeInstructionModal />
      </Group>
      <MarktagCodeSnippetAlert isVisible={!domainData?.isShopify && !domainData?.isWoocommerce} />
      <div style={{ marginTop: 20 }}>
        <Text color='#0B4FFF' size='18px' weight={400} style={{ whiteSpace: 'pre-wrap' }}>
          {/* <Prism language='javascript' style={{ width: '100%' }}>
            {getCodes({
              platform: 'facebook',
              link: domainData?.records?.[0]?.name,
              isShopify: domainData?.isShopify,
            })}
          </Prism> */}
        </Text>
      </div>
      {(domainData?.isShopify || domainData.isWoocommerce) && (
        <Grid>
          {domainData?.isShopify && (
            <Grid.Col span={6}>
              <ShopifyMarktagInstallButton
                fullWidth
                setLoading={setLoading}
                markTagId={domainData.markTagId}
                domainData={domainData}
                setDomainData={setDomainData}
                loading={loading}
              />
            </Grid.Col>
          )}
          {domainData?.isWoocommerce && (
            <Grid.Col span={6}>
              <WoocommerceMarktagInstallButton
                fullWidth
                setLoading={setLoading}
                markTagId={domainData.markTagId}
                domainData={domainData}
                setDomainData={setDomainData}
                loading={loading}
              />
            </Grid.Col>
          )}
          <Grid.Col span={6}>
            <Button
              size='sm'
              fullWidth
              variant='primary'
              //  onClick={() => push(`/marktag/dashboard?markTagId=${domainData?.markTagId}`)}
            >
              Skip for now
            </Button>
          </Grid.Col>
        </Grid>
      )}
      {!(domainData?.isWoocommerce || domainData?.isShopify) && (
        <Stack>
          <Button
            fullWidth
            variant='secondary'
            // onClick={() => push(`/marktag/dashboard?markTagId=${domainData?.markTagId}`)}
          >
            Finish setup
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default Code;
