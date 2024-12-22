import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import SignInImage from 'src/assets/login/login.png';
import { SignInForm } from 'src/components/modules/sign-in';

const SignInPage = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Sign in</HeaderTitle>

      <OnboardingLayout
        rightSection={<Image src={SignInImage} alt='Signup' />}
        rightSectionClassName='!justify-center'
      >
        <SignInForm />
      </OnboardingLayout>
    </>
  );
};

export default SignInPage;
