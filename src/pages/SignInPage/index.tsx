import { Image } from '@nabiq-ui';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import { useTranslation } from 'react-i18next';
import SignInImage from 'src/assets/login/login.png';
import { SignInForm } from 'src/components/modules/sign-in';

const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderTitle>{t('page_title.signin_title')}</HeaderTitle>

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
