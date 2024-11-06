import { ConnectedAccounts, IPlatform, Platform } from 'src/interfaces/brand.interface';

export const platformOptions: Platform[] = [
  {
    name: 'Facebook',
    value: 'facebook',
    headline: 'Connect your Facebook Ads account to Nabiq for seamless campaign management.',
  },
  {
    name: 'Google Ads',
    value: 'google',
    headline: 'Connect your Google Ads account to Nabiq for seamless campaign management.',
  },
];

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
