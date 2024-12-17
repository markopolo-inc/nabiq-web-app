import { Image } from '@nabiq-ui';
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
        >
          <Image src={LeadDatabaseImage} alt='Lead Database' />
        </motion.div>
      );
    default:
      return <Image src={MonitoringImage} alt='Monitoring' />;
  }
};
