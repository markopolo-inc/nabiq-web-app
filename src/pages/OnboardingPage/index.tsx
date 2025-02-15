import { Topbar } from '@nabiq-ui';
import {
  CompanyCreation,
  GuideNabiq,
  LeadsDatabase,
  RightSection,
  SampleContents,
} from 'components/modules/onboarding';
import { motion } from 'framer-motion';
import { HeaderTitle, OnboardingLayout } from 'layouts';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Onboarding = () => {
  const { t } = useTranslation();
  const { resourceId: companyId } = useAppSelector((state) => state.company);
  const { step } = useAppSelector((state) => state.onboarding);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companyId) {
      dispatch(setOnboardingStep('guide_nabiq'));
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
      <HeaderTitle>{t('page_title.create_company_title')}</HeaderTitle>
      <Topbar />
      <OnboardingLayout
        rightSection={<RightSection />}
        rightSectionClassName={righSectionClasss[step]}
      >
        {(() => {
          switch (step) {
            case 'company_creation':
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CompanyCreation />
                </motion.div>
              );
            case 'lead_database':
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LeadsDatabase />
                </motion.div>
              );
            case 'guide_nabiq':
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GuideNabiq />
                </motion.div>
              );
            case 'sample_content':
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SampleContents />
                </motion.div>
              );
            default:
              return null;
          }
        })()}
      </OnboardingLayout>
    </>
  );
};

export default Onboarding;
