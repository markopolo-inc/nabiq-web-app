import { Image } from '@mantine/core';
import cn from 'classnames';
import { motion } from 'framer-motion';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';
import OnboardingImage from 'src/assets/onboarding/sidesection-bg.png';

const TOPBAR_HEIGHT = '56px';

export const OnboardingLayout = ({
  rightSection,
  children,
  rightSectionClassName = '',
}: {
  rightSection: React.ReactNode;
  rightSectionClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div
        className={`fixed top-0 left-0 w-screen bg-gray-950 h-[${TOPBAR_HEIGHT}] flex flex-col justify-center items-center z-10`}
      >
        <Image src={NabiqLogo} alt='Nabiq' className='w-[70px]' />
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-[43%_57%] flex-1 mt-[${TOPBAR_HEIGHT}]`}>
        <div className='bg-gray-50 w-full flex justify-center lg:justify-start items-start p-[64px] h-full max-h-full overflow-y-auto'>
          <div className='flex w-full h-full justify-center items-center max-w-[416px]'>
            <div className='w-full'>{children}</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className={cn(
            'bg-cover bg-center lg:flex items-center justify-end hidden',
            rightSectionClassName,
          )}
          style={{ backgroundImage: `url(${OnboardingImage})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className='w-[80%] max-w-[1024px]'
          >
            {rightSection}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
