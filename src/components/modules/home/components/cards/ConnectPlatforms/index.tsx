import { ArrowNarrowUpRight, FiHexagon01, FiPlatformIcon } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { useAppSelector } from 'src/store/hooks';

type ConnectedMarktagPropsTypes = {
  onShowPlatform: () => void;
};

export const ConnectPlatforms = ({ onShowPlatform }: ConnectedMarktagPropsTypes) => {
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
    <div className='bg-white rounded-xl p-8 shadow-lg flex flex-row gap-4 items-start min-h-[250px]'>
      <div>
        <FiHexagon01 size={32} color='#15B79E' fill='#15B79E' />
      </div>
      <div className='flex gap-3 flex-col justify-between h-full'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>Connect platforms</p>
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
            onClick={onShowPlatform}
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
      </div>
    </div>
  );
};
