import { Image } from '@mantine/core';
import { motion } from 'framer-motion';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';

export const Topbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen bg-gray-950 h-[56px] flex flex-col justify-center items-center z-10`}
    >
      <Image src={NabiqLogo} alt='Nabiq' className='w-[70px]' />
    </motion.div>
  );
};
