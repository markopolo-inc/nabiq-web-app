import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePosthogParams } from 'src/hooks/modules/usePosthogParams';

export const PageViewTracker = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const posthogParams = usePosthogParams();

  useEffect(() => {
    const pathname = location.pathname;

    posthog?.capture('Website_Visit', {
      timestamp: new Date().toISOString(),
      referrer: searchParams.get('referrer') || document.referrer || 'direct',
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
    });

    switch (pathname) {
      case '/':
        posthog?.capture('Homepage_View', {
          user_id: posthogParams?.email,
          ...posthogParams,
        });
        break;
      case '/signup':
        posthog.capture('Signup_Page_Viewed', {
          referrer: searchParams.get('referrer') || document.referrer || 'direct',
          utm_source: searchParams.get('utm_source') || undefined,
          utm_medium: searchParams.get('utm_medium') || undefined,
        });
        break;
      default:
        break;
    }
  }, [location.pathname, searchParams]); // Depend only on pathname to fire only when route changes

  return null;
};
