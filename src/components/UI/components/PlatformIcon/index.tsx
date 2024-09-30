import { MouseEventHandler } from 'react';

import FacebookIcon from './Facebook';
import GoogleIcon from './Google';
import GoogleAnalytics from './GoogleAnalytics';
import Linkedin from './Linkedin';
import Shopify from './Shopify';
import Tiktok from './Tiktok';
import Woocommerce from './Woocommerce';
import Wordpress from './Wordpress';
import Yahoo from './Yahoo';

const icons = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  tiktok: Tiktok,
  linkedin: Linkedin,
  google_analytics: GoogleAnalytics,
  googleAnalytics: GoogleAnalytics,
  shopify: Shopify,
  woocommerce: Woocommerce,
  wordpress: Wordpress,
  ga4: GoogleAnalytics,
  googleAds: GoogleIcon,
  yahoojp: Yahoo,
};

const PlatformIcon = ({ size = 24, platform, onClick }: PropTypes) => {
  const Icon = icons?.[platform];
  return Icon ? <Icon size={size} onClick={onClick} /> : <></>;
};

export default PlatformIcon;

interface PropTypes {
  size?: number;
  type?: 'brand' | 'gray' | 'white';
  platform: 'facebook' | 'google' | string;
  onClick?: MouseEventHandler<SVGElement>;
}
