import cn from 'classnames';
import { motion } from 'framer-motion';
import OnboardingImage from 'src/assets/onboarding/sidesection-bg.png';

// const TOPBAR_HEIGHT = '160px';

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
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-screen bg-gray-950 h-[56px] flex flex-col justify-center items-center z-10`}
      >
        <Image src={NabiqLogo} alt='Nabiq' className='w-[70px]' />
      </motion.div> */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-[43%_57%] flex-1 mt-[56px] h-[calc(100vh-56px)]`}
      >
        <div
          className={`bg-gray-50 w-full flex justify-center lg:justify-start items-start p-[64px] max-h-full h-full overflow-y-auto`}
        >
          <div className='flex w-full h-full justify-center items-center max-w-[416px]'>
            <div className='w-full'>{children}</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
