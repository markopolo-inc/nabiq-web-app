import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import SignUpImage from 'src/assets/onboarding/sign-up-image.png.png';

const SignUp = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Signup</HeaderTitle>

      <OnboardingLayout rightSection={<Image src={SignUpImage} alt='Signup' />}>
        <div>hello</div>
      </OnboardingLayout>
    </>
  );
};

export default SignUp;
