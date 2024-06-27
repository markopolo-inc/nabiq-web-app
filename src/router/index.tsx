import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "src/layouts/ScrollToTop";
import AppLayout from "src/layouts/AppLayout";
import PrivateLayout from "src/layouts/PrivateLayout";
import NavigationLayout from "src/layouts/NavigationLayout";
import PageLoader from "src/components/UI/PageLoader";

const Home = lazy(() => import("src/pages/Home"));
const SignUp = lazy(() => import("src/pages/SignUp"));
const LogIn = lazy(() => import("src/pages/LogIn"));
const ResetPassword = lazy(() => import("src/pages/ResetPassword"));
const VerifyEmail = lazy(() => import("src/pages/VerifyEmail"));
const Onboarding = lazy(() => import("src/pages/Onboarding"));
const Test = lazy(() => import("src/pages/Test"));

const Router = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<PrivateLayout />}>
              <Route path="/" element={<NavigationLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/onboarding" element={<Onboarding />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default Router;
