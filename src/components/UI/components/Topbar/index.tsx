import { Image } from '@mantine/core';
import { motion } from 'framer-motion';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';
import { SwitchLanguage } from 'src/components/modules/navigation';

export const Topbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen bg-gray-950 h-[56px] flex justify-between items-center px-[48px] z-10`}
      style={{
        direction: 'ltr',
      }}
    >
      <div>
        <Image
          src={NabiqLogo}
          alt='Nabiq'
          className='w-[70px] cursor-pointer'
          onClick={() => (window.location.href = '/')}
        />
      </div>

      <SwitchLanguage />
    </motion.div>
  );
};
