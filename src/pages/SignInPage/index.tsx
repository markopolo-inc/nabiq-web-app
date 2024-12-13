import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import SignUpImage from 'src/assets/onboarding/sign-up-image.png.png';

const SignInPage = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Signin</HeaderTitle>

      <OnboardingLayout rightSection={<Image src={SignUpImage} alt='Signup' />}>
        hello
      </OnboardingLayout>
    </>
  );
};

export default SignInPage;
