import { useTranslation } from 'react-i18next';

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
      className='text-white'
    >
      Switch Language
    </button>
  );
};
