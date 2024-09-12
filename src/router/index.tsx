import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from 'src/components/UI/PageLoader';
import AppLayout from 'src/layouts/AppLayout';
import NavigationLayout from 'src/layouts/NavigationLayout';
import PrivateLayout from 'src/layouts/PrivateLayout';
import ScrollToTop from 'src/layouts/ScrollToTop';
import ConnectMarktag from 'src/pages/ConnetMarktag';
import CreateCampaign from 'src/pages/CreateCampaignConfiguration';

const Home = lazy(() => import('pages/Home'));
const SignUp = lazy(() => import('pages/SignUp'));
const LogIn = lazy(() => import('pages/LogIn'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const VerifyEmail = lazy(() => import('pages/VerifyEmail'));
const Onboarding = lazy(() => import('pages/Onboarding'));
const Integrations = lazy(() => import('pages/Integrations'));
const Campaigns = lazy(() => import('pages/Campaigns'));
const Settings = lazy(() => import('pages/Settings'));
const Monitoring = lazy(() => import('pages/Monitoring'));
const TopPerformingCampaigns = lazy(() => import('pages/TopPerformingCampaigns'));
const TopPerformingCampaignDetails = lazy(() => import('src/pages/TopPerformingCampaignDetails'));
const ControlRoom = lazy(() => import('pages/ControlRoom'));
const ControlRoomCohort = lazy(() => import('pages/ControlRoom/Cohort'));
const ControlRoomContent = lazy(() => import('pages/ControlRoom/Cohort/Content'));
const ControlRoomPublished = lazy(() => import('src/pages/ControlRoom/PublishedContent'));
const Test = lazy(() => import('src/pages/Test'));

const Router = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='/' element={<NavigationLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/integrations' element={<Integrations />} />
                <Route path='/campaigns' element={<Campaigns />} />
                <Route path='/control-room' element={<ControlRoom />} />
                <Route path='/control-room/cohort/:configId' element={<ControlRoomCohort />} />
                <Route
                  path='/control-room/cohort/content/:configId'
                  element={<ControlRoomContent />}
                />
                <Route
                  path='/control-room/published/:configId'
                  element={<ControlRoomPublished />}
                />
                <Route path='/monitoring' element={<Monitoring />} />
                <Route
                  path='/monitoring/top-performing-campaigns'
                  element={<TopPerformingCampaigns />}
                />
                <Route
                  path='/monitoring/top-performing-campaigns/:name/:campaignId'
                  element={<TopPerformingCampaignDetails />}
                />
                <Route path='/settings' element={<Settings />} />
                <Route path='/campaigns/campaign-configuration' element={<CreateCampaign />} />
              </Route>
              <Route path='/onboarding' element={<Onboarding />} />
              <Route path='/connect-marktag' element={<ConnectMarktag />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/reset-pass' element={<ResetPassword />} />
            <Route path='/verify' element={<VerifyEmail />} />
            <Route path='/test' element={<Test />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default Router;
