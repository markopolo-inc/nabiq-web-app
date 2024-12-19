import { ContentLoader } from '@nabiq-ui';
import OnboardingPage from 'pages/OnboardingPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AppLayout, NavigationLayout, PrivateLayout } from 'src/layouts';
// Test
import Test from 'src/pages/Test';
import TestButton from 'src/pages/TestButton';
import TestCheckbox from 'src/pages/TestCheckbox';
import TestInputs from 'src/pages/TestInputs';
import TestTextarea from 'src/pages/TestTextarea';

const delayedLazy = (importFn: () => Promise<any>, delay = 1000) => {
  return lazy(() =>
    Promise.all([importFn(), new Promise((resolve) => setTimeout(resolve, delay))]).then(
      ([module]) => module,
    ),
  );
};

const Home = delayedLazy(() => import('pages/Home'));
const CampaignsListPage = delayedLazy(() => import('pages/CampaignsListPage'));
const CampaignDetails = delayedLazy(() => import('pages/CampaignDetails'));
const CampaignReport = delayedLazy(() => import('pages/CampaignReport'));
const CreateCampaign = delayedLazy(() => import('src/pages/CreateCampaignPage'));
const Monitoring = delayedLazy(() => import('pages/Monitoring'));
const TopPerformingCampaigns = delayedLazy(() => import('pages/TopPerformingCampaigns'));
const TopPerformingCampaignDetails = delayedLazy(
  () => import('src/pages/TopPerformingCampaignDetails'),
);
const TopPerformingCampaingBreakDown = delayedLazy(
  () => import('src/pages/TopPerformingCampaingBreakDown'),
);
const NonPerformingCampaigns = delayedLazy(() => import('src/pages/NonPerformingCampaigns'));
const IntegrationsPage = delayedLazy(() => import('pages/IntegrationsPage'));
const ControlRoom = delayedLazy(() => import('pages/ControlRoomPage'));
const ContentSamples = delayedLazy(() => import('pages/ControlRoomPage/ContentSamples'));
const Settings = delayedLazy(() => import('pages/Settings'));
const ConnectMarktag = delayedLazy(() => import('src/pages/ConnetMarktag'));

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
                  <Home />
                </Suspense>
              }
            />

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
                  <CampaignDetails />
                </Suspense>
              }
            />
            <Route
              path='/campaigns/report/:campaignId'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <CampaignReport />
                </Suspense>
              }
            />
            <Route
              path='/campaigns/create-campaign'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <CreateCampaign />
                </Suspense>
              }
            />

            {/* Monitoring */}
            <Route
              path='/monitoring'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <Monitoring />
                </Suspense>
              }
            />
            <Route
              path='/monitoring/top-performing-campaigns'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <TopPerformingCampaigns />
                </Suspense>
              }
            />
            <Route
              path='/monitoring/top-performing-campaigns/:name/:campaignId'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <TopPerformingCampaignDetails />
                </Suspense>
              }
            />
            <Route
              path='/monitoring/:name/breakdown/:campaignId'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <TopPerformingCampaingBreakDown />
                </Suspense>
              }
            />
            <Route
              path='/monitoring/non-performing-campaigns'
              element={
                <Suspense fallback={<ContentLoader />}>
                  <NonPerformingCampaigns />
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
                  <Settings />
                </Suspense>
              }
            />
          </Route>
        </Route>

        {process.env.NODE_ENV === 'development' && (
          <Route path='/test' element={<Outlet />}>
            <Route path='test' element={<Test />} />
            <Route path='btn' element={<TestButton />} />
            <Route path='checkbox' element={<TestCheckbox />} />
            <Route path='inputs' element={<TestInputs />} />
            <Route path='textarea' element={<TestTextarea />} />
          </Route>
        )}
        <Route path='*' element={<div>404 not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
