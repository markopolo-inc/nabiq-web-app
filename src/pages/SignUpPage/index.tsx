import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SignUpImage from 'src/assets/onboarding/sign-up-image.png.png';
import { SignUpForm, VerificationForm } from 'src/components/modules/sign-up';

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    const step = searchParams.get('step');
    if (step === 'verification') {
      setIsSignedUp(true);
    }
  }, [searchParams]);

  return (
    <>
      <HeaderTitle>Nabiq | Signup</HeaderTitle>

      <OnboardingLayout rightSection={<Image src={SignUpImage} alt='Signup' />}>
        {isSignedUp ? <VerificationForm /> : <SignUpForm setIsSignedUp={setIsSignedUp} />}
      </OnboardingLayout>
    </>
  );
};

export default SignUp;
