import OnboardingForm from 'src/components/Features/Onboarding/OnboardingForm';
import OnboardingSidebar from 'src/components/Features/Onboarding/OnboardingSidebar';

const Onboarding = () => {
  return (
    <div className='min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8'>
      <OnboardingSidebar />
      <OnboardingForm />
    </div>
  );
};

export default Onboarding;
