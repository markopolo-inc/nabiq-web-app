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
  const { resourceId: companyId, isOnboardingComplete } = useAppSelector((state) => state.company);
  const { step } = useAppSelector((state) => state.onboarding);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (companyId && isOnboardingComplete) {
      navigate('/');
    }
  }, [companyId, isOnboardingComplete]);

  useEffect(() => {
    if (companyId) {
      dispatch(setOnboardingStep('lead_database'));
    } else {
      dispatch(setOnboardingStep('company_creation'));
    }
  }, [companyId]);

  const righSectionClasss = {
    company_creation: 'justify-end',
    lead_database: 'justify-end',
    guide_nabiq: 'justify-center',
    sample_content: 'justify-center',
  };

  return (
    <>
      <HeaderTitle>Nabiq | Create your company</HeaderTitle>
      <OnboardingLayout
        rightSection={<RightSection />}
        rightSectionClassName={righSectionClasss[step]}
      >
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
