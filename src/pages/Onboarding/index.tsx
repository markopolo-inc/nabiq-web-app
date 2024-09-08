import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingForm from 'src/components/Features/Onboarding/OnboardingForm';
import OnboardingSidebar from 'src/components/Features/Onboarding/OnboardingSidebar';
import HeaderTitle from 'src/layouts/HeaderTitle';
import { useAppSelector } from 'src/store/hooks';

const Onboarding = () => {
  const navigate = useNavigate();
  const { resourceId: companyId } = useAppSelector((state) => state.company);

  useEffect(() => {
    if (companyId) {
      navigate('/');
    }
  }, [companyId]);

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
