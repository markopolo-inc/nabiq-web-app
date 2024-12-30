import { FiTranslation01 } from '@nabiq-icons';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from 'src/store/app/app.slice';
import { useAppSelector } from 'src/store/hooks';

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const { language } = useAppSelector((state) => state.app);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const setLangDir = () => {
    if (i18n.resolvedLanguage) {
      document.documentElement.dir = i18n.dir(i18n.resolvedLanguage);
    }
  };

  useEffect(() => {
    setLangDir();
  }, [i18n, i18n.resolvedLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        dispatch(setLanguage(language === 'en' ? 'ar' : 'en'));
      }}
      className='text-white bg-transparent border-none text-sm font-semibold flex items-center gap-2'
    >
      <FiTranslation01 color='white' size={16} strokeWidth={2} />
      {t('common.button.switch_language')}
    </motion.button>
  );
};
