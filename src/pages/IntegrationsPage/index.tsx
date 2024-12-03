import { FiZap } from '@nabiq-icons';
import { Badge, Button, GatewayLogo, OptionTabs } from '@nabiq-ui';
import { ApiKeyModal, DataSources, GatewayDisconnectModal } from 'components/modules/integrations';
import type { GatewayType, IGateway } from 'interfaces/brand.interface';
import { HeaderTitle } from 'layouts';
import { appCategories, appOptions } from 'lib/integration.lib';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { Whatsapp } from 'src/components/modules/integrations/components/Whatsapp';
import type { TOptionTab } from 'src/interfaces/modules/integrations';
import { useAppSelector } from 'store/hooks';
import { getAuthToken } from 'utils/auth';
import { buildQueryString } from 'utils/string.utils';

const IntegrationsPage = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [selectedTab, setSelectedTab] = useState<TOptionTab>('data-sources');
  const [selectedGateway, setSelectedGateway] = useState<IGateway | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
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

      <HeaderTitle>Nabiq - Integrations</HeaderTitle>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Integrations</p>
          <p className='text-gray-600 font-normal text-lg'>
            Integrate email, sms and push notification apps to build custom marketing funnels.
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <OptionTabs
            setActive={setSelectedTab}
            active={selectedTab}
            options={appCategories?.map((item) => ({
              ...item,
              label: (
                <div className='flex gap-2 items-center'>
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </div>
              ),
            }))}
          />
          {['email', 'sms'].includes(selectedTab) && (
            <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
              {appOptions
                ?.filter((item) => item?.category === selectedTab)
                .map((gateway) => {
                  const isGatewayConnected =
                    (gateway.category === 'email' &&
                      !isEmpty(emailIntegrations?.[gateway?.gateway])) ||
                    (gateway.category === 'sms' && !isEmpty(smsIntegrations?.[gateway?.gateway]));

                  return (
                    <div
                      className='rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8'
                      key={gateway.gateway}
                    >
                      <div>
                        <div className='flex gap-6 justify-between items-center'>
                          <div className='flex items-center gap-3'>
                            <GatewayLogo app={gateway.gateway as GatewayType} width={32} />
                            <p className='text-gray-900 font-semibold text-lg'>{gateway.name}</p>
                          </div>
                          {isGatewayConnected && (
                            <Badge variant='outline' color='success'>
                              Connected
                            </Badge>
                          )}
                        </div>

                        <p className='mt-6 text-gray-600 font-normal text-sm'>{gateway.headline}</p>
                      </div>
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
                    </div>
                  );
                })}
            </div>
          )}
          {selectedTab === 'data-sources' && <DataSources />}
          {selectedTab === 'whatsapp' && <Whatsapp />}
        </div>
      </div>
    </>
  );
};

export default IntegrationsPage;
