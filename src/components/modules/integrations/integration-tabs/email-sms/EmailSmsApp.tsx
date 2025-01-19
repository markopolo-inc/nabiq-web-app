import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import { IntegrationCard } from 'components/modules/integrations/components';
import { motion } from 'framer-motion';
import type { GatewayType, IGateway } from 'interfaces/brand.interface';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ApiKeyModal,
  GatewayDisconnectModal,
} from 'src/components/modules/integrations/integration-tabs/email-sms';
import type { TOptionTab } from 'src/interfaces/modules/integrations';
import { appOptions } from 'src/lib/integration';
import { generateUUID } from 'src/utils/string.utils';
import { useAppSelector } from 'store/hooks';
import { getOAuthUrl } from 'utils/auth';

export const EmailSmsApp = ({ selectedTab }: { selectedTab: TOptionTab }) => {
  const { t } = useTranslation();
  const [selectedGateway, setSelectedGateway] = useState<IGateway | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { emailIntegrations, smsIntegrations } = useAppSelector((state) => state.brand);

  const handleIntegrate = async (authUrl: string) => {
    window.location.href = await getOAuthUrl(authUrl, {
      brandId,
      redirectUri: window.location.href,
    });
  };

  return (
    <>
      <ApiKeyModal gateway={selectedGateway} showModal={showModal} setShowModal={setShowModal} />
      <div>
        <motion.div
          transition={{
            staggerChildren: 0.5,
          }}
          className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
        >
          {appOptions
            ?.filter((item) => item?.category === selectedTab)
            .map((gateway) => {
              const isGatewayConnected =
                (gateway.category === 'email' && !isEmpty(emailIntegrations?.[gateway?.gateway])) ||
                (gateway.category === 'sms' && !isEmpty(smsIntegrations?.[gateway?.gateway]));

              return (
                <IntegrationCard
                  key={generateUUID()}
                  title={gateway.name}
                  description={gateway.headline}
                  icon={<GatewayLogo app={gateway.gateway as GatewayType} width={32} />}
                  isConnected={isGatewayConnected}
                >
                  <div className='flex gap-3'>
                    {gateway.isOauthIntegration && (
                      <Button
                        className='!w-40'
                        leadingIcon={<FiZap fill='white' size={22} />}
                        onClick={() => {
                          handleIntegrate(gateway.oauthUrl);
                        }}
                      >
                        {isGatewayConnected
                          ? t('integrations.reconnect')
                          : t('integrations.integrate')}
                      </Button>
                    )}

                    {gateway.isKeyIntegration && (
                      <>
                        {isGatewayConnected ? (
                          <Button
                            className='!w-40'
                            variant='secondary'
                            onClick={() => {
                              setShowModal(true);
                              setSelectedGateway(gateway);
                            }}
                          >
                            {t('create_campaign.configure')}
                          </Button>
                        ) : (
                          <Button
                            className='!w-40'
                            leadingIcon={<FiZap fill='white' size={18} />}
                            onClick={() => {
                              setShowModal(true);
                              setSelectedGateway(gateway);
                            }}
                          >
                            {t('integrations.integrate')}
                          </Button>
                        )}
                      </>
                    )}

                    {isGatewayConnected && <GatewayDisconnectModal gateway={gateway} />}
                  </div>
                </IntegrationCard>
              );
            })}
        </motion.div>
      </div>
    </>
  );
};
