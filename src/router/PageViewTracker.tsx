import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePosthogParams } from 'src/hooks/modules/usePosthogParams';
import { useAppSelector } from 'src/store/hooks';

export const PageViewTracker = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const posthogParams = usePosthogParams();
  const { userEmail } = useAppSelector((state) => state.user);
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  useEffect(() => {
    const pathname = location.pathname;

    posthog.identify(userEmail, { company_id: companyId });

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
      case '/monitoring':
        posthog?.capture('Monitoring_Page_Viewed', {
          user_id: posthogParams?.email,
          ...posthogParams,
        });
        break;
      case '/integrations':
        posthog?.capture('Integrations_Page_Viewed', {
          user_id: posthogParams?.email,
          ...posthogParams,
        });
        break;
      case '/campaigns':
        posthog?.capture('Campaigns_Page_Viewed', {
          user_id: posthogParams?.email,
          ...posthogParams,
        });
        break;
      case '/control-room':
        posthog?.capture('Control_Room_Page_Viewed', {
          user_id: posthogParams?.email,
          ...posthogParams,
        });
        break;

      default:
        if (pathname.includes('/control-room/content-samples/')) {
          posthog?.capture('Control_Room_Content_Samples_Page_Viewed', {
            user_id: posthogParams?.email,
            ...posthogParams,
          });
        }
        break;
    }
  }, [location.pathname, searchParams]); // Depend only on pathname to fire only when route changes

  return null;
};
