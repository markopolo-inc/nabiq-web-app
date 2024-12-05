import Cookies from 'js-cookie';

export const getShopifyCookies = () => {
  const nbqsSessionId = Cookies.get('nbqs_session_id') || null;
  const shop = Cookies.get('shopify_shop') || null;
  return { nbqsSessionId, shop };
};

export const clearShopifyCookies = () => {
  Cookies.remove('nbqs_session_id');
  Cookies.remove('shopify_shop');
};
