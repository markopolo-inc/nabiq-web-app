import { MouseEventHandler } from 'react';

import Amazon from './Amazon';
import AmazonGray from './Amazon/gray';
import AmazonWhite from './Amazon/white';
import FacebookIcon from './Facebook';
import FacebookGray from './Facebook/gray';
import FacebookWhite from './Facebook/white';
import GoogleIcon from './Google';
import GoogleGray from './Google/gray';
import GoogleWhite from './Google/white';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleAnalyticsGray from './GoogleAnalytics/gray';
import GoogleAnalyticsWhite from './GoogleAnalytics/white';
import Hubspot from './Hubspot';
import HubspotGray from './Hubspot/gray';
import HubspotWhite from './Hubspot/white';
import Instagram from './Instagram';
import InstagramGray from './Instagram/gray';
import InstagramWhite from './Instagram/white';
import Linkedin from './Linkedin';
import LinkedinGray from './Linkedin/gray';
import LinkedinWhite from './Linkedin/white';
import Shopify from './Shopify';
import ShopifyGray from './Shopify/gray';
import ShopifyWhite from './Shopify/white';
import Tiktok from './Tiktok';
import TiktokGray from './Tiktok/gray';
import TiktokWhite from './Tiktok/white';
import Webhook from './Webhook';
import WebhookGray from './Webhook/gray';
import WebhookWhite from './Webhook/white';
import Woocommerce from './Woocommerce';
import WoocommerceGray from './Woocommerce/gray';
import WoocommerceWhite from './Woocommerce/white';
import Wordpress from './Wordpress';
import WordpressGray from './Wordpress/gray';
import WordpressWhite from './Wordpress/white';
import Yahoo from './Yahoo';

const icons = {
  brand: {
    amazon: Amazon,
    facebook: FacebookIcon,
    google: GoogleIcon,
    instagram: Instagram,
    tiktok: Tiktok,
    linkedin: Linkedin,
    google_analytics: GoogleAnalytics,
    googleAnalytics: GoogleAnalytics,
    shopify: Shopify,
    woocommerce: Woocommerce,
    hubspot: Hubspot,
    webhook: Webhook,
    wordpress: Wordpress,
    ga4: GoogleAnalytics,
    googleAds: GoogleIcon,
    yahoojp: Yahoo,
  },
  gray: {
    amazon: AmazonGray,
    facebook: FacebookGray,
    google: GoogleGray,
    instagram: InstagramGray,
    tiktok: TiktokGray,
    linkedin: LinkedinGray,
    google_analytics: GoogleAnalyticsGray,
    googleAnalytics: GoogleAnalyticsGray,
    shopify: ShopifyGray,
    woocommerce: WoocommerceGray,
    hubspot: HubspotGray,
    webhook: WebhookGray,
    wordpress: WordpressGray,
    ga4: GoogleAnalyticsGray,
    googleAds: GoogleGray,
  },
  white: {
    amazon: AmazonWhite,
    facebook: FacebookWhite,
    google: GoogleWhite,
    instagram: InstagramWhite,
    tiktok: TiktokWhite,
    linkedin: LinkedinWhite,
    google_analytics: GoogleAnalyticsWhite,
    googleAnalytics: GoogleAnalyticsWhite,
    shopify: ShopifyWhite,
    woocommerce: WoocommerceWhite,
    hubspot: HubspotWhite,
    webhook: WebhookWhite,
    wordpress: WordpressWhite,
    ga4: GoogleAnalyticsWhite,
    googleAds: GoogleWhite,
  },
};

const PlatformIcon = ({ size = 24, type = 'brand', platform, onClick }: PropTypes) => {
  const Icon = icons?.[type]?.[platform];
  return Icon ? <Icon size={size} onClick={onClick} /> : <></>;
};

export default PlatformIcon;

interface PropTypes {
  size?: number;
  type?: 'brand' | 'gray' | 'white';
  platform: 'facebook' | 'google' | string;
  onClick?: MouseEventHandler<SVGElement>;
}
