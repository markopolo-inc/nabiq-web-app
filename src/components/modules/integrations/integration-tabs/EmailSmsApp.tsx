import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import {
  ApiKeyModal,
  GatewayDisconnectModal,
  IntegrationCard,
} from 'components/modules/integrations/components';
import type { GatewayType, IGateway } from 'interfaces/brand.interface';
import { appOptions } from 'lib/integration.lib';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import type { TOptionTab } from 'src/interfaces/modules/integrations';
import { useAppSelector } from 'store/hooks';
import { getAuthToken } from 'utils/auth';
import { buildQueryString } from 'utils/string.utils';

export const EmailSmsApp = ({ selectedTab }: { selectedTab: TOptionTab }) => {
  const [selectedGateway, setSelectedGateway] = useState<IGateway | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { emailIntegrations, smsIntegrations } = useAppSelector((state) => state.brand);

  const handleIntegrate = async ({ gateway }: { gateway: IGateway }) => {
    const token = await getAuthToken();
    window.location.href = `${
      import.meta.env.VITE_BASE_API_URL
    }/${gateway.gateway}/oauth?${buildQueryString({
      brandId,
      token,
      redirectUri: window.location.href,
    })}`;
  };

  return (
    <>
      <ApiKeyModal gateway={selectedGateway} showModal={showModal} setShowModal={setShowModal} />
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {appOptions
          ?.filter((item) => item?.category === selectedTab)
          .map((gateway) => {
            const isGatewayConnected =
              (gateway.category === 'email' && !isEmpty(emailIntegrations?.[gateway?.gateway])) ||
              (gateway.category === 'sms' && !isEmpty(smsIntegrations?.[gateway?.gateway]));

            return (
              <IntegrationCard
                key={gateway.gateway}
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
                        handleIntegrate({ gateway });
                      }}
                    >
                      {isGatewayConnected ? 'Reconnect' : 'Integrate'}
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
                          Configure
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
                          Integrate
                        </Button>
                      )}
                    </>
                  )}

                  {isGatewayConnected && <GatewayDisconnectModal gateway={gateway} />}
                </div>
              </IntegrationCard>
            );
          })}
      </div>
    </>
  );
};
