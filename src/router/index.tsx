import { Image } from '@nabiq-ui';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'src/layouts/ScrollToTop';
import LoaderGif from 'src/assets/loader/loading.gif';

const Home = lazy(() => import('src/pages/Home'));
const SignUp = lazy(() => import('src/pages/SignUp'));
const LogIn = lazy(() => import('src/pages/LogIn'));
const ResetPassword = lazy(() => import('src/pages/ResetPassword'));
const VerifyEmail = lazy(() => import('src/pages/VerifyEmail'));
const Onboarding = lazy(() => import('src/pages/Onboarding'));
const Test = lazy(() => import('src/pages/Test'));

const Router = () => {
  return (
    <ScrollToTop>
      <Suspense
        fallback={
          <div className='flex items-center justify-center min-h-screen'>
            <Image src={LoaderGif} alt='Loading...' />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/reset-pass' element={<ResetPassword />} />
          <Route path='/verify' element={<VerifyEmail />} />
          <Route path='/onboarding' element={<Onboarding />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default Router;
