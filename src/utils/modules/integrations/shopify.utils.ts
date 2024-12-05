import { Cookies } from 'react-cookie';

export const getShopifyCookies = () => {
  const cookies = new Cookies();
  const installationInit = cookies.get('shopify_installation') || false;
  const shop = cookies.get('shopify_shop') || null;
  const nbqsSessionId = cookies.get('nbqs_session_id') || null;
  return { installationInit, shop, nbqsSessionId, cookies: cookies.get('_dd_s') };
};

export const clearShopifyCookies = () => {
  const cookies = new Cookies();
  cookies.remove('shopify_installation');
  cookies.remove('shopify_shop');
  cookies.remove('shopify_installation.sig');
  cookies.remove('shopify_shop.sig');
  cookies.remove('nbqs_session_id');
};
