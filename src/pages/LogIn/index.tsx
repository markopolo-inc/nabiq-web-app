import { HeaderTitle } from 'layouts';
import LogInFooter from 'src/components/Features/LogIn/LogInFooter';
import LogInForm from 'src/components/Features/LogIn/LogInForm';
import LogoComponent from 'src/components/Features/Onboarding/LogoComponent';

const LogIn = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Login</HeaderTitle>

      <div className='flex min-h-full flex-1 flex-col justify-center py-36 sm:py-28 px-6'>
        <LogoComponent />

        <div className='my-12 sm:mx-auto sm:w-full sm:max-w-sm'>
          <LogInForm />
        </div>

        <LogInFooter />
      </div>
    </>
  );
};

export default LogIn;
