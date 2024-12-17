import { PageLoader } from '@nabiq-ui';
import SignInPage from 'pages/SignInPage';
import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AppLayout, NavigationLayout, PrivateLayout } from 'src/layouts';
import SignUpPage from 'src/pages/SignUpPage';

const Home = lazy(() => import('pages/Home'));
const CampaignsListPage = lazy(() => import('pages/CampaignsListPage'));
const CampaignDetails = lazy(() => import('pages/CampaignDetails'));
const CampaignReport = lazy(() => import('pages/CampaignReport'));
const CreateCampaign = lazy(() => import('src/pages/CreateCampaignPage'));
const Monitoring = lazy(() => import('pages/Monitoring'));
const TopPerformingCampaigns = lazy(() => import('pages/TopPerformingCampaigns'));
const TopPerformingCampaignDetails = lazy(() => import('src/pages/TopPerformingCampaignDetails'));
const TopPerformingCampaingBreakDown = lazy(
  () => import('src/pages/TopPerformingCampaingBreakDown'),
);
const NonPerformingCampaigns = lazy(() => import('src/pages/NonPerformingCampaigns'));
const IntegrationsPage = lazy(() => import('pages/IntegrationsPage'));
const ControlRoom = lazy(() => import('pages/ControlRoomPage'));
const ContentSamples = lazy(() => import('pages/ControlRoomPage/ContentSamples'));
const Settings = lazy(() => import('pages/Settings'));
const ConnectMarktag = lazy(() => import('src/pages/ConnetMarktag'));

// const SignUpPage = lazy(() => import('src/pages/SignUpPage'));
// const SignInPage = lazy(() => import('pages/SignInPage'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const OnboardingPage = lazy(() => import('src/pages/OnboardingPage'));

const Test = lazy(() => import('src/pages/Test'));
const TestButton = lazy(() => import('src/pages/TestButton'));
const TestCheckbox = lazy(() => import('src/pages/TestCheckbox'));
const TestInputs = lazy(() => import('src/pages/TestInputs'));
const TestTextarea = lazy(() => import('src/pages/TestTextarea'));

const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<PrivateLayout />}>
            <Route path='/' element={<NavigationLayout />}>
              <Route path='/' element={<Home />} />

              {/* Campaigns */}
              <Route path='/campaigns' element={<CampaignsListPage />} />
              <Route path='/campaigns/details/:campaignId' element={<CampaignDetails />} />
              <Route path='/campaigns/report/:campaignId' element={<CampaignReport />} />
              <Route path='/campaigns/create-campaign' element={<CreateCampaign />} />

              {/* Monitoring */}
              <Route path='/monitoring' element={<Monitoring />} />
              <Route
                path='/monitoring/top-performing-campaigns'
                element={<TopPerformingCampaigns />}
              />
              <Route
                path='/monitoring/top-performing-campaigns/:name/:campaignId'
                element={<TopPerformingCampaignDetails />}
              />
              <Route
                path='/monitoring/:name/breakdown/:campaignId'
                element={<TopPerformingCampaingBreakDown />}
              />
              <Route
                path='/monitoring/non-performing-campaigns'
                element={<NonPerformingCampaigns />}
              />

              {/* Integrations */}
              <Route path='/integrations' element={<IntegrationsPage />} />

              {/* Control room */}
              <Route path='/control-room' element={<ControlRoom />} />
              <Route path='/control-room/content-samples/:configId' element={<ContentSamples />} />

              {/* Settings */}
              <Route path='/settings' element={<Settings />} />
            </Route>
            <Route path='/onboarding' element={<OnboardingPage />} />
            <Route path='/connect-marktag' element={<ConnectMarktag />} />
          </Route>

          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/reset-pass' element={<ResetPassword />} />

          <Route path='/test' element={<Outlet />}>
            <Route path='/test' element={<Test />} />
            <Route path='btn' element={<TestButton />} />
            <Route path='checkbox' element={<TestCheckbox />} />
            <Route path='inputs' element={<TestInputs />} />
            <Route path='textarea' element={<TestTextarea />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
