import { ConnectedAccounts, IPlatform } from 'src/interfaces/brand.interface';

export const getPlatformConnectionStatus = (connectedAccounts?: ConnectedAccounts): IPlatform[] => {
  return [
    {
      id: 1,
      gateway: 'facebook',
      name: 'Facebook',
      isConnected: Boolean(connectedAccounts?.facebookAd?.id?.length),
    },
    {
      id: 2,
      gateway: 'google',
      name: 'Google ads',
      isConnected: Boolean(connectedAccounts?.googleAd?.id?.length),
    },
  ];
};
