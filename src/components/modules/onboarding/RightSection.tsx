import { Image } from '@nabiq-ui';
import MonitoringImage from 'assets/onboarding/monitoring.png';
import { useAppSelector } from 'src/store/hooks';

export const RightSection = () => {
  const { step } = useAppSelector((state) => state.onboarding);
  switch (step) {
    case 'company_creation':
      return <Image src={MonitoringImage} alt='Monitoring' />;
    default:
      return <Image src={MonitoringImage} alt='Monitoring' />;
  }
};
