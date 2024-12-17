import { Image, Stack } from '@nabiq-ui';
import GuideNabiqImage from 'assets/onboarding/guide-nabiq.png';
import LeadDatabaseImage from 'assets/onboarding/leads-image.png';
import MonitoringImage from 'assets/onboarding/monitoring.png';
import { motion } from 'framer-motion';
import { useAppSelector } from 'src/store/hooks';

export const RightSection = () => {
  const { step } = useAppSelector((state) => state.onboarding);
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
        <Stack align='center' gap={54}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='!pt-20 w-[376px]'
          >
            <Image src={GuideNabiqImage} alt='Guide Nabiq' />
          </motion.div>
          <p className='text-xl font-medium text-gray-900'>Generated content will show up here</p>
        </Stack>
      );
    default:
      return <Image src={MonitoringImage} alt='Monitoring' />;
  }
};
