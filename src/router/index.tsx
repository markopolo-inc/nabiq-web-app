import { PageLoader } from '@nabiq-ui';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout, NavigationLayout, PrivateLayout } from 'src/layouts';

const Home = lazy(() => import('pages/Home'));
const Campaigns = lazy(() => import('pages/Campaigns'));
const CreateCampaign = lazy(() => import('src/pages/CreateCampaignConfiguration'));
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

const SignUp = lazy(() => import('pages/SignUp'));
const LogIn = lazy(() => import('pages/LogIn'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const VerifyEmail = lazy(() => import('pages/VerifyEmail'));
const Onboarding = lazy(() => import('pages/Onboarding'));

// const Test = lazy(() => import('src/pages/Test'));
// const TestButton = lazy(() => import('src/pages/TestButton'));
// const TestCheckbox = lazy(() => import('src/pages/TestCheckbox'));

const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<PrivateLayout />}>
            <Route path='/' element={<NavigationLayout />}>
              <Route path='/' element={<Home />} />

              {/* Campaigns */}
              <Route path='/campaigns' element={<Campaigns />} />
              <Route path='/campaigns/campaign-configuration' element={<CreateCampaign />} />

              {/* Monitoring */}
              <Route path='/monitoring' element={<TopPerformingCampaigns />} />
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
            <Route path='/onboarding' element={<Onboarding />} />
            <Route path='/connect-marktag' element={<ConnectMarktag />} />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/reset-pass' element={<ResetPassword />} />
          <Route path='/verify' element={<VerifyEmail />} />

          {/* <Route path='/test' element={<Test />} />
          <Route path='/test/btn' element={<TestButton />} /> */}
          {/*<Route path='/test/checkbox' element={<TestCheckbox />} />*/}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
