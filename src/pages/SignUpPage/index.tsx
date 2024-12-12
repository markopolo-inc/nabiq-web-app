import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import SignUpImage from 'src/assets/onboarding/sign-up-image.png.png';
import { SignUpForm } from 'src/components/modules/sign-up';

const SignUp = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Signup</HeaderTitle>

      <OnboardingLayout rightSection={<Image src={SignUpImage} alt='Signup' />}>
        <SignUpForm />
      </OnboardingLayout>
    </>
  );
};

export default SignUp;
