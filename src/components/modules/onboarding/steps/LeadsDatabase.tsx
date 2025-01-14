import { FiDatabase01, FiShoppingBag02 } from '@nabiq-icons';
import { Accordion, Button, GatewayLogo, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ShopifyConnectModal } from 'src/components/modules/integrations/integration-tabs/data-sources/modals/ShopifyConnectModal';
import { useAppSelector } from 'src/store/hooks';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';
import { getOAuthUrl } from 'src/utils/auth';

import { StepCount } from './StepCount';

export const LeadsDatabase = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { datasourceIntegrations, resourceId: brandId } = useAppSelector((state) => state.brand);

  const isConnected = datasourceIntegrations?.tokens
    ? Object.values(datasourceIntegrations.tokens).some(Boolean)
    : false;
  const isIntegrationConnected = (integration: 'shopify' | 'salla' | 'hubspot' | 'salesforce') => {
    return datasourceIntegrations?.tokens?.[integration] || false;
  };

  const isShopifyConnected = isIntegrationConnected('shopify');
  const isSallaConnected = isIntegrationConnected('salla');
  const isHubspotConnected = isIntegrationConnected('hubspot');
  const isSalesforceConnected = isIntegrationConnected('salesforce');

  return (
    <Stack gap={64}>
      <Stack gap={32}>
        <StepCount step={2} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>{t('onboarding.sync_leads')}</p>
          <p className='font-normal text-gray-500'>{t('onboarding.connect_crm')}</p>
        </Stack>
      </Stack>
      <Stack gap={16} className='min-w-[520px]'>
        <Accordion
          title={t('onboarding.sync_marketplace')}
          icon={<FiShoppingBag02 size={20} color='#697586' />}
        >
          <Stack gap={24}>
            <p className='text-sm text-gray-600'>{t('onboarding.team_visibility')}</p>
            <div className='grid grid-cols-2 gap-2 p-1'>
              <Button
                fullWidth
                disabled={isShopifyConnected}
                leadingIcon={<GatewayLogo app='shopify' width={20} />}
                onClick={async () => {
                  window.location.href = await getOAuthUrl(
                    '/shopify/install/direct',
                    {
                      shop: import.meta.env.VITE_SHOPIFY_APP_NAME,
                    },
                    {
                      sendToken: false,
                    },
                  );
                }}
              >
                {isShopifyConnected
                  ? t('onboarding.shopify_connected')
                  : t('onboarding.connect_shopify')}
              </Button>
              <Button
                fullWidth
                variant='secondary-black'
                leadingIcon={<GatewayLogo app='salla' width={20} variant='light' />}
                disabled={isSallaConnected}
                onClick={async () => {
                  window.location.href = await getOAuthUrl('/salla/oauth', {
                    brandId,
                    redirectUri: window.location.href,
                  });
                }}
              >
                {isSallaConnected ? t('onboarding.salla_connected') : t('onboarding.connect_salla')}
              </Button>
            </div>
          </Stack>
        </Accordion>
        <Accordion title='Sync from CRM' icon={<FiDatabase01 size={20} color='#697586' />}>
          <Stack gap={24}>
            <p className='text-sm text-gray-600'>{t('onboarding.participants_visibility')}</p>
            <div className='grid grid-cols-2 gap-2 p-1'>
              <Button
                fullWidth
                leadingIcon={<GatewayLogo app='hubspot' width={20} />}
                disabled={isHubspotConnected}
                onClick={async () => {
                  window.location.href = await getOAuthUrl('/hubspot/oauth', {
                    brandId,
                    redirectUri: window.location.href,
                  });
                }}
              >
                {isHubspotConnected
                  ? t('onboarding.hubspot_connected')
                  : t('onboarding.connect_hubspot')}
              </Button>
              <Button
                fullWidth
                variant='secondary-black'
                leadingIcon={<GatewayLogo app='salesforce' width={20} />}
                disabled={isSalesforceConnected}
                onClick={async () => {
                  window.location.href = await getOAuthUrl('/salesforce/auth/connect', {
                    brandId,
                    redirectUri: window.location.href,
                  });
                }}
              >
                {isSalesforceConnected
                  ? t('onboarding.salesforce_connected')
                  : t('onboarding.connect_salesforce')}
              </Button>
            </div>
          </Stack>
        </Accordion>
      </Stack>
      <Button
        fullWidth
        disabled={!isConnected}
        onClick={() => {
          dispatch(setOnboardingStep('guide_nabiq'));
        }}
      >
        {t('onboarding.continue')}
      </Button>
      <ShopifyConnectModal />
    </Stack>
  );
};
