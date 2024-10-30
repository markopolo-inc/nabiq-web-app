import { PageLoader } from '@nabiq-ui';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout, NavigationLayout, PrivateLayout } from 'src/layouts';

const Home = lazy(() => import('pages/Home'));
const SignUp = lazy(() => import('pages/SignUp'));
const LogIn = lazy(() => import('pages/LogIn'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const VerifyEmail = lazy(() => import('pages/VerifyEmail'));
const Onboarding = lazy(() => import('pages/Onboarding'));
const IntegrationsPage = lazy(() => import('pages/IntegrationsPage'));
const Campaigns = lazy(() => import('pages/Campaigns'));
const CreateCampaign = lazy(() => import('src/pages/CreateCampaignConfiguration'));
const Settings = lazy(() => import('pages/Settings'));
// const Monitoring = lazy(() => import('pages/Monitoring'));
const TopPerformingCampaigns = lazy(() => import('pages/TopPerformingCampaigns'));
const TopPerformingCampaignDetails = lazy(() => import('src/pages/TopPerformingCampaignDetails'));
const TopPerformingCampaingBreakDown = lazy(
  () => import('src/pages/TopPerformingCampaingBreakDown'),
);
const NonPerformingCampaigns = lazy(() => import('src/pages/NonPerformingCampaigns'));
const ControlRoom = lazy(() => import('pages/ControlRoomPage'));
const ContentSamples = lazy(() => import('pages/ControlRoomPage/ContentSamples'));
// const ControlRoomCohort = lazy(() => import('src/pages/ControlRoomPage/Cohort'));
// const ControlRoomContent = lazy(() => import('src/pages/ControlRoomPage/Cohort/Content'));
// const ControlRoomPublished = lazy(() => import('src/pages/ControlRoomPage/PublishedContent'));
const ConnectMarktag = lazy(() => import('src/pages/ConnetMarktag'));
const ConnectCampaignPlatforms = lazy(() => import('src/pages/ConnectCampaignPlatforms'));
// const Test = lazy(() => import('src/pages/Test'));
// const TestButton = lazy(() => import('src/pages/TestButton'));
const TestCheckbox = lazy(() => import('src/pages/TestCheckbox'));

const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<PrivateLayout />}>
            <Route path='/' element={<NavigationLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/integrations' element={<IntegrationsPage />} />
              <Route path='/campaigns' element={<Campaigns />} />
              <Route path='/control-room' element={<ControlRoom />} />
              <Route path='/control-room/content-samples' element={<ContentSamples />} />
              {/*<Route path='/control-room/cohort/:configId' element={<ControlRoomCohort />} />*/}
              {/*<Route*/}
              {/*  path='/control-room/cohort/content/:configId'*/}
              {/*  element={<ControlRoomContent />}*/}
              {/*/>*/}
              {/*<Route path='/control-room/published/:configId' element={<ControlRoomPublished />} />*/}
              {/* <Route path='/monitoring' element={<Monitoring />} /> */}
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
              <Route path='/settings' element={<Settings />} />
              <Route path='/campaigns/campaign-configuration' element={<CreateCampaign />} />
            </Route>
            <Route path='/onboarding' element={<Onboarding />} />
            <Route path='/connect-marktag' element={<ConnectMarktag />} />
            <Route path='/connect-platforms' element={<ConnectCampaignPlatforms />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/reset-pass' element={<ResetPassword />} />
          <Route path='/verify' element={<VerifyEmail />} />
          {/* <Route path='/test' element={<Test />} />
          <Route path='/test/btn' element={<TestButton />} /> */}
          <Route path='/test/checkbox' element={<TestCheckbox />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
