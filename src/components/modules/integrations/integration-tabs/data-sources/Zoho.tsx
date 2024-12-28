import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';
import { useGetZohoRegionsQuery } from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

export const Zoho = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);

  const { data: _regions } = useGetZohoRegionsQuery();

  return (
    <IntegrationCard
      title='Zoho'
      isConnected={false}
      description='Streamline your sales process and boost productivity with Zoho CRM’s intuitive and customizable platform.'
      icon={<GatewayLogo app='zoho' width={32} />}
    >
      <Button
        className='!w-36'
        leadingIcon={<FiZap fill='white' size={22} />}
        onClick={async () => {
          window.location.href = await getOAuthUrl('/zoho/oauth', {
            brandId,
            redirectUri: window.location.href,
          });
        }}
      >
        Integrate
      </Button>
    </IntegrationCard>
  );
};
