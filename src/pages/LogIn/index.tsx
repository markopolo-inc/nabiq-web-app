import LogoComponent from 'src/components/Features/Onboarding/LogoComponent';
import LogInFooter from 'src/components/Features/LogIn/LogInFooter';
import LogInForm from 'src/components/Features/LogIn/LogInForm';

const LogIn = () => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center py-36 sm:py-28 px-6'>
      <LogoComponent />

      <div className='my-12 sm:mx-auto sm:w-full sm:max-w-sm'>
        <LogInForm />
      </div>

      <LogInFooter />
    </div>
  );
};

export default LogIn;
