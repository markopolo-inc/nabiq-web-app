import { Image, Stack } from '@nabiq-ui';
import NabiqLoader from 'assets/nabiq-loader.gif';
import GuideNabiqImage from 'assets/onboarding/guide-nabiq.png';
import LeadDatabaseImage from 'assets/onboarding/leads-image.png';
import MonitoringImage from 'assets/onboarding/monitoring.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from 'src/store/hooks';

import { GeneratedContents } from './right-section/GeneratedContents';

export const RightSection = () => {
  const { step, isSampleContentLoading } = useAppSelector((state) => state.onboarding);
  return (
    <AnimatePresence>
      {(() => {
        switch (step) {
          case 'company_creation':
            return <Image src={MonitoringImage} alt='Monitoring' />;
          case 'lead_database':
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='!pt-20'
              >
                <Image src={LeadDatabaseImage} alt='Lead Database' />
              </motion.div>
            );
          case 'guide_nabiq':
            return (
              <AnimatePresence>
                <Stack align='center' gap={54}>
                  {!isSampleContentLoading ? (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      exit={{ opacity: 0 }}
                      className='!pt-20 w-[376px]'
                    >
                      <Image src={GuideNabiqImage} alt='Guide Nabiq' />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      exit={{ opacity: 0 }}
                      className='!pt-20 w-[192px]'
                    >
                      <Image src={NabiqLoader} alt='Guide Nabiq' />
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='flex flex-col gap-4 items-center'
                  >
                    <p className='text-xl font-medium text-gray-900'>
                      Generated content will show up here
                    </p>
                    <p className='text-sm text-gray-600 text-center'>
                      Tell us what you're looking for in your contents—who it's for, what to say,
                      and how to say it. The clearer you are, the better Nabiq can deliver.
                    </p>
                  </motion.div>
                </Stack>
              </AnimatePresence>
            );
          case 'sample_content':
            return <GeneratedContents />;
          default:
            return null;
        }
      })()}
    </AnimatePresence>
  );
};
