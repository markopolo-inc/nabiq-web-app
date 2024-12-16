import {
  CompanyCreation,
  GuideNabiq,
  LeadsDatabase,
  RightSection,
  SampleContents,
} from 'components/modules/onboarding';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Onboarding = () => {
  const navigate = useNavigate();
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  const { step } = useAppSelector((state) => state.onboarding);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (companyId) {
      navigate('/');
    }
  }, [companyId]);

  useEffect(() => {
    dispatch(setOnboardingStep('company_creation'));
  }, []);

  return (
    <>
      <HeaderTitle>Nabiq | Create your company</HeaderTitle>
      <OnboardingLayout rightSection={<RightSection />}>
        {(() => {
          switch (step) {
            case 'company_creation':
              return <CompanyCreation />;
            case 'lead_database':
              return <LeadsDatabase />;
            case 'guide_nabiq':
              return <GuideNabiq />;
            case 'sample_content':
              return <SampleContents />;
            default:
              return null;
          }
        })()}
      </OnboardingLayout>
    </>
  );
};

export default Onboarding;
