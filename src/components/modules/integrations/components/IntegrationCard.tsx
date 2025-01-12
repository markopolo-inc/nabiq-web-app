import { Badge, Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const IntegrationCard = ({
  icon,
  title,
  description,
  isConnected = false,
  children,
  badge = null,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isConnected?: boolean;
  children?: React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className='rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-12'
    >
      <Stack>
        <div className='flex gap-6 justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div>{icon}</div>
            <p className='text-gray-900 font-semibold text-lg'>{title}</p>
          </div>
          {isConnected && <Badge color='success'>Connected</Badge>}
        </div>

        <p className='mt-6 text-gray-600 font-normal text-sm'>{t(description)}</p>
        <div className='mt-5'>{badge && badge}</div>
      </Stack>
      {children}
    </motion.div>
  );
};
