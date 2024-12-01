import { FiPlatformIcon, FiZap } from '@nabiq-icons';
import { Badge, Button, GatewayLogo, OptionTabs } from '@nabiq-ui';
import {
  AdAccountModal,
  ApiKeyModal,
  DataSources,
  GatewayDisconnectModal,
} from 'components/modules/integrations';
import type { GatewayType, IGateway } from 'interfaces/brand.interface';
import { HeaderTitle } from 'layouts';
import { appCategories, appOptions } from 'lib/integration.lib';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { Whatsapp } from 'src/components/modules/integrations/components/Whatsapp';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import { useGetLongLivedAccessTokenMutation } from 'src/store/integrations/integrations.api';
import { useAppSelector } from 'store/hooks';
import { getAuthToken } from 'utils/auth';
import { buildQueryString } from 'utils/string.utils';

const IntegrationsPage = () => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [selectedCategory, setSelectedCategory] = useState<
    'email' | 'sms' | 'push' | 'data-sources' | 'whatsapp'
  >('email');
  const [selectedGateway, setSelectedGateway] = useState<IGateway | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { emailIntegrations, smsIntegrations } = useAppSelector((state) => state.brand);
  // const [getLongLivedAccessToken] = useGetLongLivedAccessTokenMutation();

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
      <AdAccountModal gateway={selectedGateway} showPopup={showPopup} setShowPopup={setShowPopup} />

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
            setActive={setSelectedCategory}
            active={selectedCategory}
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
          {['ads', 'email', 'sms'].includes(selectedCategory) && (
            <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
              {appOptions
                ?.filter((item) => item?.category === selectedCategory)
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
                            {gateway.category === 'ads' ? (
                              <FiPlatformIcon platform={gateway.gateway as GatewayType} size={32} />
                            ) : (
                              <GatewayLogo app={gateway.gateway as GatewayType} width={32} />
                            )}
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
                        {gateway.isOauthIntegration &&
                          (gateway.gateway === 'facebook' && !isGatewayConnected ? (
                            <></>
                          ) : (
                            // <FacebookLogin
                            //   appId={import.meta.env.VITE_fb_APP_ID}
                            //   autoLoad={false}
                            //   fields='name,email,picture'
                            //   scope='public_profile,ads_management,ads_read,pages_show_list,pages_manage_ads,pages_read_engagement,read_insights,instagram_basic,business_management,leads_retrieval'
                            //   redirectUri={window.location.href}
                            //   responseType='token'
                            //   render={(renderProps) => (
                            //     <Button
                            //       className='!w-40'
                            //       leadingIcon={<FiZap fill='white' size={18} />}
                            //       onClick={renderProps.onClick}
                            //     >
                            //       Integrate
                            //     </Button>
                            //   )}
                            //   callback={async (res) => {
                            //     await getLongLivedAccessToken(res.accessToken);
                            //   }}
                            // />
                            // others oauth platforms
                            <Button
                              className='!w-40'
                              leadingIcon={<FiZap fill='white' size={22} />}
                              onClick={() => {
                                if (isGatewayConnected && gateway.category === 'ads') {
                                  setShowPopup(true);
                                  setSelectedGateway(gateway);
                                } else {
                                  handleIntegrate({ gateway });
                                }
                              }}
                            >
                              {isGatewayConnected ? 'Reconnect' : 'Integrate'}
                            </Button>
                          ))}

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
          {selectedCategory === 'data-sources' && <DataSources />}
          {selectedCategory === 'whatsapp' && <Whatsapp />}
        </div>
      </div>
    </>
  );
};

export default IntegrationsPage;
