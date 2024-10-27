import SignUpForm from 'components/Features/SignUp/SignUpForm';
import { HeaderTitle } from 'layouts';
import LogoComponent from 'src/components/Features/Onboarding/LogoComponent';
import SignUpFooter from 'src/components/Features/SignUp/SignUpFooter';

const SignUp = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Signup</HeaderTitle>

      <div className='flex min-h-full flex-1 flex-col justify-center py-36 sm:py-28 px-6'>
        <LogoComponent />

        <div className='my-12 sm:mx-auto sm:w-full sm:max-w-sm'>
          <SignUpForm />
        </div>

        <SignUpFooter />
      </div>
    </>
  );
};

export default SignUp;
