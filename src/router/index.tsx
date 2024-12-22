import { ContentLoader } from '@nabiq-ui';
import NotFoundPage from 'pages/NotFoundPage';
import OnboardingPage from 'pages/OnboardingPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout, NavigationLayout, PageLayout, PrivateLayout } from 'src/layouts';

import { TestRoutes } from './TestRoutes';

const delayedLazy = (importFn: () => Promise<any>, delay = 1000) => {
  return lazy(() =>
    Promise.all([importFn(), new Promise((resolve) => setTimeout(resolve, delay))]).then(
      ([module]) => module,
    ),
  );
};

const HomePage = delayedLazy(() => import('pages/HomePage'));
const CampaignsListPage = delayedLazy(() => import('pages/CampaignsListPage'));
const CampaignDetailsPage = delayedLazy(() => import('src/pages/CampaignDetailsPage'));
const CampaignReportPage = delayedLazy(() => import('src/pages/CampaignReportPage'));
const CreateCampaignPage = delayedLazy(() => import('pages/CreateCampaignPage'));
const MonitoringPage = delayedLazy(() => import('pages/MonitoringPage'));
const IntegrationsPage = delayedLazy(() => import('pages/IntegrationsPage'));
const ControlRoom = delayedLazy(() => import('pages/ControlRoomPage'));
const ContentSamples = delayedLazy(() => import('pages/ControlRoomPage/ContentSamples'));
const SettingsPage = delayedLazy(() => import('src/pages/SettingsPage'));
const ConnectMarktag = delayedLazy(() => import('src/pages/ConnectMarktagPage'));

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        {/* Public Routes */}
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<SignInPage />} />

        <Route element={<PrivateLayout />}>
          {/* Onboarding Route */}
          <Route path='/onboarding' element={<OnboardingPage />} />
          <Route
            path='/connect-marktag'
            element={
              <Suspense fallback={<ContentLoader />}>
                <ConnectMarktag />
              </Suspense>
            }
          />

          {/* Main App Routes - Require Onboarding */}
          <Route path='/' element={<NavigationLayout />}>
            <Route
              path='/'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route element={<PageLayout />}>
              {/* Campaigns */}
              <Route
                path='/campaigns'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <CampaignsListPage />
                  </Suspense>
                }
              />
              <Route
                path='/campaigns/details/:campaignId'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <CampaignDetailsPage />
                  </Suspense>
                }
              />
              <Route
                path='/campaigns/report/:campaignId'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <CampaignReportPage />
                  </Suspense>
                }
              />
              <Route
                path='/campaigns/create-campaign'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <CreateCampaignPage />
                  </Suspense>
                }
              />

              {/* Monitoring */}
              <Route
                path='/monitoring'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <MonitoringPage />
                  </Suspense>
                }
              />

              {/* Integrations */}
              <Route
                path='/integrations'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <IntegrationsPage />
                  </Suspense>
                }
              />

              {/* Control room */}
              <Route
                path='/control-room'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <ControlRoom />
                  </Suspense>
                }
              />
              <Route
                path='/control-room/content-samples/:configId'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <ContentSamples />
                  </Suspense>
                }
              />

              {/* Settings */}
              <Route
                path='/settings'
                element={
                  <Suspense fallback={<ContentLoader />}>
                    <SettingsPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>

        {import.meta.env.DEV && <Route path='/test/*' element={<TestRoutes />} />}

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
