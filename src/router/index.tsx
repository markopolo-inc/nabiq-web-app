import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "src/layouts/ScrollToTop";
import AppLayout from "src/layouts/AppLayout";
import PrivateLayout from "src/layouts/PrivateLayout";
import NavigationLayout from "src/layouts/NavigationLayout";
import PageLoader from "src/components/UI/PageLoader";
import CreateCampaign from "src/pages/CreateCampaign";

const Home = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));
const LogIn = lazy(() => import("pages/LogIn"));
const ResetPassword = lazy(() => import("pages/ResetPassword"));
const VerifyEmail = lazy(() => import("pages/VerifyEmail"));
const Onboarding = lazy(() => import("pages/Onboarding"));
const Integrations = lazy(() => import("pages/Integrations"));
const Campaigns = lazy(() => import("pages/Campaigns"));
const Test = lazy(() => import("src/pages/Test"));

const Router = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<PrivateLayout />}>
              <Route path="/" element={<NavigationLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/create-campaign" element={<CreateCampaign />} />
              </Route>
              <Route path="/onboarding" element={<Onboarding />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default Router;
