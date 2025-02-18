import { Button, Image } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NabiqLogo from 'src/assets/logo/nabiq-dark-logo.png';
import { FiCrossX } from 'src/components/Icons';

export const Topbar = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen bg-gray-950 h-[56px] flex justify-between items-center z-10 px-[64px]`}
      style={{
        direction: 'ltr',
      }}
    >
      <Image
        src={NabiqLogo}
        alt='Nabiq'
        className='w-[70px] cursor-pointer'
        onClick={() => navigate('/')}
      />
      <Button variant='secondary-black' className='w-[40px]' onClick={() => navigate('/billing')}>
        <FiCrossX color='white' size={12} />
      </Button>
    </motion.div>
  );
};
