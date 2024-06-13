import OnboardingForm from 'src/components/Features/Onboarding/OnboardingForm';
import OnboardingSidebar from 'src/components/Features/Onboarding/OnboardingSidebar';
import HeaderTitle from 'src/layouts/HeaderTitle';

const Onboarding = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Onboarding</HeaderTitle>

      <div className='min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <OnboardingSidebar />
        <OnboardingForm />
      </div>
    </>
  );
};

export default Onboarding;
