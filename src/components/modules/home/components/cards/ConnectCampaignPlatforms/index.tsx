import { ArrowNarrowUpRight, FiHexagon01, FiPlatformIcon } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import { HomePageCardWrapper } from 'src/components/modules/home';
import { useAppSelector } from 'src/store/hooks';

export const ConnectCampaignPlatforms = () => {
  const navigate = useNavigate();
  const { connectedBrand } = useAppSelector((state) => state.brand);

  const platforms = [
    {
      id: 1,
      name: 'facebook',
      isConnected: connectedBrand?.connectedAccounts?.facebookAd?.id?.length,
    },
    {
      id: 2,
      name: 'google',
      isConnected: connectedBrand?.connectedAccounts?.googleAd?.id?.length,
    },
  ];

  return (
    <HomePageCardWrapper icon={<FiHexagon01 size={32} color='#15B79E' fill='#15B79E' />}>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 text-lg font-semibold'>Connect campaign platforms</p>
          <p className='text-gray-600 text-md font-medium'>Connect campaign with Markopolo.ai</p>
          <p className='text-gray-600 text-sm font-normal'>
            Connect and import data from ads you have run on facebook ads, google ads and linkedin
            ads.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <Button
          className='!w-36'
          variant='secondary'
          onClick={() => navigate('/connect-platforms')}
          trailingIcon={
            platforms.filter((item) => item.isConnected)?.length ? (
              <ArrowNarrowUpRight size={24} color='#4B5565' style={{ marginTop: 6 }} />
            ) : null
          }
        >
          {platforms.filter((item) => item.isConnected)?.length ? 'Reconfigure' : 'Connect'}
        </Button>

        <div className='flex gap-4'>
          {platforms
            .filter((item) => item.isConnected)
            .map((item) => (
              <div key={item.id}>
                <FiPlatformIcon platform={item.name} size={20} />
              </div>
            ))}
        </div>
      </div>
    </HomePageCardWrapper>
  );
};
