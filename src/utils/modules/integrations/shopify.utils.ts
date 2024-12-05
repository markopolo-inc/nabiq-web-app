import Cookies from 'js-cookie';

const domain = import.meta.env.VITE_COOKIE_SHOPIFY_DOMAIN;

export const getShopifyCookies = () => {
  const installationInit =
    Cookies.get('shopify_installation', {
      domain,
      signed: true,
    }) || false;
  const shop = Cookies.get('shopify_shop', { domain, signed: true }) || null;
  const nbqsSessionId = Cookies.get('nbqs_session_id', { domain, signed: true }) || null;
  return { installationInit, shop, nbqsSessionId };
};

export const clearShopifyCookies = () => {
  Cookies.remove('shopify_installation', { domain, signed: true });
  Cookies.remove('shopify_shop', { domain, signed: true });
  Cookies.remove('shopify_installation.sig', { domain, signed: true });
  Cookies.remove('shopify_shop.sig', { domain, signed: true });
  Cookies.remove('nbqs_session_id', { domain, signed: true });
};
