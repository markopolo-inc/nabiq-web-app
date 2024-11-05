import { FiZap } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken } from 'src/utils/auth';

export const ConnectionButton = ({ platform }: { platform: string }) => {
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const redirectURI = `${window.location.origin}${window.location.pathname}`;

  const handleGetConnected = async () => {
    const token = await getAuthToken();
    const analyticsApi = 'https://api.markopolo.ai';
    const url = `${analyticsApi}/${platform}/${platform === 'ga4' ? 'auth' : 'oauth'}?brandId=${
      connectedBrand?.resourceId
    }&redirectUri=${redirectURI}&token=${token}`;
    window.location.href = url;
  };

  return (
    <div className='flex gap-3'>
      {platform === 'facebook' ? (
        <FacebookLogin
          appId={import.meta.env.VITE_fb_APP_ID}
          autoLoad={false}
          fields='name,email,picture'
          scope='public_profile,ads_management,ads_read,pages_show_list,pages_manage_ads,pages_read_engagement,read_insights,instagram_basic,business_management,leads_retrieval'
          redirectUri={redirectURI}
          responseType='token'
          render={(renderProps) => (
            <Button
              // role='button'
              // tabIndex={0}
              className='!w-40'
              leadingIcon={<FiZap fill='white' size={18} />}
              // onKeyDown={renderProps.onClick}
              onClick={renderProps.onClick}
            >
              Connect
            </Button>
          )}
          callback={(res) => {
            console.log('accessToken', res.accessToken);
          }}
        />
      ) : (
        <Button
          className='!w-40'
          leadingIcon={<FiZap fill='white' size={18} />}
          onClick={handleGetConnected}
        >
          Connect
        </Button>
      )}
    </div>
  );
};
